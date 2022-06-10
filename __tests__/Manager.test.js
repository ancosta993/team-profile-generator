const Manager = require('../lib/Manager.js');

test("inherit properties from manager", ()=>{
   const manager = new Manager('Dave', 2, 'costa@fakemail');

   expect(manager.name).toBe('Dave');
   expect(manager.id).toBe(2);
   expect(manager.email).toBe('costa@fakemail');
});

test('getName returns the name', ()=>{
   const manager = new Manager('Dave', 2, 'costa@fakemail.com');

   expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test('getId returns the Id', ()=>{
   const manager = new Manager('Dave', 2, 'costa@fakemail.com');

   expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
});

test('getEmail returns the Email', ()=>{
   const manager = new Manager('Dave', 2, 'costa@fakemail.com');

   expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test('getRole returns the Role', ()=>{
   const manager = new Manager('Dave', 2, 'costa@fakemail.com');

   expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});

test("set officeNumber property", ()=>{
   const manager = new Manager('Dave', 2, 'costa@fakemail', 118);


   expect(manager.Office).toBe(118);
});

