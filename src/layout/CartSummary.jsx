import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownDivider, DropdownItem, DropdownMenu, Label } from "semantic-ui-react";

export default function CartSummary() {

  const {cartItems} = useSelector(state => state.cart)
  return (
    <Dropdown item text="Sepetiniz">
      <DropdownMenu>
        {
          cartItems.map((cartItem) => (
            <DropdownItem key={cartItem.car.id}>
                {cartItem.car.modelName}
                <Label>
                  {cartItem.quantity}
                </Label>
            </DropdownItem>
          ))
        }
        
        <DropdownDivider/>
        <DropdownItem as={NavLink} to={"/cart"}>Sepete Git</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
