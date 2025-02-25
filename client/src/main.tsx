import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrivyProvider } from '@privy-io/react-auth'
import './index.css'
import img from "./images/ai.png";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <PrivyProvider
      appId="cm7kvjmyt01mjvyki0r5rhops"
      config={{
        // Display email and wallet as login methods
        loginMethods: ["email", "wallet", "google", "sms"],
        // Customize Privy's appearance in your app
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: img,
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      <App />
    </PrivyProvider>
  </StrictMode>,
)
