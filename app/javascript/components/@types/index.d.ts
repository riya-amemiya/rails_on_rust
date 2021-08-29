type Props = {
    python?: string[];
    rust: any;
    data: {
        time: {
            hour: number;
            minute: number;
            second: number;
        };
        day: {
            year: number;
            month: number;
            day: number;
        };
        url: {
            action: string;
            controller: string;
        };
    };
};
type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;
export { Props, ArgumentTypes };
