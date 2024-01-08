import React from "react";
import Categories from "./Categories";
import CarList from "../pages/CarList";
import { GridRow, GridColumn, Grid } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import CarDetail from "../pages/CarDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import CarAdd from "../pages/CarAdd";

export default function Dashboard() {
  return (
    <>
    <ToastContainer position="bottom-right"/>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
            <Routes>
              <Route path="/" Component={CarList}/>
              <Route path="/cars" Component={CarList}/>
              <Route path="/cars/:id" Component={CarDetail}/>
              <Route path="/cart" Component={CartDetail}/>
              <Route path="/car/add" Component={CarAdd}/>
            </Routes>
          </GridColumn>
        </GridRow>
      </Grid>
    </>
  );
}
