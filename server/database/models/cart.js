const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({ 
    produt: {
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true,
    },
    total_product: {
        type: Number,
        required: true,
        default: 1
    }
}, { timestamps: true });

module.exports = mongoose.model('cart', schema);