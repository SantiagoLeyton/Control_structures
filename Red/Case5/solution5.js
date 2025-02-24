let battery = 20;

battery = 100 ? console.log('The battery is full') :
battery >= 80 ? console.log("The battery is almost full, you don't need to charge your device 🔋") :
battery >= 50 ? console.log("The battery have enought charge 🔋") :
battery >= 20 ? console.log("The battery is low, charge you device soon 🪫") :
console.log("Critical battery, connect the charger immediately 🪫");