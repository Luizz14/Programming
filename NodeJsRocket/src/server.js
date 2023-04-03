import http from 'node:http'
import { json } from '../streams/middlewares/json.js'

const users = []

const server = http.createServer(async(req, res) => { // dentro dos parametros sao o request e o response
// Dentro do request podemos obter todas as requesicoes que estao chegando no servidor
// E o res (response) vai enviar uma resposta para o cliente
    const { method, url } = req

    await json(req, res)

    if (method === 'GET' && url === '/users') {
        return res
        .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        const { name, email } = req.body

        users.push({
            id: 1,
            name,
            email,
        })
        return res.end('Criacao de usuarios completa')
    }

    return res.end('Hello World!')

})

server.listen(3333)

// localhost:3333