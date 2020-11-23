people = [
  { fname: "David", lname: "Rayy", age: 34 },
  { fname: "Suzanne", lname: "Collins", age: 38 },
  { fname: "Walter", lname: "Isaacson", age: 24 },
  { fname: "John", lname: "Doe", age: 51 },
  { fname: "Jane", lname: "Donnson", age: 20 },
];

// 1. Calculate the sum of the ages - people array
let sum = 0;
for (let i = 0; i < people.length; i++) {
  sum = sum + people[i].age;
}
console.log(sum);
// 2. Find the people that are older than 36
for (let i = 0; i < people.length; i++) {
  if (people[i].age > 36) {
    console.log(`${people[i].fname} is older than 36`);
  }
}
// 3. Find the people that are smaller than 24
for (let i = 0; i < people.length; i++) {
  if (people[i].age < 24) {
    console.log(`${people[i].fname} is smaller than 24`);
  }
}
// 4. Find the person with the longest name
let length = 0;
let name = "";
for (let i = 0; i < people.length; i++) {
  if (people[i].fname.length > length) {
    length = people[i].fname.length;
    name = people[i].fname;
  }
}
console.log(name);

numbers = [1, 4, 24, 67, 1029, 340, 5, 200, 36];

// 5. Multiply every element by 3
let byThree = numbers.map((number) => {
  return number * 3;
});
console.log(byThree);
// 6. Sort the numbers (ascending and descending)
numbers.sort((a, b) => {
  return a - b;
});
console.log(numbers);
numbers.sort((a, b) => {
  return b - a;
});
console.log(numbers);
// 7. Find the sum of the numbers
let accumulator = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(accumulator);
// 8. Find max and min in the array
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
// 9. Find second largest element in the array
numbers.sort((a, b) => {
  return b - a;
});
console.log(numbers[1]);
// 10. Find the total numbers of even and odd elements in the array
even = [];
odd = [];
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    even.push(numbers[i]);
  } else {
    odd.push(numbers[i]);
  }
}
// 11. Count number of digits in a number
let n = 1678;
let numberOfdigits = 0;
if (n >= 1) {
  numberOfdigits++;
}
while (n / 10 >= 1) {
  n = n / 10;
  numberOfdigits++;
}
console.log(`The number of the digits in the number n is ${numberOfdigits}`);
// 12. Print the following pattern
/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/
let arr = [];
for (i = 1; i < 6; i++) {
  arr = arr + i;
  console.log(arr);
}
// 13. Write a program to find power of a number.
let x = 5;
let y = 7;
console.log(Math.pow(x, y));
// 14. Given an array loop throught it and display numbers which are divisible by 5 and if you find number greater than 150 stop the loop iteration
array = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200];
for (i = 0; i < array.length; i++) {
  if (array[i] <= 150) {
    if (array[i] % 5 == 0) {
      console.log(array[i]);
    }
  }
}
