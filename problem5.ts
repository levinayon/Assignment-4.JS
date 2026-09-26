//Problem 5 — Quiz Score Summary
function getQuizSummary(scores: number[]): { total: number; average: number } {
    if (scores.length === 0) {
        return {
            total: 0,
            average: 0
        };
    }

    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = total / scores.length;

    return {
        total,
        average
    };
};
console.log(getQuizSummary([8, 9, 7, 10]));
console.log(getQuizSummary([5, 5]));
console.log(getQuizSummary([]));
