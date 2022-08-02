import { MineFlayer } from '../src/index'

var client = new MineFlayer({
    host: '127.0.0.1',
    port: 19132,
    username: 'Notch',
    offline: true
})

client.connect()