const Engineer = require('../lib/Engineer.js');

test("inherit properties from employee", ()=>{
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

test('check for getGitHub() in engineer', ()=>{
   const engineer = new Engineer('Dave',2,'email@email.com','ancosta993');

   expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.gitHub));
})