//import { createServer } from 'node:http'

//const server = createServer((request, response) => { 
//    response.write('Oi')

//    return response.end()
//})

//server.listen(3333)

import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js'


const server = fastify()


const database = new DatabaseMemory()

server.post('/videos', () => {
    database.create({
        title: "Video 01",
        description: "Esse é o vídeo 01",
        duration: 180,
    })
})

server.get('/video', () => {
    return 'Hello Gabriel'
})

server.put('/videos/:id', () => {
    return 'Hello node'
})

server.delete('/videos/:id', () => {
    return 'Hello node'
})

server.listen({
    port: 3333,
})