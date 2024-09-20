// Napisz funkcję w JavaScript, która przyjmuje ciąg tekstowy (string), usuwa znaki interpunkcyjne oraz ignoruje wielkość liter, a następnie zwraca najczęściej występujące słowo. Jeśli jest kilka słów, które występują najczęściej, zwróć dowolne z nich.

// 1. Przekształcić tekst na małe litery i na to jest metoda w JS
// 2. Usunać znaki interpunkcyjne
// 3.Rozbić zdanie na poszczególne wyrazy
//4. Do obiektu wurazy i ilośc występowania
//5. Iterujemy po obiekcie i znajdujemy te, co najcześciej występuj i co s najdłuższeZ


const mostFrequentWord = (text) => {
    const lowetText = text.toLowerCase()
    const cleanText = lowetText.replace(/[^a-zA-Z\s]/g, "")
    const words = cleanText.split(" ")

    if (words.length === 0) {
        return "Brak elementów do zliczenia"
    }

    const wordsCount = {
        words.forEach(word => {
            wordsCount[word] = wordsCount[word] ? wordsCount[word] + 1 : 1
        })
    }

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
