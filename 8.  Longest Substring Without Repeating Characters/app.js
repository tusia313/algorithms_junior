//Write a function that finds the length of the longest substring in a given string where no characters repeat. "abcabcbb", the function should return 3 because the longest substring is "abc"."bbbbb", the function should return 1 because the longest substring is "b"."pwwkew", the function should return 3 because the longest substring is "wke".
//Hints: You can use an object to store characters and their indices to track repetitions AND try using a two-pointer approach.
const longestSubstring = (text) => {
    const letters = {}
    let start = 0
    let maxLength = 0

    for (let i = 0; i < text.length; i++) {
        const currentLetter = text[i]
        // Jeśli litera pojawiła się w bieżącym podciągu, zaktualizuj `start`
        if (letters[currentLetter] >= start) {
            start = letters[currentLetter] + 1
        }
        // Zapisz lub zaktualizuj indeks bieżącej litery
        letters[currentLetter] = i
        // Oblicz długość bieżącego podciągu i aktualizuj maxLength, jeśli jest większa
        maxLength = (i - start + 1) > maxLength ? (i - start + 1) : maxLength
    }
    return maxLength
}
const text = "abcabcbb"
console.log(longestSubstring(text)) // Oczekiwane: 3
Weźmy ciąg "abcabcbb":
Przy pierwszym wystąpieniu litery 'a':
letters = { 'a': 0 }
start = 0
Podciąg: "a"
Dodajemy 'b' i 'c' bez problemu:

letters = { 'a': 0, 'b': 1, 'c': 2 }
start = 0
Podciąg: "abc"
Napotykamy ponownie 'a' na pozycji 3:

letters['a'] = 0 (czyli 'a' było już wcześniej w bieżącym podciągu)
0 >= 0 jest prawdą, więc start musi zostać przesunięty na letters['a'] + 1 = 1.
Nowy podciąg zaczyna się od 'b', czyli "bca".

Iteracja 1 (i = 0):

currentChar = 'a'
start = 0
Nie ma powtórzeń, więc aktualizujemy maxLength = i - start + 1 = 0 - 0 + 1 = 1.
Iteracja 2 (i = 1):

currentChar = 'b'
start = 0
Nie ma powtórzeń, więc maxLength = i - start + 1 = 1 - 0 + 1 = 2.
Iteracja 3 (i = 2):

currentChar = 'c'
start = 0
Nie ma powtórzeń, więc maxLength = i - start + 1 = 2 - 0 + 1 = 3.
Iteracja 4 (i = 3):

currentChar = 'a'
Znak 'a' już wystąpił w bieżącym podciągu, więc przesuwamy start do 1.
Nie zmieniamy maxLength, bo długość podciągu pozostaje 3.
Porównanie z maxLength:

Przy każdej iteracji porównujemy bieżącą długość podciągu i - start + 1 z dotychczasowym maxLength.
Jeśli bieżąca długość jest większa, aktualizujemy maxLength do tej wartości.
Podsumowując: maxLength zawsze przechowuje największą dotychczas znalezioną długość podciągu bez powtarzających się znaków. Dzięki temu na końcu algorytmu otrzymujemy długość najdłuższego podciągu unikalnych znaków w danym ciągu.