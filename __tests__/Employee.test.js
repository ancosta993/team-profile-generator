const Employee = require('../lib/Employee.js');

test('check employee properties', () =>{
   const employee = new Employee('Dave', 2, 'costa@fakemail.com');

   expect(employee.name).toBe('Dave');
   expect(employee.id).toBe(2);
   expect(employee.email).toBe('costa@fakemail.com');

});

test('getName returns the name', ()=>{
   const employee = new Employee('Dave', 2, 'costa@fakemail.com');

   expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test('getId returns the Id', ()=>{
   const employee = new Employee('Dave', 2, 'costa@fakemail.com');

   expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test('getEmail returns the Email', ()=>{
   const employee = new Employee('Dave', 2, 'costa@fakemail.com');

   expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test('getRole returns the Role', ()=>{
   const employee = new Employee('Dave', 2, 'costa@fakemail.com');

   expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});