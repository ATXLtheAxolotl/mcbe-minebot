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
    }

    private events() {
        this._client.on('ready', () => {
            this.connected = true
            this.emit('ready')
        })
    }

    public connect() {
        this._client = createClient({
            ...this.options
        })
        this.events()
    }

}