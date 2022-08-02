import { ItemNbt } from "./index"

export class Item {

    public network_id: number
    public count: number
    public metadata: number
    public has_stack_id: number
    public block_runtime_id: number
    public extra: ItemNbt // WIP

    constructor(packet: any) {
        this.network_id = packet.network_id
        this.count = packet.count
        this.metadata = packet.metadata
        this.has_stack_id = packet.has_stack_id
        this.block_runtime_id = packet.block_runtime_id
        this.extra = packet.extra
    }

    public setNetworkId(id: number) {
        this.network_id = id
    }

    public setCount(amount: number) {
        this.count = amount
    }

    public setMetaData(data: number) {
        this.metadata = data
    }

    public setHasStackId(enabled: boolean) {
        this.has_stack_id = enabled ? 1 : 0
    }

    public setBlockRuntimeId(id: number) {
        this.block_runtime_id = id
    }

    public setNbt(data: ItemNbt) { // WIP
        this.extra = data
    }

    public toPacketFormat() {
        return ({
            network_id: this.network_id,
            count: this.count,
            metadata: this.metadata,
            has_stack_id: this.has_stack_id,
            block_runtime_id: this.block_runtime_id,
            extra: this.extra || {
                has_nbt: 0,
                can_place_on: [],
                can_destory: [],
            }
        })
    }
}