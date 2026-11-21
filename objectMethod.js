let Student= //object
{
    //Proprties and values
    stuName:"Nandhakumar",
    stuId:102026,
    Tamil:100,
    English:95,
    Maths:100,
    Science:96,
    SocialScience:85,

    //creating the method
    Add: function() // this is calling as function, becaz we craete this outside of object

    {
        return(this.Tamil+this.English+this.Maths+this.Science+this.SocialScience)
    
    }, // we can create multiple method (function) by using ,

    Average: function()
    {
        return(this.Add()/5) // we can invoke or call the object by using this keyword
    } 



}

function Minus() // this is calling as function, becaz we craete this outside of object
{
    return(Student.Tamil - Student.English)
}
console.log(Student.Add())
console.log(Student.Average())
console.log(Minus())