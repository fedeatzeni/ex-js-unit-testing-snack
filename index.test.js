// Snack 1
// Creare un test che verifichi la seguente descrizione:

// "La funzione getInitials restituisce le iniziali di un nome completo."

function getInitials(str) {
    const words = str.split(" ");
    return words.map(el => el.charAt(0).toUpperCase());
}

console.log(getInitials("Mario Rossi"));


test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Mario Rossi")).toStrictEqual(["M", "R"]);
    expect(getInitials("mario Rossi")).toStrictEqual(["M", "R"]);
})