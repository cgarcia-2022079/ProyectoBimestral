'use strict'

import {Schema, model} from 'mongoose'

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        minLength: [8, 'Password must be 8 characteres']
    },
    username:{
        type: String,
        required: true,
        lowerCase: true
    },
    role:{
        type: String,
        upperCase: true,
        enum: ['ADMIN', 'CLIENT'],
        default: 'CLIENT',
        required: true
    }
}, {
    versionKey: false
})

export default model('user', userSchema)