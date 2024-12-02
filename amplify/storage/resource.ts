/**
 * This file defines the storage configuration for an AWS Amplify Gen 2 backend.
 * 
 * Import:
 * - Imports the 'defineStorage' function from the Amplify backend package.
 *
 * Storage Configuration:
 * - Uses 'defineStorage' to create a new storage resource.
 * - 'name': Sets the name of the storage resource to 'petShelterApplication'.
 * 
 * Access Rules:
 * - Defines access permissions for the 'public/images/*' path:
 *   - Allows guest (unauthenticated) users to read files.
 *   - Allows authenticated users to both read and write files.
 *
 * Usage:
 * - This configuration creates an S3 bucket for file storage.
 * - It's particularly set up for storing images, likely for a pet shelter application.
 * - The 'public/images/*' path suggests a structure for storing publicly accessible images.
 *
 * Note:
 * - This is using Amplify's Gen 2 syntax, which provides a more declarative way to define backend resources.
 * - The storage resource defined here can be imported and used in the main backend configuration file.
 */


import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'petShelterApplication',
  access: (allow) => ({
    'public/images/*': [
        allow.guest.to(['read']),
        allow.authenticated.to(['read', 'write'])
    ]
  })
});
