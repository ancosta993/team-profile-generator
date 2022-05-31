const Intern = require('../lib/Intern.js');

test('inherit from Employee', ()=> {
   const intern = new Intern('Dave', 2, 'costa@fakemail');

   expect(intern.name).toBe('Dave');
   expect(intern.id).toBe(2);
   expect(intern.email).toBe('costa@fakemail');
});

test('check school property', ()=> {
   const intern = new Intern('Dave', 2, 'costa@fakemail', 'UMD');

   expect(intern.school).toEqual(expect.stringContaining('UMD'));
});