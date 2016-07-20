class Employee{
    constructor(id, name, job){
        this.id = id;
        this.name=name;
        this.job= job;
    }
    getMessage(){
        return this.id + "==" + this.name + "==" + this.job;
    }
}
//default只能用一个地方。
export default Employee;