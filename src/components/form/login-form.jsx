import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import swal from 'sweetalert2';
import cookie from 'js-cookie';
import CryptoJS from 'crypto-js';
import PageHeading from "../../app/ui/PageHeading";
import Spacing from "../../app/ui/Spacing";
import Div from "../../app/ui/Div";
import { Icon } from "@iconify/react";
import SectionHeading from "../../app/ui/SectionHeading";

const LoginForm = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const encryptData = (data) => {
      const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret_key');
      return encryptedData.toString();
   };
   const handleSubmit = async (e) => {
      e.preventDefault();
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
         "identifier": username,
         "password": password
      });

      var requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: raw,
         redirect: 'follow'
      };

      fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`, requestOptions)
         .then(response => {

            if (response.status == 200) {
               response.json().then(result =>
                  cookie.set('token', encryptData(result.jwt)) +
                  cookie.set('email', encryptData(result.user.email)) +
                  cookie.set('user', encryptData(result.user.username)) +
                  cookie.set('ut', encryptData(result.user.superUsuarioAdministrador))
               )
               window.location.href = '/'
            } else {
               swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Usuario o Contraseña incorrectos!',
               })
            }
         })
         .then(result => '')
         .catch(error => '');

   };
   return (
      <>
         <Spacing lg="150" md="80" />
         <section
            className="login-area pt-40 pb-100 wow"
            data-wow-duration=".8s"
            data-wow-delay=".5s"
         >
            <Div className="container">
               <Div className="row">
                  <SectionHeading
                     title="Iniciar Sesion"
                     subtitle="Log in"
                  />
                  <Spacing lg="30" md="5" />
                  <Div className="col-lg-12">
                     <form onSubmit={handleSubmit} className="row">
                        <Div className="col-sm-6">
                           <label htmlFor="name" className="cs-primary_color">
                              Usuario o E-mail: <span>*</span>
                           </label>
                           <input
                              type="text"
                              className="cs-form_field"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              required
                           />
                           <Spacing lg="20" md="20" />
                        </Div>

                        <Div className="col-sm-6">
                           <label htmlFor="name" className="cs-primary_color">
                              Contraseña <span>*</span>
                           </label>
                           <input
                              type="password"
                              className="cs-form_field"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                           />
                           <Spacing lg="20" md="20" />
                        </Div>




                        <Div className="col-sm-12">
                           <button className="cs-btn cs-style1">
                              <span>Iniciar sesión</span>
                              <Icon icon="bi:arrow-right" />
                           </button>

                           <Link href="/register" className="cs-btn cs-style1" style={{marginLeft:'20px'}}>Registrarse</Link>
                        </Div>
                     </form>
                  </Div>
               </Div>
            </Div>

         </section>

      </>
   );
};

export default LoginForm;