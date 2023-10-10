import express from 'express'

import * as chronController from '../controllers/chron.controller'

const router = express.Router()

/* GET chron */
router.get('/', chronController.getAll)

/* GET chron */
router.get('/append/all', chronController.appendAll)

/* GET article by id */
router.get('/:id', chronController.getById)

export { router as default }
