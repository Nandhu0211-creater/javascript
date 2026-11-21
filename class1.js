class employees
{
    constructor(Eid, Ename, EPN)
    {
        this.Eid=Eid
        this.Ename=Ename
        this.EPN=EPN
    }
   
}
function empPerformance(month1, month2, month3){
    this.month1=month1;
    this.month2=month2;
    this.month3=month3;

}
 display()
    {
        console.log("Emplyoee ID:",this.Eid +" "+ "Employee Name:",this.Ename+" "+"Employee Phone Number:",this.EPN+" "+"Month1 Performance:",this.month1+" "+"Months2 Performance:",this.month2+" "+"Month3 Perfornmave:",this.month3)
    }
let empDetails=new(employees,empPerformance)
let emp=new empDetails(1001, "Arun", 9807890800, "Good", "Average", "Good")
emp.display()
let emp1=new empDetails("1002", "Sivan", 8108104343, "Average", "Average", "Good")
emp1.display()
let emp2=new empDetails("1003", "Murugan",6123457890,"Average", "Average", "Good")
emp2.display()
let emp3=new empDetails("1004", "Esakki", 9823456780,"Average", "Good", "Good")
emp3.display()
let emp4=new empDetails("1005", "Nandhu", 6547890120, "Average", "Average", "Good")
emp4.display()
