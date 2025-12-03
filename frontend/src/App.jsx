import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignedOut, SignInButton, UserButton, SignedIn, SignOutButton } from '@clerk/clerk-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Welcome to Next-Round Development Phase!</h3>

      <SignedOut>
        <SignInButton mode='modal'>
          <button>Log In</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton mode='modal' />
      </SignedIn>

      <UserButton />
    </>
  )
}

export default App
