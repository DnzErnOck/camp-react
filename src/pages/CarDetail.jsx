import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
  Button,
} from "semantic-ui-react";
import CarService from "../services/carService";
export default function CarDetail() {
  let { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
      let carService =new CarService();
      carService.getCarById(id).then(result => setCar(result.data.response))
  }, [id])
  
  return (
    <div>
      <Card fluid>
        <CardContent>
          <Image
            floated="right"
            size="mini"
            src="https://st.depositphotos.com/1252248/53452/v/1600/depositphotos_534523618-stock-illustration-cat-portrait-drawing-sad-cat.jpg"
          />
          <CardHeader>{car.modelName}</CardHeader>
          <CardMeta>{car.licensePlate}</CardMeta>
          <CardDescription>
            Steve wants to add you to the group <strong>best friends</strong>
          </CardDescription>
        </CardContent>
        <CardContent extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
