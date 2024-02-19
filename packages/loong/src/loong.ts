type IRyuko = object;
type IPublish = (a: IRyuko) => void
type ISubscribe = (cb: Function) => void
type INotify = (a: IRyuko, b: any) => void
type IMessage = WeakMap<IRyuko, any>
type Iclansman = WeakMap<IRyuko, any>

interface Roar {
    publish: IPublish
}

interface Er {
    subscribe: ISubscribe
}

interface Notify {
    notify: INotify
}

interface Chamber {
    message: IMessage
    clansman: Iclansman
}

class LoongRoar implements Roar {
    ryuko: IRyuko
    context: LoongChamber
    publish(ryuko: IRyuko) {
        this.context.publish(ryuko)
    }
    constructor(ryuko: IRyuko, context: LoongChamber) {
        this.ryuko = ryuko;
        this.context = context;
    }
}

class LoongEr implements Er {
    ryuko: IRyuko
    context: LoongChamber
    subscribe(cb: Function) {
        this.context.subscribe(cb)
    }
    constructor(ryuko: IRyuko, context: LoongChamber) {
        this.ryuko = ryuko;
        this.context = context;
    }
}

class LoongChamber implements Chamber, Roar, Er, Notify {
    message: IMessage
    ryuko: IRyuko
    clansman: Iclansman
    constructor(ryuko: IRyuko) {
        this.ryuko = ryuko;
        this.clansman = new WeakMap();
        this.message = new WeakMap();
        this.message.set(ryuko, ryuko);
    }
    notify() {
        const currentMessage = this.message.get(this.ryuko);
        const currentClansman = this.clansman.get(this.ryuko);
        currentClansman.forEach((cb: Function) => cb(currentMessage))
    };
    publish(ryuko: IRyuko) {
        this.message.set(this.ryuko, ryuko);
    }
    subscribe(cb: Function) {
        const current = this.clansman.get(this.ryuko);
        if (!current) {
            this.clansman.set(this.ryuko, [])
        }
        this.clansman.get(this.ryuko).push(cb)
    };
}

class Loong {
    chamber: LoongChamber
    loongRoar: LoongRoar
    loongEr: LoongEr
    constructor(ryuko: object) {
        this.chamber = new LoongChamber(ryuko);
        this.loongRoar = new LoongRoar(ryuko, this.chamber);
        this.loongEr = new LoongEr(ryuko, this.chamber);
    }

}

export function loong(ryuko: IRyuko) {
    const loong = new Loong(ryuko)
    return loong;
}













