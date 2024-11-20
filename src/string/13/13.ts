// problem: https://leetcode.com/problems/roman-to-integer/description/

const numericals: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

export const romanToIntNaive = (s: string): number => {
    let total = 0;

    const characters = s.split('');

    for (let i = 0; i < characters.length; i++) {
        const cur = characters[i];
        const next = characters[i + 1];

        if (['I', 'X', 'C'].includes(cur)) {
            if (next === undefined || next === cur) {
                total += numericals[cur];
                continue;
            }

            const modifiedValue = numericals[next] - numericals[cur];

            if (modifiedValue > 0) {
                total += modifiedValue;
                i++;
            } else {
                total += numericals[cur];
            }
        } else {
            total += numericals[cur];
        }
    }

    return total;
};

export const romanToIntEfficent = (s: string): number => {
    let total = 0;

    const characters = s.split('');

    for (let i = 0; i < characters.length; i++) {
        const cur = numericals[characters[i]];
        const next = numericals[characters[i + 1]];

        if(cur < next) {
            total -= cur;
        } else {
            total += cur;
        }
    }

    return total;
};
