const Manager = require('../lib/Manager.js')
const Employee = require('../lib/Employee.js')
const { test, expect } = require('@jest/globals')

test('creates a Manager object with office number', () => {
    const testOffice = '20'
    const testRole = 'Manager'
    
    const manager = new Manager('Dave', '3', 'fake@email.com', testOffice, 'Manager')
    
    expect(manager.officeNumber).toBe(testOffice);
    expect(manager.role).toBe(testRole);
    });