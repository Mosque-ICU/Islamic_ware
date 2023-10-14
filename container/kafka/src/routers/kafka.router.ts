import express from 'express'

import * as kafkaController from '../controllers/kafka.controller'

const router = express.Router()

/* GET kafka */
router.get('/', kafkaController.getAll)

/* GET kafka */
router.get('/append/all', kafkaController.appendAll)

/* GET article by id */
router.get('consume/:id', kafkaController.getById)

export { router as default }
