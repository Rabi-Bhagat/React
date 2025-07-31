import React from "react";
import MobileList from  './MobileList'


const book1 = {
    Image : "https://th.bing.com/th/id/OIP.z9DgCgl3z9jhbiJDMuwsOAHaEK?w=329&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    title : "Iphone 13",
    price : '3200'
}
export default function Mobile(){


    return(
        <div>
           <MobileList Image = {book1.Image} title ={book1.title} price = {book1.price}/> 

        </div>
    )
}



//or we have to export the function where we declare the function