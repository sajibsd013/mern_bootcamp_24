# JavaScript Class Assignment: Car Object

## Objective
The goal of this assignment is to practice working with JavaScript classes by creating a simple model of a car. You'll define properties, create methods, and simulate car behavior.

## Instructions

### Define the Car Class

Create a `Car` class with the following properties:

- `make`: The manufacturer of the car (e.g., Toyota, Ford).
- `model`: The specific model of the car (e.g., Camry, Mustang).
- `year`: The year the car was manufactured.
- `speed`: A number representing the current speed of the car (default value should be 0).
- `fuel`: A number representing the current fuel level of the car (default value should be 100).

### Methods in the Car Class

- `accelerate(increaseBy)`: This method should increase the car's speed by the value of `increaseBy`, and reduce the fuel level by 5 units for every 10 speed gained. If the car is low on fuel, it should not accelerate.

- `brake(decreaseBy)`: This method should decrease the car's speed by the value of `decreaseBy`, but the speed should not go below 0.

- `refuel(amount)`: This method should increase the fuel level by the value of `amount`, but should not allow fuel to go above 100.

- `status()`: This method should print out a summary of the car’s make, model, year, current speed, and fuel level.

### Additional Features (Bonus)

1. **drive(duration)**: Add a method called `drive(duration)` which:
   - Takes the number of hours driven as input.
   - Calculates how much fuel is used (10 fuel units per hour).
   - Adjusts the speed based on a fixed rate (reduces speed by 10 units per hour due to friction).

2. **Tracking Distance**: Add a feature that tracks the total distance traveled (`distanceTraveled`).
