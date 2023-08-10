function countGoalCombinations(x, y) {
    // Create an array to store the number of ways to get the score for each number of goals
    const dp = new Array(x + 1).fill(0).map(() => new Array(y + 1).fill(0));

    dp[0][0] = 1; // Initialization has 1 way to get the score 0-0

    for (let i = 0; i <= x; i++) {
        for (let j = 0; j <= y; j++) {
            if (i > 0) {
                dp[i][j] += dp[i - 1][j];
            }
            if (j > 0) {
                dp[i][j] += dp[i][j - 1];
            }
        }
    }

    return dp[x][y];
}

function processTestCases(input) {
    const lines = input.trim().split('\n');
    const numTestCases = parseInt(lines[0]);
    const testCases = lines.slice(1);

    const results = [];
    for (let i = 0; i < numTestCases; i++) {
        const [x, y] = testCases[i].split(' ').map(Number);
        results.push(countGoalCombinations(x, y));
    }

    return results;
}

const input = `
2
2 0
1 3
`;

const output = processTestCases(input).join('\n');
console.log(output);
