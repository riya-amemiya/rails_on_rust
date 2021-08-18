export interface CURRY2 {
    <T extends (a: A, b: B) => ReturnType<T>, A, B>(fn: T): {
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1]): ReturnType<T>;
        (a: ArgumentTypes<typeof fn>[0]): (b: ArgumentTypes<typeof fn>[1]) => ReturnType<T>;
    };
    <T extends <A, B>(a: A, b: B) => ReturnType<T>>(fn: T): {
        <A, B>(a: A, b: B): ReturnType<T>;
        <A>(a: A): <B>(b: B) => ReturnType<T>;
    };
    <T extends <A>(a: A[], b: B) => ReturnType<T>, B>(fn: T): {
        <A, B>(a: A, b: B): ReturnType<T>[];
        <A>(a: A): <B>(b: B) => ReturnType<T>[];
    };
}
export type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;
export const curry2 = (<T extends <A, B>(a: A, b: B) => ReturnType<T>>(fn: T) => {
    function curry(a: ArgumentTypes<typeof fn>[0], b?: ArgumentTypes<typeof fn>[1]) {
        switch (arguments.length) {
            case 1:
                return <T>(b: T) => curry(a, b);
            case 2:
                return fn(a, b);
        }
    }
    return curry;
}) as CURRY2;
