import { Kafka } from 'kafkajs'

export const kafka = new Kafka({
  brokers: ['sincere-moccasin-5481-eu1-kafka.upstash.io:9092'],
  sasl: {
    mechanism: 'scram-sha-256',
    username: 'c2luY2VyZS1tb2NjYXNpbi01NDgxJOfKOHko37cfjvGmqaB0yheJ911h-AJB8Nw',
    password: 'YWE1ZGE4OWItMjdjYy00MzY4LTkzZDgtMDk4ZDQ0NjA5ZTlm',
  },
  ssl: true,
})
