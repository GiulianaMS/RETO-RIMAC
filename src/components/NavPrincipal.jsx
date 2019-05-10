import React from 'react';
import { Link } from "react-router-dom";
import './styles/Navprincipal.scss';

const NavPrincipal = () => { 
  return(
    <nav className="navbar navbar-expand-lg nav-color width">
      <Link to="/"><img src="https://www.rimac.com.pe/corredores/bitportal/Cms_Data/Sites/Corredores/Files/images/logo-contenedor-150x55.png" alt="logo-rimac" /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse margin" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <button class="button-nav">
              <Link to='/Ssm/'>Nuestros Seguros </Link>
              <i class="fas fa-caret-down"></i>
            </button>
          </li>
          <li class="nav-item active">
            <p class="nav-link a-nav">Promociones</p>
          </li>
          <li class="nav-item">
            <p class="nav-link a-nav">Centro de Ayuda</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavPrincipal;