// 1. Interface Vehicule
interface Vehicule {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// 2. Classe Car qui implémente Vehicule
class Car implements Vehicule {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// 3. Création d'une instance de Car
const maVoiture = new Car("Toyota", "Corolla", 2022);

// 4. Appel de la méthode start
maVoiture.start();
