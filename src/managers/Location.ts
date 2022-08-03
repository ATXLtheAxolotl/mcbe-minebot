import { MineFlayer } from "../client";

export class LocationManager {

    public x: number
    public y: number
    public z: number

    private _bot: any

    constructor(client: MineFlayer) {
        this._bot = client
        this._bot._client.once('start_game', (packet) => {
            var { x, y, z } = packet.player_position
            this.x = x
            this.y = y
            this.z = z
        })
    }



}