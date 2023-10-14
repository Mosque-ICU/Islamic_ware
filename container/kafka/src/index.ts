// import express, { Express } from 'express'
// import cors from 'cors'
// import helmet from 'helmet'
// import 'dotenv/config'
// import * as middleware from './middleware'
// import articlesRouter from './routers/articles.router'
// import kafkaRouter from './routers/kafka.router'
// import { runConsumer } from './components/consumer'

import { runConsumer } from './components/consumer'


// const PORT = process.env.PORT || 8910
// const ENV = process.env.NODE_ENV || 'production'

// const app: Express = express()

// app.use(helmet())

// app.use(cors())

// app.use(express.json())

// app.use(middleware.httpLogger)


// app.use('/', (req, res) => {
//   // Your code to handle the request and response goes here
//   res.send('hi')
//   // res.send(runConsumer())
// })

// runConsumer().catch(console.error)


// app.use('/articles', articlesRouter)

// app.use('/kafka', kafkaRouter)


// // Error handling middleware

// app.use(middleware.errorHandler)

// app.use(middleware.notFoundHandler)

// const server = app.listen(PORT, () =>
// {
//   console.log(`Server running on port ${PORT} in ${ENV} environment`)
// })

// export { app as default, server }

runConsumer().catch(console.error)
