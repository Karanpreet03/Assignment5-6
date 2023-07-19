// Created By: Karanpreet Sachdeva
// ID: C0884994
// Program to create a racing game
class Car
{
    // Constructor of the Car class
    constructor(brand,model,year,color,price,gas)
    {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;

    }
// Honk Method of the Car class
    honk()
    {
        console.log("Tuut Tuut");
        console.log("Brand: ", this.brand,"\n"
        ,"Model: ",this.model,"\n"
        ,"Year: ",this.year,"\n"
        ,"Color: ",this.color,"\n"
        ,"Price: $",this.price,"\n"
        ,"Gas: ",this.gas,"\n")
    }
    loseGas() {
        const currentYear = new Date().getFullYear();
        let gasLoss = 5;
        // If the car is older than this year it loses extra gas
        if (this.year < currentYear) {
          gasLoss += currentYear - this.year;
        }
    
        this.gas = Math.max(this.gas - gasLoss, 0);
      }
}

// Create car objects
const car1 = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
const car2 = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
const car3 = new Car("BMW", "X5", 2022, "Green", 60000, 65);
const car4 = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
const car5 = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
const car6 = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);

// Array of cars
const cars = [car1, car2, car3, car4, car5, car6];

// Race simulation
const raceTurns = 7;
for (let turn = 1; turn <= raceTurns; turn++) {
    console.log("-----------------------");
  console.log(`--- Turn ${turn} ---`);
  console.log("--------------------------");

  cars.forEach((car) => {
    console.log("----------------");
    console.log(`Car: ${car.brand} ${car.model}`);
    car.loseGas();
    console.log(`Remaining Gas: ${car.gas} litres`);
    console.log("---------------");
  });
  // Determine the winning car
//Accumulator variable to determine winning car
let winningCar = cars[0];
for (let i = 1; i < cars.length; i++) {
  if (cars[i].gas > winningCar.gas) {
    winningCar = cars[i];
  }
}
console.log("-----------------------------------------------------------");
console.log(`The winning car is: ${winningCar.brand} ${winningCar.model}`);
console.log("-----------------------------------------------------------");
}