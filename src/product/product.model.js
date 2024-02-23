'use strict'

import {Schema, model} from 'mongoose'

const productModel = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    warranty:{
        type: String,
        required:true
    },
    stock:{
        type: Number,
        required:true
    },
    category:{
        type: Schema.ObjectId,
        ref: 'category',
    },
    soldCount:{
        type:Number,
        default:0
    }
}, {
    versionKey: false
})

export default model('product', productModel)