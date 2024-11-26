export const climbStairs = (n: number): number => {
    let solutions = [1, 2];

    for(let i = 2; i < n; i++) {
        const nextSolutionCount = solutions[i - 1] + solutions[i - 2];
        solutions.push(nextSolutionCount);
    }

    return solutions[n - 1];
};