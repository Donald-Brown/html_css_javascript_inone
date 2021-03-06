function Card(name, email, address, phone, notes){
  this.name = name;
  this.email = email;
  this.address = address;
  this.phone = phone;
  this.printCard = printCard;
  this.notes = notes;
}

function printCard(){
  let nameLine = `<strong>Name: </strong>${this.name}<br/>`;
  let emailLine = `<strong>Email: </strong>${this.email}<br/>`;
  let addressLine = `<strong>Address: </strong>${this.address}<br/>`;
  let phoneLine = `<strong>Phone: </strong>${this.phone}<br/>`;
  let notesLine = `<strong>Notes: </strong>${this.notes}<hr/>`
  document.write(nameLine, emailLine, addressLine, phoneLine, notesLine);
}

let sue = new Card("Sue Sommers",
                    "sue@yahoo.com",
                    "123 line St., Home Town AU 23455",
                    "345-345-5422",
                    "Owner Flowers Plus");
        
let bob = new Card("Bob Green",
                    "bob@gmail.com",
                    "4567 Reed St., Owentown GA 54666",
                    "445-355-5235",
                    "Works at Cars are us");

let mary = new Card("Mary Jane",
                    "Mary@gmail.com",
                    "895 Main St, AnyWhere IN 56433",
                    "543-098-1233", 
                    "Sells Homes");

sue.printCard();
bob.printCard();
mary.printCard();