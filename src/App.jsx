/**
 * Main App Component for Pet Adoption Application
 * 
 * This component serves as the root of the application, setting up routing and authentication.
 * 
 * Amplify-specific elements:
 * 
 * 1. Imports:
 *    - import { Authenticator } from "@aws-amplify/ui-react"
 *    - import { Hub } from 'aws-amplify/utils'
 *    These imports bring in Amplify's authentication UI components and event system.
 * 
 * 2. Authentication Event Listening:
 *    The useEffect hook sets up a listener for Amplify's authentication events:
 *    - Hub.listen('auth', ...) is used to listen for 'signedIn' and 'signedOut' events.
 *    - When these events occur, the user is navigated to the home route.
 * 
 * 3. Authenticator Provider:
 *    <Authenticator.Provider> wraps the entire application, providing authentication context.
 * 
 * 4. Protected Routes:
 *    <AuthenticatedRoutes /> is a custom component that uses Amplify's authentication 
 *    state to protect certain routes (e.g., /pets/create, /applications).
 * 
 * 5. Amplify UI Components:
 *    PetCreateForm is imported from '../ui-components', it's an Amplify-generated 
 *    UI component for creating pet entries.
 * 
 * This setup integrates Amplify's authentication seamlessly into the React application,
 * providing secure access to protected routes and responding to auth state changes.
 */


// Custom styles 
import "./styles.css";
// React imports
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// Components
import AboutUs from "./components/AboutUs";
import AdoptionForm from "./components/AdoptionForm";
import ApplicationDetail from "./components/ApplicationDetail";
import Applications from "./components/Applications";
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import Confirmation from "./components/Confirmation";
import Error from './components/Error';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Pets from "./components/Pets";
import PetCreateForm from '../ui-components/PetCreateForm';

// Amplify imports
import { Authenticator } from "@aws-amplify/ui-react"
import { Hub } from 'aws-amplify/utils';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // When the user signs in or out, they are navigated to the home route 
    const hubListenerToken = () => Hub.listen('auth', (data) => {
      // console.log(data);
      if (data.payload.event === "signedIn" || data.payload.event === "signedOut") {
        // console.log('now ' + data.payload.event)
        navigate('/');
      }
    });

    return () => hubListenerToken();
  }, []);

  return (
    <Authenticator.Provider>
        <div className="wrapper">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/adopt" element={<AdoptionForm />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/error" element={<Error />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/pets" element={<Pets />} />
              <Route element={<AuthenticatedRoutes />}>
                <Route path="/pets/create" element={<PetCreateForm />} />
                <Route path="/applications" element={<Applications />} />
                <Route path="/applications/:id" element={<ApplicationDetail />} />
              </Route>
              <Route path="*" element={<div className='home'><h2>Page Not Found</h2></div>} />
            </Routes>
          </main>
          <Footer />
        </div>
    </Authenticator.Provider>
  );
}

export default App;
