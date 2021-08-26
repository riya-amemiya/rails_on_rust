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
export { Props };
