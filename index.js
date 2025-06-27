// 1
function getInitials(str) {
    const words = str.split(" ");
    return words.map(el => el.charAt(0).toUpperCase());
}

// 2
function createSlug(str) {
    return str.toLowerCase()
}

// 3
function average(list) {
    return list.reduce((acc, n) => acc + n, 0) / list.length
}

module.exports = {
    getInitials,
    createSlug,
    average,

}