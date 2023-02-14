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
                food_image: {
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
                }
            }]
        },
        avg_rating: {
            type: Number
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
    let avgRating, count
    const reviewList = stall.reviews
    for (const x of reviewList) {
        avgRating += x.rating
        count += 1
    }
    avgRating = avgRating / count
    stall.avgRating = avgRating
    await this.save(stall)
}


const StallModel = mongoose.model('HawkerStall', Stall)
module.exports = StallModel