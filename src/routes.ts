import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { coursesController } from './controllers/coursesController'
import { authController } from './controllers/authController'
import { ensureAuth } from './middlewares/auth'
import { episodesController } from './controllers/episodesController'

const router = express.Router()

// Auth
router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

// Categories
router.get('/categories', ensureAuth,  categoriesController.index)
router.get('/categories/:id', ensureAuth, categoriesController.show)

// Courses
router.get('/courses/featured', ensureAuth, coursesController.featured)
router.get('/courses/newest', coursesController.newest)
router.get('/courses/search', ensureAuth, coursesController.search)
router.get('/courses/:id', ensureAuth, coursesController.show)

// Episodes
router.get('/episodes/stream', episodesController.stream)

export { router }