import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/login.css';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function Login() {
  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <div className="login-container">
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <MDBInput wrapperClass='mb-4 mx-5 w-100 form-group' label='Email' id='formControlLg' type='email' size="lg" className="form-control"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100 form-group' label='Senha' id='formControlLg' type='password' size="lg" className="form-control"/>
              <p className="small mb-3 pb-lg-2"><a className="text-black" href="#!">Esqueci minha senha!</a></p>
              <MDBBtn outline className='mx-2 px-5 btn' size='lg'>
                Login
              </MDBBtn>
              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'black' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'black' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'black' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>
              <div>
                <p className="mb-0">Ainda não tem cadastro? <Link to="/cadastrar-usuario" className="fw-bold" style={{ color: 'black' }}>Cadastre-se</Link></p>
              </div>
            </MDBCardBody>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
