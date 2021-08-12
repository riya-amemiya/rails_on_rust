const test = (x: any, y: any) => {
    if (x !== y) {
        console.error(`Error x:${x},y:${y}`);
    }
};
test(1, 2);
