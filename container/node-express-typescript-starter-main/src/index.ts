import express, { Express } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import 'dotenv/config'
import * as middleware from './middleware'
// import { getRandomHadith } from 'sacred_texts'
import { appendFeed } from 'super_ez_rss'
import {  retrieveFeed } from 'super_ez_rss'
import articlesRouter from './routers/articles.router'
// import chronRouter from './routers/chron.router'

const PORT = process.env.PORT || 8910
const ENV = process.env.NODE_ENV || 'production'

const app: Express = express()

app.use(helmet())

app.use(cors())

app.use(express.json())

app.use(middleware.httpLogger)


app.use('/articles', articlesRouter)


app.get('/:language/:type/', async (req, res) => {
  try {
    const feed = await retrieveFeed('868404c7-2bb3-4c07-b480-4324b6f792a5')

    if (!feed) {
      return res.status(404).send('Feed not found')// Handle feed not found scenario
    } else {
    console.log('feed found', feed)

    // Send the file using the absolute path
    res.type('xml').send(feed)
    }

    // return res.status(200).send('Feed found') // Handle feed found scenario
  } catch (error) {
    console.error('Error:', error)
    res.status(500).send('Internal Server Error') // Handle other errors
  }
})

let newFeed = appendFeed('868404c7-2bb3-4c07-b480-4324b6f792a5', 'new', 'https://google.com', 'this is desc', new Date().toISOString())
console.log(newFeed)

// app.get('/chron', async () =>
// {
// let newFeed = await appendFeed('868404c7-2bb3-4c07-b480-4324b6f792a5', 'new', 'https://google.com', 'this is desc', new Date().toISOString())
// console.log(newFeed)
// })

// Error handling middleware

app.use(middleware.errorHandler)

app.use(middleware.notFoundHandler)

const server = app.listen(PORT, () =>
{
  console.log(`Server running on port ${PORT} in ${ENV} environment`)
})

export { app as default, server }
