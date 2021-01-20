
class Building {
  Offices = [];
   constructor(buildingName){
      this.buildingName = buildingName;
   }
}

class Office {
  company = null;
  boss = null;
  programmers = null;

  constructor(officeName) {
    this.officeName = officeName;
  }
  assignCompany(company) {
    if (this.company != null) {
      return false;
    }
    this.company = company;
    return true;
  }

  assignBoss(boss) {
    if (this.boss != null) {
      return false;
    }
    this.boss = boss;
    return true;
  }

  addProgrammers(programmers) {}
}
class Company{
    offices = []
    constructor(companyName,companyDomain,foundYear){
      this.companyName = companyName;
      this.companyDomain = companyDomain;
      this.foundYear = foundYear;
    }
}

class Person {
    constructor(personName,personAge){
       this.personName = personName;
       this.personAge = personAge;
    }
}

class Programmer extends Person {
    constructor(personName,personAge,programmerExperience){
    super(personName, personAge);
      this.programmerExperience = programmerExperience;
    }
   
}
class Boss extends Person {
    constructor(personName,personAge,personFunction){
    super(personName,personAge);
    this.personFunction = personFunction;
    }
}



//......................................................


let boss1 = new Boss("John",33,"team leader");
let boss2 = new Boss("Marco",27,"program manager")


let Programmer1 = new Programmer ("Jack",24,"junior software engineer");
let Programmer2 = new Programmer("Mark", 30, "experienced software engineer ");

let Company1 = new Company ("DCI","training",2017);
let Company2 = new Company ("Nokia","Telecommunication",1865);
let Company3 = new Company ("SAP","Software",1972);

let Office1 = new Office ("Linus Torvalds");
let Office2 = new Office("Doug Lea");
let Office3 = new Office ("Helsinki")

let Building1 = new Building ("SkyTower1");
let Building2 = new Building ("SkyTower2");

Office1.assignBoss(boss1.personName);
console.log(Office1.assignBoss);


console.log(`Hi,I'm ${boss1.personName}.I'm ${boss1.personAge} years old and i'm working for ${Company2.companyName} as a ${boss1.personFunction}.My office name is "${Office3.officeName}",and it is located in ${Building1.buildingName} building.`);

console.log(`Hi,I'm ${Programmer1.personName},I'm ${Programmer1.personAge} years old and i'm working for ${Company1.companyName} as a ${Programmer1.programmerExperience}.My office name is "${Office2.officeName}",and it is located in ${Building2.buildingName} building.`);

console.log(`Hi,I'm ${Programmer2.personName},i'm ${Programmer2.personAge} years old and i'm working for ${Company3.companyName} as a ${Programmer2.programmerExperience}.My office name is "${Office1.officeName}",and it is located in ${Building1.buildingName} building.`);
