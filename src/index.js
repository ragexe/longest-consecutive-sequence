module.exports = function longestConsecutiveLength(array) {
    let answer = 0;
    let temp = 1;

    if (array.length < 2) {
        return array.length
    }

    array = array.sort((a, b) => a - b);
    for (let i = 1; i < array.length; i++) {
        if (array[i] - 1 === array[i - 1] || array[i] === array[i - 1]) {
            temp += array[i] - array[i - 1];
        } else {
            temp = 1;
        }
        if (temp > answer) answer = temp
    }

    return answer
};
