const Intern = require('../lib/Intern.js')

const { test, expect } = require('@jest/globals')

test('creates an Intern object with school', () => {
    const testSchool = 'test'
    const testRole = 'Intern'
    
    const intern = new Intern('Dave', '3', 'fake@email.com', testSchool, 'Intern');
    
    expect(intern.school).toBe(testSchool);
    expect(intern.role).toBe(testRole);
});

test('getSchool returns school', () => {
    const testSchool = 'test'

    const intern = new Intern('Dave', '3', 'fakestuff@fake.com', testSchool, 'Intern');

    expect(intern.getSchool()).toBe('test');
});

test('getRole returns Intern', () => {
    const testRole = 'Intern'

    const intern = new Intern('Dave', '3', 'fake@fake.com', 'school', 'testRole');

    expect(intern.getRole()).toBe('testRole');
});