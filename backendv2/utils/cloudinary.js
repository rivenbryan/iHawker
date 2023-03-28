/**
 * Cloudinary configuration object for accessing the Cloudinary API.
 * @module cloudinary
 * @requires cloudinary
 * @property {string} cloud_name - Cloudinary account name.
 * @property {string} api_key - Cloudinary API key.
 * @property {string} api_secret - Cloudinary API secret.
 */

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_KEY_SECRET
  });

  module.exports= cloudinary;