//一个类
class Employee{
    constructor(id, name, job){
        this.id = id;
        this.name=name;
        this.job= job;
    }
    getAge(){
        return (new Date()).getYear() - this.dob.getYear();
    }
}
//一个函数
function getEmployee(id, name, job){
    return new Employee(id, name, job);
}

//导出一个类，一个函数
export {Employee, getEmployee};