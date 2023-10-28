import { Request } from 'express'

import { ServiceAPIResponse } from '../../types/service-response'
import { Kafka } from '../../types/kafkas'

const getAll = async (): Promise<ServiceAPIResponse<Kafka[]>> => {
  /* fetch data here */
  return {
    statusCode: 200,
    body: [
      {
        title: 'Kafka title',
      }
    ]
  }
}

const getById = async (req: Request): Promise<ServiceAPIResponse<Kafka>> => {
  /* fetch data here */
  /* id: req.params?.id */
  return {
    statusCode: 200,
    body: {
      title: `Kafka title ${req.params?.id}`,
    }
  }
}

export { getAll, getById }
