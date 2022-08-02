import { EventEmitter } from 'events'
import { Client, ClientOptions, createClient } from 'bedrock-protocol'

interface MineflayerOptions extends ClientOptions { }

export class MineFlayer extends EventEmitter {

    public options: MineflayerOptions
    public connected: boolean = false

    private _client: Client

    constructor(options: MineflayerOptions) {
        super()
        this.options = options

        this._client = createClient({
            ...this.options
        })

        this._client.on('ready', () => {
            this.connected = true
            this.emit('ready')
        })
        this._client.on('close', () => {
            this.connected = false
            this.emit('disconnect')
        })
    }


}