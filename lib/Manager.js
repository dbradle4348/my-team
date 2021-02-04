const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super(name);

        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getRole() {
    return this.role;
    };
    
    getOfficeNumber() {
        return this.officeNumber;
    };


};