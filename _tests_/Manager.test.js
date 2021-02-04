const Manager = require('../lib/Manager.js')
const { test, expect } = require('@jest/globals')

test('creates a Manager object', () => {
    const testOffice = '20'
    const testRole = 'Manager'
    
    const manager = new Manager('Dave', '3', 'fake@email.com', 'Manager')
    
    expect.manager(officeNumber).toBe(testOffice);
    expect.manager(role).toBe(testRole)
    });