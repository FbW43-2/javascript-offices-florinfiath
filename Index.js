
class Building {
  offices = [];
   constructor(buildingName){
      this.buildingName = buildingName;
   }
}
class Company{
    offices = []
    constructor(companyName,companyDomain,foundYear){
      this.companyName = companyName;
      this.companyDomain = companyDomain;
      this.foundYear = foundYear;
    
    }
    assignOffice(office){
        if(!office.assignCompany(this)){
          console.log(`The office ${office.officeName} already belongs to company ${this.companyName},and therefore can not be assigned to other companies`);
          return;
        }
        this.offices.push(office);
        office.company= this.companyName;
       
}
removeOffice(office){
  var index = this.offices.indexOf(office);
  if (index < 0) return;
}

}

class Office {

    constructor(officeName) {
    this.officeName = officeName;
    this.company = null;
    this.boss = null;
    this.programmer = null;
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

  addProgrammer(programmer){
    if (this.programmer != null){
        return false;
    }
    this.programmer = programmer;
    return true;
  }
  moveProgrammer(office,newOffice){
     
  }
}
class Person {
  constructor(personName, personAge, personOccupation) {
    this.personName = personName;
    this.personAge = personAge;
    this.personOccupation = personOccupation;
    this.company = null;
    this.office = null;
    this.building = null;
  }
  assignCompany(company) {
    if (this.company != null) {
      return false;
    }
    this.company = company;
    return true;
  }
  assignOffice(office) {
    if (this.office != null) {
      return false;
    }
    this.office = office;
    return true;
  }
  assignBuilding(building) {
    if (this.building != null) {
      return false;
    }
    this.building = building;
    return true;
  }
  

  introducePerson() {
    console.log(
      `Hi,I'm ${this.personName}.I'm ${this.personAge} years old and i'm working for ${this.company.companyName} as a ${this.personOccupation}.My office name is "${this.office.officeName}",and it is located in ${this.building.buildingName} building.`
    );
  }
}
class Programmer extends Person {
  constructor(personName, personAge, personOccupation, programmerExperience) {
    super(personName, personAge, personOccupation);
    this.programmerExperience = programmerExperience;
  }
}
class Boss extends Person {
  constructor(personName, personAge, personOccupation, personFunction) {
    super(personName, personAge, personOccupation);
    this.personFunction = personFunction;
  }
}




//......................................................


let boss1 = new Boss("Marius",35,"Managing Director");
let boss2 = new Boss("Pekka",57,"CEO");
let boss3 = new Boss("Alexander",49,"CEO")


let programmer1 = new Programmer ("Jack",24,"junior software engineer");
let programmer2 = new Programmer("Mark", 30, "experienced software engineer ");
let programmer3 = new Programmer("Mariana",35,"junior software engineer")

let company1 = new Company ("DCI","training",2017);
let company2 = new Company ("Nokia","Telecommunication",1865);
let company3 = new Company ("SAP","Software",1972);

let office1 = new Office ("Linus Torvalds");
let office2 = new Office("Doug Lea");
let office3 = new Office ("Helsinki");

let building1 = new Building("SkyTower1");
let building2 = new Building("SkyTower2");

programmer2.assignCompany(company2);
programmer2.assignOffice(office3);
// programmer2.assignBuilding(building1);
// programmer2.introducePerson();

// programmer1.assignCompany(company1);
// programmer1.assignOffice(office1);
// programmer1.assignBuilding(building2);
// programmer1.introducePerson();

// programmer3.assignCompany(company3);
// programmer3.assignOffice(office2);
// programmer3.assignBuilding(building1);
// programmer3.introducePerson();

// company1.assignOffice(office1);
company2.assignOffice(office3);
// company3.assignOffice(office2);


// office1.assignBoss(boss1.personName);
// office2.assignBoss(boss3.personName);
// office3.assignBoss(boss2.personName);

console.log(company2);



