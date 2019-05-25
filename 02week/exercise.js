var cars = ["car1","car2","car1","car4"];
var cars2 = ["xx","yy"];

//Length
console.log(cars.length);

//Concat two arrays
console.log(cars.concat(cars2));

//indexOf and lastIndexOf
console.log(cars.indexOf("car1"));
console.log(cars.lastIndexOf("car1"));

//join
console.log(cars.concat(cars2).join(","));
var totalCars = cars.concat(cars2).join(",").split(",");

//split
console.log(totalCars);

//reverse
console.log(totalCars.reverse());

//sort
console.log(totalCars.sort());
console.log(totalCars.sort().indexOf('car1'));

//slice
removedCars = totalCars.slice(0,2);
console.log(removedCars);
console.log(totalCars);

//splice
totalCars.splice(2,2,"eee","www")
console.log(totalCars);

//push
totalCars.push("hello","world");
console.log(totalCars);

//pop
console.log(totalCars.pop("world"));
console.log(totalCars);

//shift
totalCars.shift()
console.log(totalCars);

//unshift
totalCars.unshift("qweasd");
console.log(totalCars);

//forEach
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
var new_numbers = []
numbers.forEach(
function(entry){
entry = entry +2
new_numbers.push(entry)
}
);
console.log(new_numbers);


