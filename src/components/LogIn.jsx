/**
 * /**
 * LogIn Component
 * 
 * This component handles the authentication process for the application using AWS Amplify.
 * It wraps the Amplify Authenticator component and provides additional routing logic.
 * 
 * Key features:
 * 1. Utilizes React Router's Navigate component for redirection.
 * 2. Integrates Amplify's Authenticator component for the login interface.
 * 3. Uses Amplify's useAuthenticator hook to check authentication status.
 * 
 * Functionality:
 * - Checks the user's authentication status:
 *   - If already authenticated, redirects to the home page ("/").
 *   - If not authenticated, displays the Amplify Authenticator component.
 * 
 * Development vs Production:
 * - In development: Allows user sign-up (default Authenticator behavior).
 * - For production: Commented-out code to hide sign-up option (uncomment to restrict new user registration).
 * 
 * Usage:
 * Include this component in your route configuration for the login path:
 * <Route path="/login" element={<LogIn />} />
 * 
 * Security Note:
 * The ability to toggle sign-up functionality allows for controlled access in production environments,
 * preventing unauthorized users from creating accounts and accessing sensitive business data.
 * 
 * @returns {JSX.Element} The login interface or a redirect based on authentication status.
 */
 

import { Navigate } from 'react-router-dom';
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";

// The Login component wraps the Amplify Authenticator
// It provides additional logic to see if the user is already logged in
    // If they are, it navigates them to the root route
function LogIn() {
    const { authStatus } = useAuthenticator((context) => [
        context.authStatus
    ])

    if (authStatus === 'authenticated') {
        return <Navigate to="/" />
    }

    // In development allow users to sign up
    return <Authenticator /> 
    // Hide the sign up tab so that public users cannot sign up and access business data 
    // return <Authenticator hideSignUp /> 
}

export default LogIn;