export class ItemNbt {

    public has_nbt: number
    public can_place_on: any[]
    public can_destory: any[]

    constructor(packet: any) {
        this.has_nbt = packet.has_nbt
        this.can_place_on = packet.can_place_on
        this.can_destory = packet.can_destory
    }

    public setNbt(enabled: boolean) {
        this.has_nbt = enabled ? 1 : 0
    }

    public setCanPlaceOn(data: any[]) {
        this.can_place_on = data
    }

    public setCanDestroy(data: any[]) {
        this.can_destory = data
    }

    public toPacketFormat() {
        return ({
            has_nbt: this.has_nbt,
            can_place_on: this.can_place_on,
            can_destory: this.can_destory,
        })
    }

}