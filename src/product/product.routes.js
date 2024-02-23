
'use strict'

import {Router} from 'express'
import { addProduct, updateProduct, deleteProduct, getProduct, getProducts } from './product.controller.js'
import { validateJwt, isAdmin } from '../middlewares/validate-jwt.js'
const api = Router()
//ADMIN
api.post('/add',[validateJwt, isAdmin], addProduct)
api.delete('/delete/:id',[validateJwt, isAdmin], deleteProduct)
api.put('/update/:id',[validateJwt, isAdmin], updateProduct)
//CLIENT
api.get('/search/:id', getProduct)
api.get('/get', getProducts)

export default api