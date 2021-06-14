import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import Card from "./Card";
const App = () => {
  return (
    <>
      <MDBNavbar expand="lg" light bgColor="info" className="navbard">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">WeatherApp</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      <Card />
    </>
  );
};
export default App;
