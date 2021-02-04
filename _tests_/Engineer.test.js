const Engineer = require('../lib/Engineer.js')
const Employee = require('../lib/Employee.js')
const { test, expect } = require('@jest/globals')

test('creates an Engineer object with github username and engineer role', () => {
    const testGithub = 'test'
    const testRole = 'Engineer'
    
    const engineer = new Engineer('Dave', '3', 'fake@email.com', testGithub, testRole);
    
    expect(engineer.github).toBe(testGithub);
    expect(engineer.role).toBe(testRole);
});

test('getGithub returns github username', () => {
    const testGithub = 'test'

    const engineer = new Engineer('Dave', '3', 'fake@email.com', testGithub, 'Engineer');

    expect(engineer.getGithub()).toBe(testGithub);
});

test('getRole returns Engineer', () => {
    const testRole = 'Engineer'

    const engineer = new Engineer('Dave', '3', 'fake@fake.com', 'fake', testRole);

    expect(engineer.getRole()).toBe(testRole);
});
    