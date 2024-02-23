export type EventType = string | symbol;
export type Handler<T = unknown> = (...event: T[]) => void;
export type WildcardHandler<T = Record<string, unknown>> = (
    type: keyof T,
    ...event: T[keyof T][]
) => void;

export type EventHandlerList<T = unknown> = Array<Handler<T>>;
export type WildCardEventHandlerList<T = Record<string, unknown>> = Array<WildcardHandler<T>>;

export type EventHandlerMap<Events extends Record<EventType, unknown>> = Map<
    keyof Events | '*',
    EventHandlerList<Events[keyof Events]> | WildCardEventHandlerList<Events>
>;

export interface FocbizEvent<Events extends Record<EventType, unknown>> {
    all: EventHandlerMap<Events>;

    on<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>): void;
    on(type: '*', handler: WildcardHandler<Events>): void;

    off<Key extends keyof Events>(type: Key, handler?: Handler<Events[Key]>): void;
    off(type: '*', handler: WildcardHandler<Events>): void;

    emit<Key extends keyof Events>(type: Key, ...event: Events[Key][]): void;
    emit<Key extends keyof Events>(type: undefined extends Events[Key] ? Key : never): void;
}

export default function getFocbizEvent<Events extends Record<EventType, unknown>>(
    all?: EventHandlerMap<Events>,
): FocbizEvent<Events> {
    type GenericEventHandler = Handler<Events[keyof Events]> | WildcardHandler<Events>;
    all = all || new Map();

    return {
        all,

        on<Key extends keyof Events>(type: Key, handler: GenericEventHandler & { enentKey?: string }) {
            const enentKey = getKey(type);
            const handlers: Array<GenericEventHandler> | undefined = all!.get(enentKey);
            if (typeof type === 'string') {
                handler.enentKey = type;
            }
            if (handlers) {
                handlers.push(handler);
            } else {
                all!.set(enentKey, [handler] as EventHandlerList<Events[keyof Events]>);
            }
        },

        off<Key extends keyof Events>(type: Key, handler?: GenericEventHandler) {
            const enentKey = getKey(type);
            const handlers: Array<GenericEventHandler> | undefined = all!.get(enentKey);
            if (handlers) {
                if (handler) {
                    handlers.splice(handlers.indexOf(handler) >>> 0, 1);
                } else {
                    if (typeof type === 'string' && type.includes('.')) {
                        const index = (handlers as { enentKey?: Key }[]).findIndex(
                            (item) => item.enentKey === type,
                        );
                        handlers.splice(index, 1);
                    } else {
                        all!.set(type, []);
                    }
                }
            }
        },

        emit<Key extends keyof Events>(type: Key, ...evt: Events[Key][]) {
            const context = (this.emit as { context?: object })?.context;

            let handlers = all!.get(type);
            if (handlers) {
                (handlers as EventHandlerList<Events[keyof Events]>).slice().map((handler) => {
                    handler.call(context, ...evt);
                });
            }
            handlers = all!.get('*');
            if (handlers) {
                (handlers as WildCardEventHandlerList<Events>).slice().map((handler) => {
                    handler.call(context, type, ...evt);
                });
            }
        },
    };
}

const getKey = <T>(type: T) => {
    if (typeof type === 'string' && type.includes('.')) {
        return type.split('.')[0];
    } else {
        return type;
    }
};
