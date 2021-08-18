const test = (x: any, y: any) => {
    if (x !== y) {
        throw new Error(`x:${x},y:${y}`);
    }
};
