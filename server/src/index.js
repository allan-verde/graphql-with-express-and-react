import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import mongoose from 'mongoose'
import routes from './routes'
import Schema from './graphql'
import { buildSchema } from 'graphql'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/graphql', graphqlHTTP({
  schema: Schema,
  // schema: buildSchema(`type Query { msg: String }`),
  // rootValue: { msg: () => 'Hello World' },
  graphiql: true,
  pretty: true
}))

mongoose.connect('mongodb://localhost:27017/graphql', { useNewUrlParser: true, useUnifiedTopology: true })

routes(app)

app.listen(3000, () => console.log('Express has been started'))
