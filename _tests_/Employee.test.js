const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const testId = '100'
  const testEmail = 'fake@email.com'
  const testRole = 'Employee'
  const employee = new Employee('Dave', testId, testEmail, testRole);  

  expect(employee.name).toBe('Dave');
  expect(employee.id).toBe(testId);
  expect(employee.email).toBe(testEmail);
  expect(employee.role).toBe(testRole);
  });

test('getName returns a name', () => {
  const testName = 'Dave'
  const employee = new Employee(testName)
  expect(employee.getName()).toBe(testName);
});

test('getId returns an ID', () => {
  const testId = '100'
  const employee = new Employee('Dave', testId)
  expect(employee.getId()).toBe(testId);
});

test('getEmail returns an Email', () => {
  const testEmail = 'fake@email.com'
  const employee = new Employee('Dave', '3', testEmail)
  expect(employee.getEmail()).toBe(testEmail);
});

test('getRole returns Employee string', () => {
  const employee = new Employee('Dave', '3', 'fake@email.com', 'Employee')
  expect(employee.getRole()).toBe('Employee');
});