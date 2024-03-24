const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({ 
    name: [{
        type: String,
        required: true,
    }],
    description: [{
        type: String,
        required: true,
    }],
    slug: String,
    image: String,
    parent: [{ type: Schema.Types.ObjectId, ref: 'Node' }],
    active: [{
        type: Boolean,
        required: true,
    }, { timestamps: true }],
});

module.exports = mongoose.model('Category', schema);