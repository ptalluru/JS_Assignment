var  amithab = {
    name:"Prasanth",
              lname:"Bachan",
              age:23,
              skills:["JS","HTML"],
              address:{
                  city:"Nellore",
                  pincode:524407,
                    },
              dateOfBirth:Date='04/07/1995',
              married:false,
              profession : "Analyst"
                };
var abhishek = Object.create(amithab)
            abhishek.name="Abhishek";
              abhishek.age=24;
              abhishek.skills=["HTML","JS"];
             
              abhishek.dateOfBirth= Date='04/07/1995';
              abhishek.married=true;
              abhishek.profession = "Senior Analyst";
var aradhya = Object.create(abhishek)
            aradhya.name="aradhya";
              aradhya.age=24;
              aradhya.skills=["HTML","JS"];
              
              aradhya.dateOfBirth= Date='04/07/1995';
              aradhya.married=true;
              aradhya.profession = "Senior Analyst";

console.log(abhishek.lname);
console.log(aradhya.lname);
console.log(aradhya.address);

            