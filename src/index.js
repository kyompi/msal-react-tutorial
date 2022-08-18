import { PublicClientApplication } from '@azure/msal-browser'
import { MsalProvider } from '@azure/msal-react'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { msalConfig } from './authConfig'
import { PageLayout } from './components/PageLayout'
import './index.css'
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from '@azure/msal-react'
import { SignInButton } from './components/SigninButton'

const msalInstance = new PublicClientApplication(msalConfig)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <PageLayout>
        <AuthenticatedTemplate>
          <App />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <p>You are not signed in! Please sign in.</p>
          <SignInButton />
        </UnauthenticatedTemplate>
      </PageLayout>
    </MsalProvider>
  </React.StrictMode>
)
