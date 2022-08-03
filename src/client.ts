import { EventEmitter } from 'events'
import { Client, ClientOptions, createClient } from 'bedrock-protocol'
import { LocationManager } from './managers'

interface MineflayerOptions extends ClientOptions { }

export class MineFlayer extends EventEmitter {

    public options: MineflayerOptions
    public connected: boolean = false

    public location: LocationManager

    private _client: Client

    constructor(options: MineflayerOptions) {
        super()
        this.options = options

        this._client = createClient({
            ...this.options
        })

        this.location = new LocationManager(this)

        this._client.on('ready', () => {
            this.connected = true
            this.emit('ready')
        })
        this._client.on('close', () => {
            this.connected = false
            this.emit('disconnect')
        })
        // this._client.on('start_game', (packet) => {
        //     console.log(packet)
        // })
    }


}