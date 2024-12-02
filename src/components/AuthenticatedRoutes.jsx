/**
 * AuthenticatedRoutes Component
 * 
 * This component serves as a wrapper for routes that require authentication in the application.
 * It utilizes AWS Amplify's authentication system to protect certain routes.
 * 
 * Key features:
 * 1. Uses React Router's Outlet and Navigate components for routing control.
 * 2. Integrates with Amplify's useAuthenticator hook to check authentication status.
 * 
 * Functionality:
 * - If the user is authenticated or the auth system is still configuring:
 *   - Renders the child routes using <Outlet />
 * - If the user is not authenticated:
 *   - Redirects to the "/login" route using <Navigate />
 * 
 * Usage:
 * Wrap protected routes with this component in your route configuration:
 * <Route element={<AuthenticatedRoutes />}>
 *   <Route path="/protected" element={<ProtectedComponent />} />
 * </Route>
 * 
 * This ensures that only authenticated users can access the wrapped routes,
 * enhancing the security of the application by preventing unauthorized access
 * to sensitive areas or functionalities.
 */

import { Outlet, Navigate } from 'react-router-dom';
import { useAuthenticator } from "@aws-amplify/ui-react"

function AuthenticatedRoutes() {
    const { authStatus } = useAuthenticator(context => [context.authStatus]);

    if (authStatus === 'authenticated' || authStatus === 'configuring') {
        return <Outlet />
    }

    return <Navigate to="/login" />
}

export default AuthenticatedRoutes;