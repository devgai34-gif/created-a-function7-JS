// --- 1. ИМПОРТЫ В САМОМ ВЕРХУ ФАЙЛА ---
import { socialComments } from './comments.js';

console.log("Файл подключен");
console.log("Получили комментарии:", socialComments);

// --- ЗАДАНИЕ 1-2: Числа ---
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter((num) => num >= 5);

console.log("Исходный массив:", numbers);
console.log("Отфильтрованный массив:", filteredNumbers);

// --- ЗАДАНИЕ 3: Машины ---
const cars = ["лада", "нива", "калина", "ваз"];
const hasNiva = cars.includes("нива");
console.log("Есть ли нива в списке?", hasNiva); 

// --- ЗАДАНИЕ 4: Функция (универсальная) ---
// Используем spread [...arr], чтобы не портить оригинальный массив
function reverseMyArray(arr) {
    return [...arr].reverse(); 
}

// Переворачиваем числа и машины
const reversedNumbers = reverseMyArray(filteredNumbers);
console.log("Числа наоборот:", reversedNumbers);

const reversedCars = reverseMyArray(cars);
console.log("Машины наоборот:", reversedCars);

// --- ЗАДАНИЕ 6-7 (ИСПРАВЛЕННОЕ) ---
// Нам НЕ НУЖНО снова писать import здесь, мы уже сделали это на 2-й строке.
// Нам НЕ НУЖНО снова объявлять функцию reverseMyArray, она уже есть выше.

console.log("Данные из другого файла успешно получены и готовы к работе.");

// Просто используем уже созданную функцию и уже импортированные данные
const reversedComments = reverseMyArray(socialComments);
console.log("Комментарии в обратном порядке:", reversedComments);