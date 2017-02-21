var arr = [-1.12, -2.43, 3.1, 4.2, 0, 6.4, -7.5, 8.6, 9.1, -4];
//1.Извежда съществуващите числа
console.log(arr);

//2.Всички елементи със стойност по-малки от -0.231 се заменят със 
// сумата от квадрата на индекса им + числото 41.25, а всички останали
// елементи се заменят с произведението между самия елемент и
// неговият пореден номер.
var bound = -0.231;
arrModify = new Array(arr.length);
for (var index = 0; index < arr.length; index++) {
    if (arr[index] < bound) {
        arrModify[index] = index * index + 41.25;
    } else {
        arrModify[index] = Math.round(arr[index] * index * 100) / 100;
    }
}

// 3. Да се изведат елементите от началния и новообразувания масив.

console.log(arr);
console.log(arrModify);
// 4. Да се изведe средната стойност на всички елементи от новата
// редица, които са различни от 0.
var sum = 0;
var count = 0;
for (var index = 0; index < arrModify.length; index++) {
    if (arrModify[index] !== 0) {
        sum += arrModify[index]
        count++;
    }
}
var average = Math.round((sum / count) * 100) / 100;
console.log(average);