import React, { useEffect, useState } from "react";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Label,
  Menu,
  Table,
  Button,
} from "semantic-ui-react";
import CarService from "../services/carService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import { toast } from 'react-toastify';
import Spline from '@splinetool/react-spline';



export default function ProductList() {

  const dispatch = useDispatch()

  const [cars, setCars] = useState([]);

  useEffect(() => {
      let carService =new CarService();
      carService.getCars().then(result => setCars(result.data.response))
  }, [])
  
  const handleAddToCart = (car) => {
    dispatch(addToCart(car));
    toast.success(`${car.modelName} sepete eklendi.`)
  }

  return (
    <div>
      <Spline scene="https://prod.spline.design/rAXDPr0-JrqSaMAW/scene.splinecode" />
      {/* <Spline scene="https://prod.spline.design/xe7Nf6HEYx5HFO5L/scene.splinecode" /> */}
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Marka</TableHeaderCell>
            <TableHeaderCell>Model</TableHeaderCell>
            <TableHeaderCell>Renk</TableHeaderCell>
            <TableHeaderCell>Yıl</TableHeaderCell>
            <TableHeaderCell>Kilometre</TableHeaderCell>
            <TableHeaderCell>Plaka</TableHeaderCell>
            <TableHeaderCell>Fiyat</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {cars.map((car) => (
            <TableRow key={car.id}>
              <TableCell>{car.brandName}</TableCell>
              <TableCell><Link to={`/cars/${car.id}`}>{car.modelName}</Link></TableCell>
              <TableCell>{car.colorName}</TableCell>
              <TableCell>{car.year}</TableCell>
              <TableCell>{car.kilometer}</TableCell>
              <TableCell>{car.licensePlate}</TableCell>
              <TableCell>{car.rentalPrice}</TableCell>
              <TableCell><Button onClick={() => handleAddToCart(car)}>Sepete Ekle</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableHeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <MenuItem as="a" icon>
                  <Icon name="chevron left" />
                </MenuItem>
                <MenuItem as="a">1</MenuItem>
                <MenuItem as="a">2</MenuItem>
                <MenuItem as="a">3</MenuItem>
                <MenuItem as="a">4</MenuItem>
                <MenuItem as="a" icon>
                  <Icon name="chevron right" />
                </MenuItem>
              </Menu>
            </TableHeaderCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
