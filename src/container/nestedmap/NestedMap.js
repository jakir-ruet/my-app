import React from "react";

const PhoneBooks = [
   {
      Name: 'Jakir from nested mapp',
      Address: "Rajshahi",
      Contacts: [
         {Phone: '01788916805'},
         {Email: 'jakir.ruet.bd@gmail.com'}
      ],
   }
]


function NestedMap() {
   return (
      <div>
         {
            PhoneBooks.map((PhoneBook, index) => 
               <article>
                  <p>{PhoneBook.Name}</p>
                  <p>{PhoneBook.Address}</p>
                  {
                     PhoneBook.Contacts.map((Contact, index) => 
                        <div>
                           <p>{Contact.Phone}</p>
                           <p>{Contact.Email}</p>
                        </div>
                     )
                  }
               </article>
            )
         }




         {/* {PhoneBooks.map((PhoneBook, index) => (
            <div key={index}>
               <p>{PhoneBook.Name}</p>
               <p>{PhoneBook.Address}</p>
               {PhoneBook.Contacts.map((Contact, index) => (
                  <div key={index}>
                     <p>{Contact.Phone}</p>
                     <p>{Contact.Email}</p>
                  </div>
               ))}
            </div>
         ))} */}
      </div>
   )
}

export default NestedMap;