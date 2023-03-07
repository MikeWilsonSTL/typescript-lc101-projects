import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [] ;
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number{
        //Returns the sum of all items using each item's massKg property
        let totalMass: number = 0;
        for(let x in items){
            totalMass += items[x].massKg;
        }
        return totalMass;
    }
    
    currentMassKg(): number{
        //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        let astronautMass = this.sumMass(this.astronauts);
        let cargoMass = this.sumMass(this.cargoItems);
        return astronautMass + cargoMass;
    }

    canAdd(item: Payload): boolean{
        //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        }
        return false;
    }

    addCargo(cargo: Cargo): boolean{
        //Uses this.canAdd() to see if another item can be added.
        //If true, adds cargo to this.cargoItems and returns true.
        //If false, returns false.
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut: Astronaut): boolean{
        //Uses this.canAdd() to see if another astronaut can be added.
        //If true, adds astronaut to this.astronauts and returns true.
        //If false, returns false
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
 }