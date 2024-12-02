/**
 * Header Component
 * 
 * This component represents the site header, integrating AWS Amplify authentication 
 * to provide dynamic navigation based on the user's authentication status.
 * 
 * Amplify Authentication Integration:
 * 
 * 1. useAuthenticator Hook:
 *    - Imports and uses the useAuthenticator hook from '@aws-amplify/ui-react'
 *    - Extracts 'user' and 'signOut' from the authenticator context:
 *      const { user, signOut } = useAuthenticator();
 *    
 *    - 'user': Represents the currently authenticated user (if any)
 *    - 'signOut': Function to log out the current user
 * 
 * 2. Dynamic Navigation:
 *    - Uses the 'user' object to conditionally render navigation items:
 *      - Unauthenticated users see: Home, About us, Pets, Adopt, Log in
 *      - Authenticated users see: Home, About us, Pets, Create pet, Manage applications, Sign out
 * 
 * 3. Sign Out Functionality:
 *    - Implements a handleSignOut function that:
 *      a. Prevents default form submission
 *      b. Calls the Amplify signOut function
 *      c. Navigates the user to the home page after signing out
 * 
 * 4. Conditional Rendering:
 *    - Uses the presence or absence of 'user' to determine what to display:
 *      - {!user && ...}: Renders content only for unauthenticated users
 *      - {!!user && ...}: Renders content only for authenticated users
 * 
 * 5. Login/Logout Button:
 *    - Dynamically switches between a "Log in" link and a "Sign out" button based on auth status
 * 
 * This implementation allows for a seamless user experience, with the navigation 
 * adapting to the user's authentication state in real-time, leveraging Amplify's 
 * authentication system to manage user sessions and access control.
 */


import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuthenticator } from '@aws-amplify/ui-react';
import logo from "../assets/logo.jpeg";

const Header = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuthenticator();

  function handleSignOut(e) {
    e.preventDefault();
    signOut();
    navigate('/')
  }

  return (
    <header className='site-header col flex-center'>
      <div className='row'>
        <img className='logo' src={logo} alt='' />
        <h1 className='text-center'><NavLink to='/'>Example Organization Pet Shelter</NavLink></h1>
      </div>
      <nav className='site-nav'>
        <ul className='row'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About us</NavLink></li>
          <li><NavLink to='/pets' end>Pets</NavLink></li>
          {/* Logged in users don't need to see Adopt link */}
          {!user && <li><NavLink to='/adopt'>Adopt</NavLink></li>}
          {/* Only logged in users can see the Create pet link */}
          {!!user && <li><NavLink to='/pets/create'>Create pet</NavLink></li>}
          {/* Only logged in users can see the Applications link */}
          {!!user && <li><NavLink to='/applications'>Manage applications</NavLink></li>}
          {/* If there is no logged in user, they see a Log in NavLink. If there is a user, they see the Sign out button */}
          <li>
            {!user ?
              <NavLink className='btn' to='/login'>Log in</NavLink> :
              <button className='btn btn-black' onClick={handleSignOut}>
                Sign out
              </button>
            }
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
