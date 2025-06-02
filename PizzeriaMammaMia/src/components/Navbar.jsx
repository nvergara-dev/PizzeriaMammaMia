import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false;  
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> Pizzeria Mamma Mia!</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-1">
        <li class="nav-item mx-1">
          <a class="nav-link active" aria-current="page" href="#">🍕Home</a>
        </li>
        <li class="nav-item mx-1">
          {token ? <a class="nav-link" href="#">🔓Profile</a> : <a class="nav-link" href="#">🔐Login</a>}            
        </li>
        <li class="nav-item mx-1">
          {token ? <a class="nav-link" href="#">🔒Logout</a> : <a class="nav-link" href="#">🔐register</a>}  
        </li>
      </ul>
      <span class="navbar-text text-skyblue">
        🛒Total : ${total.toLocaleString()}
      </span>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
