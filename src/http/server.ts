import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { createPoll } from './Routes/create-poll'
import { getPoll } from './Routes/get-poll'
import { voteOnPoll } from './Routes/vote-on-poll'

const app = fastify()

app.register(cookie, {
  secret: 'polls-app-nlw',
  hook: 'onRequest',
})

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on port 3333');
})