const { getInitials, createSlug, average, createSlug2, isPalindrome, createSlug3, findPostById } = require("./index")

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

// Snack 5
// Creare un test che verifichi la seguente descrizione:

// "La funzione isPalindrome verifica se una stringa è un palindromo."

// Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("radar")).toBeTruthy()
    expect(isPalindrome("otto")).toBeTruthy()
    expect(isPalindrome("ciao")).toBeFalsy()
})

// Snack 6
// Creare un test che verifichi la seguente descrizione:

// "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug3("")).toThrow()
})

// Snack 7
// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.

// Creare un test che verifichi le seguenti descrizioni:

// "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"

// Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme 
// (ogni post ha le proprietà id, title e slug, viene passato un id numerico).

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    const posts = [
        { id: 1, title: "Primo post", slug: "primo-post" },
        { id: 2, title: "Secondo post", slug: "secondo-post" }
    ]
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "Secondo post", slug: "secondo-post" })
    expect(findPostById(posts, 4)).toBe(null)
    expect(() => findPostById([1, 2, 3], 1)).toThrow()
})