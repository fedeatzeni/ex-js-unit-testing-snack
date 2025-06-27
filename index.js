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
    list.forEach(el => { if (isNaN(el)) throw new Error("Errore") })
    return list.reduce((acc, n) => acc + n, 0) / list.length
}

// 4
function createSlug2(str) {
    return str.toLowerCase().replaceAll(" ", "-")
}

module.exports = {
    getInitials,
    createSlug,
    average,
    createSlug2,

}