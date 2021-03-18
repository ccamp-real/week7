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

class Manager extends Person { /* Your manager class must inherit from Employee, not Person. Your constructors will not work because
    its expecting employeeID to be super (inherited from parent Class), but when you have this set to inherit from Person, you have no employeeID. */
constructor(name, age, employeeID, employees){
        super(name, age, employeeID) // Make sure you add employeeID as a paramater of your super, as it is inherited from Person.
        //this.employeeID = employeeID; /* You don't need to declare this here, as you have already declared this.employeeID in your Person
                                       // class, therefore it is accessible to Manager already */
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
let clerk1 = new Clerk("China", 19, currentID++, boss.getEmployeeID()); // Need to have () on boss.getEmployeeID to execute function ---> boss.getEmployeeID();
let clerk2 = new Clerk("Rick", 60, currentID++, boss.getEmployeeID()); // Need to have () on boss.getEmployeeID to execute function ---> boss.getEmployeeID();

boss.newEmployee(clerk1.getEmployeeID(),clerk1.getName());
boss.newEmployee(clerk2.getEmployeeID(),clerk2.getName());

console.log(clerk1.getSupervisor());
console.log(clerk2.getSupervisor());

console.log(boss.getEmployees());

// Overall, your logic is pretty good. Having that inherit from Person error kind of broke everything after that.