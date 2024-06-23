const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    rating: {
        type: Number,
        default: null
    },
    message: {
        type: String,
        required: true,
    },
    media: {
        type: Array,
        default: [],
    }
}, { timestamps: true });

module.exports = mongoose.model('Review', schema);