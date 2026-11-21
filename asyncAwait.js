function getData()
{
    return new Promise((resolve)=>
    {
        resolve("Hello World")
    })
}
async function display() {
    let result= await getData()
    console.log(result)
    
}
display()