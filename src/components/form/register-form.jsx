import Link from "next/link";
import React from "react";
import { useState } from 'react';
import Swal from 'sweetalert2';
import PageHeading from "../../app/ui/PageHeading";
import Spacing from "../../app/ui/Spacing";
import Div from "../../app/ui/Div";
import { Icon } from "@iconify/react";
import SectionHeading from "../../app/ui/SectionHeading";
const RegisterhtmlForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');

  const getPersonalIdByEmail = async (email) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users?filters[email][$eq]=${email}`);
    const data = await response.json();

    if (data.length > 0) {
      return data[0].id;
    }

    return null;
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const personalId = await getPersonalIdByEmail(email);

    if (password == passwordConfirm) {
      if (!personalId) {
        var raw = JSON.stringify({
          "username": username,
          "password": password,
          "email": email
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`, requestOptions)
          .then(response => {
            if (response.status != 400) {
              Swal.fire({
                icon: 'success',
                timer: 5000,
                showCancelButton: false,
                showConfirmButton: true,
                text: 'Usuario creado exitosamente',
              })
              window.location.href = `/sign-in`
            } else {
              Swal.fire({
                icon: 'error',
                timer: 5000,
                showCancelButton: false,
                showConfirmButton: true,
                text: 'Usuario o Email ya registrados',
              })
            }

          }
          )
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      } else {
        Swal.fire({
          icon: 'error',
          timer: 5000,
          showCancelButton: false,
          showConfirmButton: true,
          text: 'Usuario ya registrado',
        })
      }

    } else {
      Swal.fire({
        icon: 'error',
        timer: 5000,
        showCancelButton: false,
        showConfirmButton: true,
        text: 'La confirmacion de contraseña es distinta',
      })
    }
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
              title="Registrarse"
              subtitle="Register"
            />
            <Spacing lg="30" md="5" />
            <Div className="col-lg-12">
              <form onSubmit={handleRegisterSubmit} className="row">
                <Div className="col-sm-6">
                  <label htmlFor="name" className="cs-primary_color">
                    Usuario <span>*</span>
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
                    E-mail <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="cs-form_field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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

                <Div className="col-sm-6">
                  <label htmlFor="name" className="cs-primary_color">
                    Confirmar Contraseña <span>*</span>
                  </label>
                  <input
                    className="cs-form_field"
                    type="password"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    required
                  />
                  <Spacing lg="20" md="20" />
                </Div>

                <Div className="col-sm-12">
                  <button className="cs-btn cs-style1">
                    <span>Registrarse</span>
                    <Icon icon="bi:arrow-right" />
                  </button>

                  <Link href="/sign-in" className="cs-btn cs-style1" style={{marginLeft:'20px'}}>Log in</Link>
                </Div>
              </form>
            </Div>
          </Div>
        </Div>

      </section>
    </>
  );
};

export default RegisterhtmlForm;
