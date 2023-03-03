const mongoose  = require('mongoose')

const Schema = mongoose.Schema

const Stall = new Schema({
        stall_name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        img: {
            type: String
        },
        menu_item: {
            type: [String]
        } ,
        topseller: {
            type: [{
                name_of_food: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                tsImg: {
                    type: String,
                    required: true
                }
            }]
        },
        hawker_centre_belong: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'hawkercentre',
            required: true
        },
        reviews: {
            type: [{
                name: {
                    type: String,
                    required: true
                },
                food: {
                    type: String,
                    required: true
                },
                date_of_review: {
                    type: String,
                    required: true
                },
                date_of_visit: {
                    type: String,
                    required: true
                },
                rating: {
                    type: Number,
                    required: true
                },
                comment: {
                    type: String
                },
                reviewImg: {
                    public_id: {
                        type: String,
                        required: true
                    },
                    url: {
                        type: String,
                        required: true
                    }
                }
            }]
        },
        avg_rating: {
            type: Number,
            double: true,

            required: true
        },
        stall_belong: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user-data',
            required: true
        },

        image: {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    },
    { collection: 'HawkerStall'}
)

//Recompute the AvgRating
//Need to call the function everytime add review
Stall.statics.computeAvgRating = async function(id) {
    const stall = await this.findById(id)
    if (stall == null) {
        return
    }
    console.log(stall.avg_rating)
    let avgRating = 0, count = 0
    const reviewList = stall.reviews
    for (const x of reviewList) {
        avgRating += x.rating
        count += 1
    }
    console.log("total is " + avgRating)
    console.log("count is " + count)
    if (count > 0) {
        avgRating = avgRating / count
    }    
    console.log("average is " + avgRating)
    stall.avg_rating = avgRating
    console.log(stall.avg_rating)
    await stall.save(stall)
}


const StallModel = mongoose.model('HawkerStall', Stall)
module.exports = StallModel