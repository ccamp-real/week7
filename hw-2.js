class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getName(){
        return(this.name);
    }
};

class Employee extends Person {
    constructor(name,age,employeeID){
        super(name, age)
        this.employeeID = employeeID;
    }
    static getCompanyName(){
        console.log("Web Development Solutions Incorporated")
    }
    getEmployeeID(){
        return(this.employeeID);
    }    
};

class Manager extends Person{
    constructor(name, age, employeeID, employees){
        super(name, age)
        this.employeeID = employeeID;
        this.employees = employees;
    }

    newEmployee(employeeID, employeeName){
        this.employees.push({employeeID, employeeName});
    }

    getEmployees(){
        return (this.employees);
    }
};

class Clerk extends Employee{
    constructor(name, age, employeeID, supervisorID){
        super(name, age, employeeID)
        this.supervisorID = supervisorID;
    }

    getSupervisor(){
        return (this.supervisorID);
    }
};

let currentID = 1;

let boss = new Manager("Karen", 48, currentID++, []);
let clerk1 = new Clerk("China", 19, currentID++, boss.getEmployeeID);
let clerk2 = new Clerk("Rick", 60, currentID++, boss.getEmployeeID);

boss.newEmployee(clerk1.getEmployeeID(),clerk1.getName());
boss.newEmployee(clerk2.getEmployeeID(),clerk2.getName());

console.log(clerk1.getSupervisor());
console.log(clerk2.getSupervisor());

console.log(boss.getEmployees());