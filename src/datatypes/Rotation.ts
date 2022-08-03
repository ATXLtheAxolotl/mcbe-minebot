export class Rotation {

    public yaw: number
    public pitch: number
    public head_yaw: number

    constructor(yaw: number, pitch: number, head_yaw: number) {
        this.yaw = yaw
        this.pitch = pitch
        this.head_yaw = head_yaw
    }

    public setYaw(yaw: number) {
        this.yaw = yaw
    }

    public setPitch(pitch: number) {
        this.pitch = pitch
    }

    public setHeadYaw(head_yaw: number) {
        this.head_yaw = head_yaw
    }

    public toPacketFormat() {
        return ({
            yaw: this.yaw,
            pitch: this.pitch,
            head_yaw: this.head_yaw
        })
    }

}