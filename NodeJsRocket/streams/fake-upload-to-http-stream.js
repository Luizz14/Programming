import { Readable } from 'node:stream'
import http from 'node:http';

class OneToHundredStream extends Readable {
    index = 1

    _read() {
        const i = this.index++
        
        setTimeout(() => {
            if ( i > 5) {
                this.push(null)
            } else {
                const buf = Buffer.from(String(i))
                this.push(buf)
            }
        }, 1000)
    }
}

const options = {
    method: 'POST',
    rejectUnauthorized: false,
};

const req = http.request('http://localhost:3334', options, (res) => {
    res.on('data', (data) => {
        console.log(data.toString());
    });
});

const stream = new OneToHundredStream();
stream.pipe(req);

req.on('error', (err) => {
    console.error(err);
});

req.end();

// fetch('https://localhost:3334', {
//     method: 'POST',
//     body: new OneToHundredStream(),
//     duplex: 'half'
// }).then(response => {
//     return response.text()
// }).then(data => {
//     console.log(data)
// })