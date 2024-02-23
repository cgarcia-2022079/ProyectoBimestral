import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import categoriesRoutes from '../src/category/category.routes.js'
import productsRoutes from '../src/product/product.routes.js'
import userRoutes from '../src/user/user.routes.js'
import User from '../src/user/user.model.js'
import { encrypt } from '../src/utils/validator.js'

const server = express()
config()
const port = process.env.PORT || 3200

const createAdmin = async () => {
    try {
        // Verificar si ya hay un administrador creado
        const existingAdmin = await User.findOne({ role: 'ADMIN' })
        if (!existingAdmin) {
            // Si no hay ningún administrador, crea uno nuevo
            const newAdmin = new User({
                name: 'Josué',
                surname: 'Noj',
                email: 'jnoj@gmail.com',
                username: 'jnoj',
                password: '12345678',
                role: 'ADMIN'
            })
            newAdmin.password = await encrypt(newAdmin.password)
            await newAdmin.save()
            console.log('New admin created:', newAdmin)
        }
    } catch (error) {
        console.error('Error creating initial admin:', error)
    }
}

// Configurar el servidor de express
server.use(express.urlencoded({ extended: false }))
server.use(express.json())
server.use(cors())
server.use(helmet())
server.use(morgan('dev'))

// Declaracion de rutas
server.use(userRoutes)
server.use('/category', categoriesRoutes)
server.use('/product', productsRoutes)

// Levantar el servidor
export const initServer = async () => {
    await createAdmin() // Esperar a que se cree el administrador

    server.listen(port, () => {
        console.log(`Server HTTP running in port ${port}`)
    })
}