const { getInitials, createSlug, average, createSlug2 } = require("./index")

// Snack 1
// Creare un test che verifichi la seguente descrizione:

// "La funzione getInitials restituisce le iniziali di un nome completo."

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Mario Rossi")).toStrictEqual(["M", "R"]);
    expect(getInitials("mario Rossi")).toStrictEqual(["M", "R"]);
})

// Snack 2
// Creare un test che verifichi la seguente descrizione:

// "La funzione createSlug restituisce una stringa in lowercase."

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("Stringa")).toBe("stringa");
    expect(createSlug("BLU")).toBe("blu");
})

// Snack 3
// Creare un test che verifichi la seguente descrizione:

// "La funzione average calcola la media aritmetica di un array di numeri."

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([2, 10])).toBe(6);
    expect(() => average([2, "ciao"])).toThrow()
})

// Snack 4
// Creare un test che verifichi la seguente descrizione:

// "La funzione createSlug sostituisce gli spazi con -."

// Esempi:
// createSlug("Questo è un test") → "questo-e-un-test"

test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug2("Questo è un test")).toBe("questo-è-un-test");
})