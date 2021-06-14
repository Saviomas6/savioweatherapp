import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBInput,
  MDBCardBody,
  MDBCardTitle,
  MDBCardHeader,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import imgs from "./could.png";
const Card = () => {
  const [temps, setTemp] = useState("");
  const [values, setValues] = useState("Mumbai");
  const [Timezone, setTimezone] = useState("");

  const Changing = (e) => {
    setValues(e.target.value);
  };

  useEffect(() => {
    const weatherapi = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${values}&units=metric&appid=c275bda63a73297401e57c67fc84bd27`
      );
      const data = await response.json();
      setTemp(data.main);
      setTimezone(data);
    };
    weatherapi();
  }, [values]);
  return (
    <div className="design">
      <MDBCard
        alignment="center"
        className="mx-auto shadow-4-strong"
        style={{ maxWidth: "29rem" }}
      >
        <MDBCardHeader className="p-4">
          <MDBInput
            label="Enter your city"
            id="form1"
            onChange={Changing}
            type="text"
            value={values}
            autoComplete="off"
          />
        </MDBCardHeader>
        {!temps ? (
          <p>No city found</p>
        ) : (
          <div>
            <MDBCardBody>
              <MDBCardTitle>
                <img alt="flag" src={imgs} className="images" />
              </MDBCardTitle>
              <MDBCardTitle className="mt-4">{Timezone.name}</MDBCardTitle>
              <MDBCardTitle className="mt-4">Temperature</MDBCardTitle>
              <MDBCardTitle>{temps.temp}°C</MDBCardTitle>
              <MDBCardTitle className="mt-4">
                Min Temperature:{temps.temp_min}°C
              </MDBCardTitle>
              <MDBCardTitle className="mt-4">
                Max Temperature:{temps.temp_max}°C
              </MDBCardTitle>
              <MDBCardTitle className="mt-4">
                Humidity:{temps.humidity}%
              </MDBCardTitle>
            </MDBCardBody>
            <MDBCardFooter className="text-muted mt-4 p-3"></MDBCardFooter>
          </div>
        )}
      </MDBCard>
    </div>
  );
};
export default Card;
