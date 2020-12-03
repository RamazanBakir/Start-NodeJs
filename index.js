const rectangle = require('./rectangle');
var rect = require('./rectangle');

function solveRect(l,b)
{
    console.log("Solving for rectangle with l= "+l+" and b= "+b);
    rect(l,b, (err,rectangle) =>{
        //In this part is executed by 2 sec. delay Because of the we are using to (set time out funct.) in rectangle.js file
        if(err)
        {
            console.log("Error: ",err.message);
        }
        else
        {
            console.log("The area of the rectangle of dimensions l= "+l+
            " and b= "+b+" is "+rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l= "+l+
            " and b= "+b+" is "+rectangle.perimeter());
        }

    });
    console.log("This statement is after the call to rect()");
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);