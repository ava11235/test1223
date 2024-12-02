/**  imports the defineAuth function from the Amplify backend package.
 *  This function is used to configure authentication for your application.
 * configuration sets up email-based authentication for your application. Users will be able to sign up and sign in using their email addresses.*/

import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});
