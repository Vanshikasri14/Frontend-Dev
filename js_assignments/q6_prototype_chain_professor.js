function Person(n){this.personName=n;}
Person.prototype.personInfo=function(){console.log("Person:",this.personName);};
function Faculty(n,d){Person.call(this,n);this.department=d;}
Faculty.prototype=Object.create(Person.prototype);
Faculty.prototype.constructor=Faculty;
Faculty.prototype.facultyInfo=function(){console.log("Faculty Dept:",this.department);};
function Professor(n,d,t){Faculty.call(this,n,d);this.title=t;}
Professor.prototype=Object.create(Faculty.prototype);
Professor.prototype.constructor=Professor;
Professor.prototype.professorInfo=function(){console.log("Professor Title:",this.title);};
const p=new Professor("Dr. Meena","Maths","Associate Professor");
p.professorInfo(); p.facultyInfo(); p.personInfo();
