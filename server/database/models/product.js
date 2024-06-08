const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({ 
    name: {type: String, required: true },
    description: { type: String, required: true },
    slug: String,
    image: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category',
        required: true,
    },
    active: {   
        type: Boolean,
        required: true,
    },
    stocks: {
        type: Number,
        required: true,
        min: [6, 'Must be at least 6, got {VALUE}'],
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', schema);