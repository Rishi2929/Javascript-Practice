function maxSubarraySum(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {

        currentSum = Math.max(arr[i], currentSum + arr[i]);

        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

