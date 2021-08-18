export type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;
export interface CURRY1 {
    <T extends (a: A) => ReturnType<T>, A>(fn: T): {
        (a: ArgumentTypes<typeof fn>[0]): ReturnType<T>;
        (): (a: ArgumentTypes<typeof fn>[0]) => ReturnType<T>;
    };
    <T extends <A>(a: A) => ReturnType<T>>(fn: T): {
        <A, B>(a: A): B;
        (): <A, B>(a: A) => B;
    };
}
const curry1 = (<T extends <A>(a: A) => ReturnType<T>>(fn: T) => {
    return function curry(a?: ArgumentTypes<typeof fn>[0]) {
        switch (arguments.length) {
            case 0:
                return <B>(a: B) => curry(a);
            case 1:
                return fn(a);
        }
    };
}) as CURRY1;
export { curry1 };
