var cars = ["car1","car2","car1","car4"];
var cars2 = ["xx","yy"];
console.log(cars.length);
console.log(cars.concat(cars2));
console.log(cars.indexOf("car1"));
console.log(cars.lastIndexOf("car1"));
console.log(cars.concat(cars2).join(","));
var totalCars = cars.concat(cars2).join(",").split(",");
console.log(totalCars);
console.log(totalCars.reverse());
console.log(totalCars.sort());
console.log(totalCars.sort().indexOf('car1'));
removedCars = totalCars.slice(0,2);
console.log(removedCars);
console.log(totalCars);
totalCars.splice(2,2,"eee","www")
console.log(totalCars);
totalCars.push("hello","world");
console.log(totalCars);
console.log(totalCars.pop("world"));
console.log(totalCars);
totalCars.shift()
console.log(totalCars);
totalCars.unshift("qweasd");
console.log(totalCars);

numbers = [23, 45, 0, 2];
forEach (a in numbers)
a[i] = a[i]+2;
