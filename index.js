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

// 5 
function isPalindrome(str) {
    return str === [...str].reverse().join("")
}

// 6
function createSlug3(str) {
    if (!str) throw new Error
    return str.toLowerCase()
}

// 7 
function findPostById(list, id) {
    list.forEach(el => { if (el.id === undefined || el.title === undefined || el.slug === undefined) throw new Error })
    return list.find(el => el.id === id) || null
}


module.exports = {
    getInitials,
    createSlug,
    average,
    createSlug2,
    isPalindrome,
    createSlug3,
    findPostById,
}