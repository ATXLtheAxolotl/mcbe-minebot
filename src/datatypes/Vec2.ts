export class Vec2 {

    public x: number
    public z: number

    constructor(x: number, y: number, z: number) {
        this.x = x
        this.z = z
    }

    setX(x: number) {
        this.x = x
    }

    setZ(z: number) {
        this.z = z
    }

    public toPacketFormat() {
        return ({
            x: this.x,
            z: this.z
        })
    }

}