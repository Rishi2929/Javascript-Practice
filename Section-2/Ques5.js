// Question: Merge Intervals

// Given a collection of intervals, merge any overlapping intervals. For example:

// javascript
// Copy code
// const intervals = [[1,3],[2,6],[8,10],[15,18]];
// The intervals [1,3] and [2,6] overlap, so they should be merged into [1,6]. Similarly, [8,10] and [15,18] should also be merged into [8,10],[15,18].

// Write a function mergeIntervals to solve this problem.

function mergeIntervals(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }

    // Sort intervals based on their start values
    intervals.sort((a, b) => a[0] - b[0]);

    const mergedIntervals = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

        if (currentInterval[0] <= lastMergedInterval[1]) {
            // Merge overlapping intervals
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // Add non-overlapping interval to the result
            mergedIntervals.push(currentInterval);
        }
    }

    return mergedIntervals;
}

// Example usage:
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const result = mergeIntervals(intervals);
console.log(result);
