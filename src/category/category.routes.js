'use strict'

import {Router} from 'express'
import { addCategory, deleteCategory, updateCategory, getCategories } from './category.controller.js'
import {validateJwt, isAdmin} from '../middlewares/validate-jwt.js'
const api = Router()

api.post('/add',[validateJwt, isAdmin], addCategory)
api.delete('/delete/:id',[validateJwt, isAdmin], deleteCategory)
api.get('/get', getCategories)
api.put('/update/:id',[validateJwt, isAdmin], updateCategory)

export default api