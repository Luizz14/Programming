import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumber extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1

        console.log(transformed)

        callback(null, Buffer.from(String(transformed)))
    }
}

const server = http.createServer(async(req, res) => {
    const buffers = []

    for await (const chunk of req) {
        buffers.push(chunk)
    } // O for await vai garantir que nossa aplicação não execute a 
			//lógica antes de finalizar a leitura da stream.

    const fullStreamContent = Buffer.concat(buffers).toString()
		// O concat vai pegar os varios pedacinhos do array e juntar 
    console.log(fullStreamContent)

    return res.end(fullStreamContent)
})
    // return req
    //     .pipe(new InverseNumber())
    //     .pipe(res)
    // })

server.listen(3334)