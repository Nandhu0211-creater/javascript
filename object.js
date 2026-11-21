let person =      // object
{
    //properties
    firstname:"Nandhu",
    lastname:"Raja",
    Age:28,
    weight:52
}

//Accessing object properties
 console.log(person["firstname"]) // this is one type
 console.log("Age:", person.Age) // this is one type

 //Add  new property to the existing object
 //ObjectName["PropertyName"]=Property value (or) ObjectName.PropertyName=Property value
 person.height=5.5
 console.log(person.height)

 //update existing property
 //ObjectName["PropertyName"]=Property New value (or) ObjectName.PropertyName=Property New value
person.weight=60
console.log(person.weight) 

//remove the property---  delete objectName["property name"] // delete objectName.property name
delete person.Age
console.log(person.Age)

//read all property name (not values) --- for in loop
// by using for in loop we can read the properties and their values
for (let x in person)
{
    // console.log(x) //Prints only the Property names
    // console.log(person[x]) //Prints only the Property values
    console.log(x+" "+person[x]) //Prints all Property names with their values


}


