const { Schema ,  model, Mongoose } = require('mongoose');

const postSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    text: {
        type: String,
        trim: true,
        required: true, 
    },
    date:{
        type: Date,
        default: Date.now
    },
    comment: [{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

// postSchema.virtual('url').get(function(){
//     return '/post/' + this_id
// })

module.exports = mongoose.model('Post', postSchema)