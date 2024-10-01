//Masz daną sekwencję nawiasów, która zawiera tylko znaki: '(', ')', '{', '}', '[', i ']'. Twoim zadaniem jest napisać funkcję, która sprawdzi, czy dana sekwencja nawiasów jest poprawnie zbalansowana.
//Poprawna sekwencja nawiasów oznacza, że: ażdy otwierający nawias ma odpowiadający zamykający nawias tego samego typu ORAZ nawiasy muszą być zamykane w poprawnej kolejności.
//STOS
const checkParens = (bracket) => {
    // Warunek brzegowy - jeśli długość jest nieparzysta, od razu zwróć false
    if (bracket.length % 2 !== 0) {
        return false;
    }
    // Stos do przechowywania otwierających nawiasów
    const stack = []
    // Mapa pasujących nawiasów GENIALNE, bo to obiekt
    const matchingBrackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for (let i = 0; i < bracket.length; i++) {
        const currentChar = bracket[i];
        // Jeśli to otwierający nawias, dodaj go na stos
        if (currentChar === '(' || currentChar === '[' || currentChar === '{') {
            stack.push(currentChar);
        } // Jeśli to zamykający nawias, sprawdź, czy pasuje do ostatniego otwierającego
        else if (currentChar === ')' || currentChar === ']' || currentChar === '}') {
            // !!! W logice sprawdzania, gdy napotykasz zamykający nawias, najpierw powinnaś sprawdzić, czy stos jest pusty. Jeśli tak, to oznacza, że nie masz otwierającego nawiasu do zamknięcia. W tym wypadku możesz od razu zwrócić false.
            if (stack.length === 0 || stack.pop() !== matchingBrackets[currentChar]) {
                return false
            }
        }
    }
    // Na końcu stos musi być pusty, żeby wszystkie nawiasy były poprawnie zamknięte
    return stack.length === 0;
}
const bracket = "{[]}"
console.log(checkParens(bracket))
// Input: s = "()"
// Output: true
// Input: s = "()[]{}"
// Output: true
// Input: s = "(]"
// Output: false
// Input: s = "([)]"
// Output: false
// Input: s = "{[]}"
// Output: true
