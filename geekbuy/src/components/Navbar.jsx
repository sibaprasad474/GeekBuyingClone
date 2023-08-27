import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-primary" id='navid1'>
    <div className="container-fluid" id='login-container'>
    <div className="login"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"id='icon-login' />
        </svg>
      
    </div>
    </div>
    </nav>
    <hr />
    <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
        <img src="https://www.geekbuying.com/favicon.ico" alt=""className='logo' />
            <a className="navclassNamhrefbar-brand" href="#">
                GeekBuy
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    All Items
                </a>
                <ul class="dropdown-menu">
                    <li><a className="dropdown-item" href="#">All categories</a></li>
                    <li><a className="dropdown-item" href="#">Electronics</a></li>
                    <li><a className="dropdown-item" href="#">Clothings</a></li>
                    <li><a className="dropdown-item" href="#">Others</a></li>
                </ul>
                </li>
                {/* <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li> */}
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
</nav>
    </div>
  )
}

export default Navbar