'use strict'

import Product from './product.model.js'

export const addProduct = async (req, res)=>{
    try {
        let data = req.body
        let product = new Product(data)
        await product.save()
        return res.status(200).send({message: 'Product created successfully', product})
    } catch (error) {
        console.log(error)
        return res.status(500).send({message: 'Error creating product', error})
    }
}

export const deleteProduct = async(req, res) => {
    try {
        let {id} = req.params
        let deleteProduct = await Product.findOneAndDelete({_id:id})
        if (!deleteProduct) return res.status(404).send({message: 'Product is not found, not deleted', error})
        return res.status(200).send({message: 'Product deleted successfully', deleteProduct})
    } catch (error) {
        console.log(error)
        return res.status(500).send({message: 'Error deleting product', error})
    }
}

export const updateProduct = async(req, res) => {
    try {
        let {id} = req.params
        let data = req.body
        let updateProduct = await Product.findOneAndUpdate({_id:id}, data, {new: true})
        if (!updateProduct) return res.status(404).send({message: 'Product is not found, not updated', error})
        return res.status(200).send({message: 'Product updated successfully', updateProduct})
    } catch (error) {
        console.log(error)
        return res.status(500).send({message: 'Error updating product', error})
    }
}

export const getProducts = async(req, res) => {
    try {
        let products = await Product.find()
        if (!products) return res.status(404).send({message: 'Products are not found', error})
        return res.status(200).send({message: 'Products retrieved successfully', products})    
    } catch (error) {
        console.log(error)
        return res.status(500).send({message: 'Error retrieving products', error})
    }
}

export const getProduct = async(req, res) => {
    try {
        let {id} = req.params
        let product = await Product.findOne({_id:id})
        if (!product) return res.status(404).send({message: 'Product is not found', error})
        return res.status(200).send({message: 'Product retrieved successfully', product})
    } catch (error) {
        console.log(error)
        return res.status(500).send({message: 'Error retrieving product', error})
    }
}