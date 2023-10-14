import { Consumer, EachMessagePayload } from 'kafkajs'
import { kafka } from './env'
// or this

require('dotenv').config()

// uncomment and fill this

// const kafka = new Kafka({
//   brokers: [KAFKA_URL as string],
//   sasl: {
//     mechanism: 'scram-sha-256',
//     // username: KAFKA_USERNAME as string,
//     // password: KAFKA_PASSWORD as string,
//   },
//   ssl: true,
// })

const consumer: Consumer = kafka.consumer({ groupId: 'GROUP_NAME' })

const runConsumer = async () => {
  try {
    await consumer.connect()

    await consumer.subscribe({ topic: 'Local_events' })

    await consumer.run({
      eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
        try {
          // Access properties of the KafkaMessage
          const messageValue = message.value ? message.value.toString() : null
          const messageKey = message.key ? message.key.toString() : null
          const messageHeaders = message.headers

          console.log({
            topic: topic,
            partition: partition,
            messageValue: messageValue,
            messageKey: messageKey,
            messageHeaders: messageHeaders,
          })
        } catch (error) {
          console.error('Error processing message:', error)
        }
      },
    })

    // Graceful shutdown when an interrupt signal is received
    process.on('SIGINT', async () => {
      try {
        await consumer.disconnect()
      } catch (e) {
        console.error('Error during disconnect:', e)
      }
      process.exit(0)
    })
  } catch (error) {
    console.error('Consumer error:', error)
  }
}

runConsumer().catch(console.error)
