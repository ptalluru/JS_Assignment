var  amithab = {
    name:"Prasanth",
              lname:"Talluru",
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
            abhishek.name="Ajay";
              abhishek.age=24;
              abhishek.skills=["HTML","JS"];
              abhishek.address={
                  city:"Hyderabad",
                  pincode:500082,
                    };
              abhishek.dateOfBirth= Date='04/07/1995';
              abhishek.married=true;
              abhishek.profession = "Senior Analyst";
            
console.log(abhishek);
console.log(abhishek.lname);