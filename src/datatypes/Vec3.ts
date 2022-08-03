export class Vec3 {

    public x: number
    public y: number
    public z: number

    constructor(x: number, y: number, z: number) {
        this.x = x
        this.y = y
        this.z = z
    }

    setX(x: number) {
        this.x = x
    }

    setY(y: number) {
        this.y = y
    }

    setZ(z: number) {
        this.z = z
    }

    public toPacketFormat() {
        return ({
            x: this.x,
            y: this.y,
            z: this.z
        })
    }

}