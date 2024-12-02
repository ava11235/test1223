/**
 * AWS Amplify Gen 2 Backend Configuration
 * 
 * This file serves as the main entry point for the Amplify backend configuration,
 * integrating various backend resources into a cohesive backend setup.
 *
 * Imports:
 * - defineBackend: Core function from Amplify to define the backend structure
 * - auth: Authentication configuration (imported from './auth/resource')
 * - data: Data model and schema configuration (imported from './data/resource')
 * - storage: File storage configuration (imported from './storage/resource')
 *
 * Backend Definition:
 * The defineBackend function is called with an object containing the following resources:
 * 1. auth: Sets up authentication services (e.g., user sign-up, sign-in)
 * 2. data: Configures the data layer, including database models and access patterns
 * 3. storage: Defines file storage capabilities, likely using Amazon S3
 *
 * Structure:
 * - Each resource (auth, data, storage) is defined in its own file and imported here
 * - This modular approach allows for easier management and separation of concerns
 *
 * Usage:
 * - This configuration is used by Amplify to set up and manage the backend infrastructure
 * - It provides a centralized point of control for all backend resources
 *
 * Extensibility:
 * - Additional resources like functions, API, analytics, etc., can be added to this configuration
 *
 * Note:
 * - This uses Amplify's Gen 2 syntax, which provides a more declarative and type-safe way to define backend resources
 * - Always refer to the latest Amplify documentation for best practices and additional features
 *
 * @see https://docs.amplify.aws/react/build-a-backend/ for more information on adding additional resources
 */


import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';



defineBackend({
  auth,
  data,
  storage,
});