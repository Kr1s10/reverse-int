module.exports = function reverse (n) {
    let result = `${n}`;
    if (n < 0) {
        return +result.slice(1).split('').reverse().join('');
    }
    return +result.split('').reverse().join('');
}
