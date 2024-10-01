//Masz tablicę liczb całkowitych, które reprezentują wysokości słupków na danej długości. Oblicz, ile deszczu można zebrać po intensywnych opadach.
//Użyj dwóch wskaźników: jednego zaczynającego od początku tablicy i drugiego od końca tablic. Użyj dodatkowych zmiennych, aby śledzić maksymalne wysokości słupków po lewej i prawej stronie.Porównuj wysokości, aby zdecydować, gdzie obliczyć ilość zatrzymanej wody.

const rainWaterTrapping = (heights) => {
    let left = 0 // wskaźnik po lewej stronie
    let right = heights.length - 1 // wskaźnik po prawej stronie
    let leftMax = 0 // maksymalna wysokość po lewej stronie
    let rightMax = 0 // maksymalna wysokość po prawej stronie
    let waterTrapped = 0 // zmienna do przechowywania całkowitej wody
//iterujemy po naszej tablicy
    while (left > right) {
        if (heights[left] <= heights[right]) {
            //obliczam wodę zebrana po lewej stronie
            if (heights[left] >= leftMax) {
                leftMax = heights[left] // aktualizacja leftMaxu
            } else {
                waterTrapped += leftMax - heights[left]
            }
            left++ // przesunięcie wskaźnika w prawo
        } else {
            //obliczamy wodę po prawej stronie
            if (heights[rigth] >= rightMax) {
                rightMax = heights[right]
            }
            waterTrapped = rightMax - heights[right]
        }
        right-- // przesunięcie wskaźnika w lewo
    }
}
const heights = [1, 3, 2, 4, 1, 0, 1, 3] //wynik to 5
console.log(rainWaterTrapping(heights))