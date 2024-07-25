
// import {
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Typography,
//     Button,
//   } from "@material-tailwind/react";

   


const Highlight = () => {
  return (
    <div className="m-10">
      <h1 className="text-6xl">This Weeks Specials !!</h1>

      {/* {dishes.map((dish) => (
    <Card 
        
    key={dish.id} className="mt-6 w-96 p-5 ">
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
          <span className="text-cyan-600 text-sm">{dish.tech}</span>
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>See More</Button>
      </CardFooter>
    </Card>
  ))} */}
    </div>
  )
}

export default Highlight
