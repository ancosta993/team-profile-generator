const Engineer = require('../lib/Engineer.js');

test("inherit properties from engineer", ()=>{
   const engineer = new Engineer('Dave', 2, 'email@email.com');
  
   expect(engineer.name).toBe('Dave');
   expect(engineer.id).toBe(2);
   expect(engineer.email).toBe('email@email.com');
});


test("check the gitHub property", () => {
   const engineer = new Engineer('Dave', 2, 'email@email.com',
   'ancosta993');

   expect(engineer.gitHub).toBe(engineer.gitHub);
});

test('getName returns the name', ()=>{
   const engineer = new Engineer('Dave', 2, 'costa@fakemail.com');

   expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
});

test('getId returns the Id', ()=>{
   const engineer = new Engineer('Dave', 2, 'costa@fakemail.com');

   expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
});

test('getEmail returns the Email', ()=>{
   const engineer = new Engineer('Dave', 2, 'costa@fakemail.com');

   expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test('getRole returns the Role', ()=>{
   const engineer = new Engineer('Dave', 2, 'costa@fakemail.com');

   expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});

test('check for getGitHub() in engineer', ()=>{
   const engineer = new Engineer('Dave',2,'email@email.com','ancosta993');

   expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.gitHub));
})