import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Image,
  MenuItem,
} from "semantic-ui-react";

export default function SignedIn({signOut}) {

  return (
    <div>
      <MenuItem>
        <Image
          avatar
          spaced="right"
          src="https://st.depositphotos.com/1252248/53452/v/1600/depositphotos_534523618-stock-illustration-cat-portrait-drawing-sad-cat.jpg"
        />
        <Dropdown pointing="top left" text="Deniz">
          <DropdownMenu>
            <DropdownItem text="Bilgilerim" icon="info" />
            <DropdownItem onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </DropdownMenu>
        </Dropdown>
      </MenuItem>
    </div>
  );
}
