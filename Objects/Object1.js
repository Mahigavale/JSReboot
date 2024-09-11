

const employee={
    name:"Mahesh",
    age:"23",
    profession:"Unemployed",
    state:"maharashtra",
    getage:function()
    {
        return this.name+ " "+this.age;
    }
}

console.log(employee);

console.log(employee.getage());
console.log(employee.name);

console.log(typeof(employee.name));



