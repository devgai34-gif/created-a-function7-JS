// --- 1. ИМПОРТЫ В САМОМ ВЕРХУ ФАЙЛА ---
import { socialComments } from './comments.js';

// --- ЗАДАНИЕ 1-2: Числа ---
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter((num) => num >= 5);
console.log(filteredNumbers);

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

// --- ЗАДАНИЕ 7: Фильтрация по почте .com ---

// 1. Создаем новый массив 'comComments'
// 2. Метод filter проходит по каждому объекту (comment)
// 3. Условие: если email содержит ".com", объект попадает в новый массив
const comComments = socialComments.filter((comment) => {
    return comment.email.includes(".com");
});

// Выводим результат в консоль
console.log("Комментарии, почта которых содержит .com:");
console.log(comComments);

// --- ЗАДАНИЕ 8: Изменение postId ---

const updatedComments = socialComments.map((comment) => {
  // Создаем копию объекта, чтобы не испортить оригинал
  const newComment = { ...comment };

  if (newComment.id <= 5) {
    newComment.postId = 2; // Если id 1, 2, 3, 4, 5 -> ставим postId: 2
  } else {
    newComment.postId = 1; // Для всех остальных (id > 5) -> ставим postId: 1
  }

  return newComment; // Возвращаем измененный объект в новый массив
});

console.log("Обновленные комментарии (задание 8):", updatedComments);

// --- ЗАДАНИЕ 9: Только ID и Имя ---

const shortComments = socialComments.map((comment) => {
  // Возвращаем новый объект, в котором пишем только два поля
  return {
    id: comment.id,
    name: comment.name
  };
});

console.log("Краткий список (задание 9):", shortComments);

// --- ЗАДАНИЕ 10: Проверка длины сообщения ---

const validatedComments = socialComments.map((comment) => {
  // 1. Создаем копию объекта (чтобы не менять оригинал)
  const newComment = { ...comment };

  // 2. Проверяем длину текста в поле body
  if (newComment.body.length > 180) {
    newComment.isInvalid = true;  // Слишком длинное
  } else {
    newComment.isInvalid = false; // Проходит по длине
  }

  return newComment; // Возвращаем обновленный объект в новый массив
});

console.log("Результат проверки длины:", validatedComments);

// --- ЗАДАНИЕ 11: Сложное условие ---
// Самый лаконичный способ
const emailsViaMap = socialComments.map(comment => comment.email);

console.log("Emails (через map):", emailsViaMap);

const emailsViaReduce = socialComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log("Emails (через reduce):", emailsViaReduce);

// --- ЗАДАНИЕ 12: Преобразование массива почт в строку ---

// Возьмем для примера массив почт (из Задания 11)
const emails = socialComments.map(comment => comment.email);

// 1. Использование метода .toString()
// разделяет элементы запятой по умолчанию.
const stringFromToString = emails.toString();
console.log("1. Результат toString():", stringFromToString);


// 2. Использование метода .join()
// задал свой разделитель запятая + пробел.
const stringFromJoin = emails.join(", ");
console.log("2. Результат join():", stringFromJoin);


// 3. Ручной перебор массива (через цикл или forEach)
let stringFromLoop = "";

emails.forEach((email, index) => {
  stringFromLoop += email;
  
  // Добавляем разделитель только если это НЕ последний элемент
  if (index < emails.length - 1) {
    stringFromLoop += " | "; // Используем вертикальную черту для разнообразия
  }
});

console.log("3. Результат ручного перебора:", stringFromLoop);