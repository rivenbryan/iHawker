/**
 * This module contains the Mongoose model for Hawker Stall data
 * @module models/stall.model
 */

const mongoose  = require('mongoose')

const Schema = mongoose.Schema

/**
 * A mongoose schema for a hawker stall in a hawker centre.
 * @typedef {Object} HawkerStall
 * @property {string} stall_name - The name of the hawker stall.
 * @property {string} description - A brief description of the hawker stall.
 * @property {string} img - The image URL for the hawker stall.
 * @property {string[]} menu_item - An array of menu items offered by the hawker stall.
 * @property {Object[]} topseller - An array of top selling menu items offered by the hawker stall.
 * @property {string} topseller[].name_of_food - The name of the top selling menu item.
 * @property {number} topseller[].price - The price of the top selling menu item.
 * @property {string} topseller[].tsImg - The image URL for the top selling menu item.
 * @property {ObjectID} hawker_centre_belong - The ObjectID of the hawker centre to which the hawker stall belongs.
 * @property {Object[]} reviews - An array of reviews for the hawker stall.
 * @property {string} reviews[].name - The name of the user who wrote the review.
 * @property {string} reviews[].food - The name of the menu item reviewed.
 * @property {string} reviews[].date_of_review - The date the review was written.
 * @property {string} reviews[].date_of_visit - The date the user visited the hawker stall.
 * @property {number} reviews[].rating - The rating given by the user.
 * @property {string} reviews[].comment - An optional comment left by the user.
 * @property {Object} reviews[].reviewImg - An object containing the public_id and URL of an image uploaded by the user with their review.
 * @property {string} reviews[].reviewImg.public_id - The public ID of the image uploaded by the user.
 * @property {string} reviews[].reviewImg.url - The URL of the image uploaded by the user.
 * @property {number} avg_rating - The average rating of the hawker stall.
 * @property {ObjectID} stall_belong - The ObjectID of the user who owns the hawker stall.
 */

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

/**
 * Recompute the average rating for a hawker stall based on its reviews.
 * @function computeAvgRating
 * @memberof HawkerStall
 * @async
 * @param {ObjectID} id - The ObjectID of the hawker stall to update.
 * @returns {Promise<void>}
 * @throws Will throw an error if the hawker stall with the given ObjectID cannot be found.
 */

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
        avgRating = (avgRating / count).toFixed(2)
    }
    console.log("average is " + avgRating)
    stall.avg_rating = avgRating
    console.log(stall.avg_rating)
    await stall.save(stall)
}


const StallModel = mongoose.model('HawkerStall', Stall)
module.exports = StallModel