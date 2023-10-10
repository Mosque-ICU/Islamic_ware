import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import 'dotenv/config'
import * as middleware from './middleware'
// import { getRandomHadith } from 'sacred_texts'
import articlesRouter from './routers/articles.router'

const PORT = process.env.PORT || 8910
const ENV = process.env.NODE_ENV || 'production'

const app: Express = express()

app.use(helmet())

app.use(cors())

app.use(express.json())

app.use(middleware.httpLogger)

// app.get('/', (req, res) => {
// //   res.status(200).send(JSON.stringify(async () => {
// // await getRandomHadith()
// //   }))
// })

// async function get(){
//   console.log('hi')
//   console.log(await getRandomHadith({language:'english'}))
// }
// get()
// Articles routes

app.use('/articles', articlesRouter)

app.get('/:language/:type/', (req:Request,res:Response) => {
 const { language, type } = req.params
  // const xmlFilePath = path.join(__dirname, 'data', 'feeds', language, `${type}.xml`)
  // res.type('xml').sendFile(xmlFilePath)
  console.log(language,type)
    res.status(200).send({language,type})
})

// Error hanlding middleware

app.use(middleware.errorHandler)

app.use(middleware.notFoundHandler)

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${ENV} environment`)
})

export { app as default, server }
