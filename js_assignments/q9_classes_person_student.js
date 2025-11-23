class PersonClass{constructor(name){this.name=name;}printName(){console.log("Class Name:",this.name);}}
class StudentClass extends PersonClass{constructor(n,b){super(n);this.branch=b;}printBranch(){console.log("Class Branch:",this.branch);}}
const sc=new StudentClass("Aditya","Electrical"); sc.printName(); sc.printBranch();
