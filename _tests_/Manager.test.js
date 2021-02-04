const Manager = require('../lib/Manager.js')

const { test, expect } = require('@jest/globals')

test('creates a Manager object with office number and manager role', () => {
    const testOffice = '20'
    const testRole = 'Manager'
    
    const manager = new Manager('Dave', '3', 'fake@email.com', testOffice, 'Manager')
    
    expect(manager.officeNumber).toBe(testOffice);
    expect(manager.role).toBe(testRole);
    });

test('getRole returns Manager', () => {
    const testRole = 'Manager';
    const manager = new Manager('Dave', '3', 'fake@fake.com', '11', testRole)
    
    expect(manager.getRole()).toBe(testRole);
});

test('getOfficeNumber returns Office Number', () => {
    const testOffice = '11';
    const manager = new Manager('Dave', '3', 'fake@fake.com', testOffice, 'Manager');
    expect(manager.getOfficeNumber()).toBe(testOffice);
})