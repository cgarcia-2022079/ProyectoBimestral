'Use strict'
import {Schema, model} from 'mongoose'

const categorySchema = Schema({
    title:{
        type: 'String',
        required: true
    },
    description:{
        type: 'String',
        required: true
    },
    products:{
        type: Schema.ObjectId,
        ref: 'Product'
    },
}, {
    versionKey: false
})

export default model('category', categorySchema)