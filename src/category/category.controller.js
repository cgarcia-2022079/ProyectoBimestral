'use strict'
import Category from './category.model.js'

export const addCategory = async (req, res)=>{
    try {
        let data = req.body
        let category = new Category(data)
        await category.save()
        return res.status(200).json({message: 'Category added successfully', category})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Error adding category', error})
    }
}

export const deleteCategory = async (req, res)=>{
    try {
        let {id} = req.params
        let deleteCategory = await Category.findOneAndDelete({_id:id})
        if (!deleteCategory) return res.status(404).send({message: 'Category not found and not deleted'})
        return res.status(200).send({message: 'Category deleted successfully', deleteCategory})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Error deleting category', error})   
    }
}

export const updateCategory = async (req, res)=>{
    try {
        let {id} = req.params
        let data = req.body
        let updateCategory = await Category.findOneAndUpdate({_id:id}, data, {new: true})
        if (!updateCategory) return res.status(404).send({message: 'Category not found and not updated'})
        return res.status(200).send({message: 'Category updated successfully', updateCategory})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Error updating category', error})
    }
}

export const getCategories = async (req, res) =>{
    try {
        let categories = await Category.find()
        if (!categories) return res.status(404).send({message: 'Categories not found'})
        return res.status(200).send({message: 'Categories found', categories})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Error getting categories', error})
    }
}