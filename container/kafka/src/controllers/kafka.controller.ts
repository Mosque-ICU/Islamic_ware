import { Request, Response } from 'express'

import logger from '../common/logger'

import * as kafkaService from '../services/kafka.service'

const getAll = async (req: Request, res: Response) => {
  try {
    const data = await kafkaService.getAll()

    res.status(data.statusCode).send(data.body)
  } catch (e: any) {
    logger.error(e.message)

    res.status(500).send(e.message)
  }
}

const appendAll= async (req: Request, res: Response) => {
  try {
    const data = await kafkaService.getAll()

    res.status(data.statusCode).send(data.body)
  } catch (e: any) {
    logger.error(e.message)

    res.status(500).send(e.message)
  }
}

const getById = async (req: Request, res: Response) => {
  const data = await kafkaService.getById(req)

  res.status(data.statusCode).json(data.body)
}

export { getAll, getById, appendAll }
