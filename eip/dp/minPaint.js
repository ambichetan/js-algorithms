var minCost = function (costs) {
    const cache = Array(costs.length).fill('').map(() => Array(costs[0].length).fill(-1));
    cache[0] = costs[0];
    for (let i = 1; i < costs.length; i++) {
        for (let j = 0; j < costs[0].length; j++) {
            let min = Number.MAX_SAFE_INTEGER;
            for (let k = 0; k < costs[0].length; k++) {
                if (k !== j) {
                    min = Math.min(min, cache[i - 1][k] + costs[i][j]);
                }
            }
            cache[i][j] = min;
        }
    }
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < costs[0].length; j++) {
        min = Math.min(min, cache[costs.length - 1][j]);
    }
    return min;
};

var minCostRec = function (costs) {
    const cache = Array(costs.length).fill('').map(() => Array(costs[0].length).fill(-1));
    return helper(costs, 0, null, cache);
};

var helper = function (costs, house, prevColor, cache) {
    if (house === costs.length) {
        return 0;
    } else {
        if (prevColor !== null && cache[house][prevColor] !== -1) return cache[house][prevColor];
        let min = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < costs[0].length; i++) {
            if (i !== prevColor) {
                min = Math.min(min, helper(costs, house + 1, i, cache) + costs[house][i]);
                if (isNaN(min)) {
                    console.log('ha');
                }
            }
        }
        cache[house][prevColor] = min;
        return min;
    }
};

console.log(minCost([[17, 2, 17], [16, 16, 5], [14, 3, 19]]));
console.log(minCostRec([[17, 2, 17], [16, 16, 5], [14, 3, 19]]));