import { useIsAuthenticated } from '@azure/msal-react'
import React from 'react'
import { Navbar } from 'react-bootstrap'
import { SignInButton } from './SigninButton'
import { SignOutButton } from './SignOutButton'

export const PageLayout = (props) => {
  // const isAuthenticated = true
  const isAuthenticated = useIsAuthenticated()
  console.log(isAuthenticated)

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <a className="navbar-brand" href="/">
          MSAL React Tutorial
        </a>
        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
      </Navbar>
      <h5>
        <center>
          Welcome to the Microsoft Authentication Library For React Tutorial
        </center>
      </h5>
      <br />
      <br />
      {props.children}
    </>
  )
}
