const Intern = require('../lib/Intern.js');

test('inherit from Intern', ()=> {
   const intern = new Intern('Dave', 2, 'costa@fakemail');

   expect(intern.name).toBe('Dave');
   expect(intern.id).toBe(2);
   expect(intern.email).toBe('costa@fakemail');
});

test('check school property', ()=> {
   const intern = new Intern('Dave', 2, 'costa@fakemail', 'UMD');

   expect(intern.school).toBe(('UMD'));
});

test('getName returns the name', ()=>{
   const intern = new Intern('Dave', 2, 'costa@fakemail.com');

   expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
});

test('getId returns the Id', ()=>{
   const intern = new Intern('Dave', 2, 'costa@fakemail.com');

   expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
});

test('getEmail returns the Email', ()=>{
   const intern = new Intern('Dave', 2, 'costa@fakemail.com');

   expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test('getRole returns the Role', ()=>{
   const intern = new Intern('Dave', 2, 'costa@fakemail.com');

   expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});

test('check getSchool() method', ()=> {
   const intern = new Intern('Dave', 2, 'costa@fakemail', 'UMD');

   expect(intern.getSchool()).toEqual(expect.stringContaining('UMD'));
});

