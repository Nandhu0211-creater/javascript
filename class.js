class Students
{
    setdetails(id, sname, grade)

    {
        this.id=id
        this.sname=sname
        this.grade=grade
    }
    display()
{
    console.log(this.id, this.sname, this.grade)
}
}

let Stu=new Students()
Stu.setdetails(1, "Arun", "A")
Stu.setdetails(1, "Raju", "b")
Stu.display()