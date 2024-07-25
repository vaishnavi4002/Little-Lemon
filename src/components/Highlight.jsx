
import dish1 from "../assets/images/dish1.jpg"
import dish2 from "../assets/images/dish2.jpg"
import dish3 from "../assets/images/dish3.jpeg"
import { MdDeliveryDining } from "react-icons/md";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

  const dishes=[

    {
         img:dish1,
         title:"Greek Salad",
         desc:" The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
         price:"$ 12.99"
    },
    
    {
        img:dish2,
        title:"Bruschetta",
        desc:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.",
        price:"$ 5.99"
   },
   {
    img:dish3,
    title:"Lemon Dessert",
    desc:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price:"$ 5.00"
},
]


const Highlight = () => {
  return (
    <div className="m-10 ">
      <h1 className="text-6xl">This Weeks Specials !!</h1>
        <div className="flex flex-wrap justify-evenly items-center p-8 mt-6">
          
        {dishes.map((dish) => (
    <Card 
        
    key={dish.id} className="mt-6 w-96 p-5 flex">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={dish.img}
          alt="card-image"
          className="w-full h-full"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h3" color="blue-gray" className="mb-4 text-center">
          {dish.title}
        </Typography>
        <Typography className="text-md">
          {dish.desc}
          <br />
          <span className="text-[rgb(238,153,114)] text-xl font-semibold">{dish.price}</span>
           <div className="flex justify-between text-2xl font-bold mt-3">
           <p className="">Order a delivery </p>
           <span className=""><MdDeliveryDining /> </span>
           </div>
          
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>See More</Button>
      </CardFooter>
    </Card>
  ))} 




        </div>
      
    </div>
  )
}

export default Highlight
