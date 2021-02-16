import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import API from '../utils/API'

const Login = (props) => {
  const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitForm = (e) => {
    e.preventDefault()
      API.login({ email, password }).then(res => {
        console.log('res! ', res)
        if (res.status === 200) {
          history.push('/MainPage') // redirect the page
        }
      }).catch(err => { 
        console.log('err', err)
        alert("Incorrect email or password")

      })
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <div className="header pt-3 grey lighten-2">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  Log in
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
            <form>
              <MDBInput onChange={e => setEmail(e.target.value)} label="Email" group type="text" validate />
              <MDBInput
                label="Password"
                group
                onChange={e => setPassword(e.target.value)}
                type="password"
                validate
                containerClass="mb-0"
              />
              <p className="font-small grey-text d-flex justify-content-end">
                Forgot
                <a
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  Password?
                </a>
              </p>
              </form>
              <div className="text-center mb-4 mt-5 mr-5">
                <MDBBtn
                  color="danger"
                  type="button"
                  className="btn-block"
                  onClick={submitForm}
                >
                  Log in
                </MDBBtn>
              </div> 
              <p className="font-small grey-text d-flex justify-content-center">
                Don't have an account?
                <a
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  Sign up
                </a>
              </p>
            
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;