const Manager = require('../lib/Manager.js');

test("inherit properties from Employee", ()=>{
   const manager = new Manager('Dave', 2, 'costa@fakemail');

   expect(manager.name).toBe('Dave');
   expect(manager.id).toBe(2);
   expect(manager.email).toBe('costa@fakemail');
});

test("set officeNumber property", ()=>{
   const manager = new Manager('Dave', 2, 'costa@fakemail', 118);


   expect(manager.officeNumber).toBe(118);
});

