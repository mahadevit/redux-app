import React from 'react'
import { Navbar,Nav, NavDropdown, NavLink} from 'react-bootstrap'

export const MainHeaders = () => {
  return (
    <>
   
   <Navbar bg="light" expand="lg">
       <Nav className='container'>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto nav-item">
              <NavLink to="/" className="nav-link" exact>Home</NavLink>
              <NavLink to="/about" className="nav-link" exact>About</NavLink>
               
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>             
            </Nav>
            <Navbar.Collapse className="justify-content-end">
              <NavLink className='btn btn-outline-dark me-1'>
              <i className='fa fa-sign-in me-1'></i>Login
              </NavLink>
              <NavLink className='btn btn-outline-dark me-1'>
              <i className='fa fa-user-plus me-1'></i>Registration
              </NavLink>
              <NavLink className='btn btn-outline-dark me-1'>
              <i className='fa fa-shopping-cart me-1'></i>Cart (0)
              </NavLink>
           </Navbar.Collapse>
          </Navbar.Collapse>
        </Nav>
    </Navbar>
</>
  )
}
