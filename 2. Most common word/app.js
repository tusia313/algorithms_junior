// Napisz funkcję w JavaScript, która przyjmuje ciąg tekstowy (string), usuwa znaki interpunkcyjne oraz ignoruje wielkość liter, a następnie zwraca najczęściej występujące słowo. Jeśli jest kilka słów, które występują najczęściej, zwróć dowolne z nich.

// Wymagania:

// Funkcja powinna ignorować znaki interpunkcyjne, wielkość liter, wydajnie na dużych ciągach znaków.
// Ciąg tekstowy zawiera co najmniej jedno słowo.

// 1. Przekształcić tekst na małe litery i na to jest metoda w JS
// 2. Usunać znaki interpunkcyjne
// 3.Rozbić zdanie na poszczególne wyrazy
//4. Policzyć litery w każdym wyrazie (dlugośc wyrazu)
//5. Znaleć wyrazy o takije samej długości
// 6. Porównać poszczególne litery wyrazów o takije samej długości

const mostFrequentWord = (text) => {
    const lowetText = text.toLowerCase()
    const cleanText = lowetText.replace(/[^a-zA-Z\s]/g, "")
    const words = cleanText.split(" ")

    if (words.length === 0) {
        return "Brak elementów do zliczenia"
    }

    const wordsCount = {}
    words.forEach(word => {
        words.forEach(word => {
            wordsCount[word] = (wordsCount[word] || 0) + 1
        })
    })

    let maxCount = 0
    let theWord = ""
//iterujemy po obiekcie
    for (const word in wordsCount) {
        if (wordsCount[word] > maxCount) {
            // ważna kolejność!
            maxCount = wordsCount[word]
            theWord = word
        }
    }

    return theWord
}

const text = "Hello, hello! How are you today? Are you feeling okay today? Hello!"
console.log(mostFrequentWord(text)); // "hello"
