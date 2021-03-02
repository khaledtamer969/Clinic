import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import classes from "./Register.module.css";
import {Link} from "react-router-dom";
const FormPage = () => {
return (
  <div className={classes.Register}>

<Link to="/Home"><MDBBtn>Back Home</MDBBtn></Link>
<h1>Register Now to join our family</h1>
<MDBContainer >
  <MDBRow>
    <MDBCol md="6">
    <form id="registation-form" role="form" class="registration-form" method="POST" action="https://formspree.io/f/mjvpdkop">
        <p className="h5 text-center mb-4"></p>
        <div className="grey-text">
          <MDBInput name="name" label="Your Name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput name="email" label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput name="age" label="Age" icon="birthday-cake" group type="text" validate error="wrong" success="right" />
          <MDBInput name="Address" label="Address" icon="city" group type="text" validate error="wrong" success="right" />
          <MDBInput name="Number" label="Phone Number" icon="phone" group type="text" validate error="wrong" success="right" />
         
        </div>
        <div className="text-center">
          <MDBBtn type="submit" outline color="success">
            Submit
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
        <div className="text-centre">
          <p>
After Registration we will send you a code to get your discount and avaliable appointment dates.
</p>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>
);
};

export default FormPage;