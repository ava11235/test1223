/**
 import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/**
 * This file defines the data schema for a pet adoption application using AWS Amplify Gen 2.
 *
 * Imports:
 * - ClientSchema: Type for client-side schema representation
 * - a: Amplify's schema definition helper
 * - defineData: Function to create the data configuration
 *
 * Schema Definition:
 * The schema includes two main models: Pet and AdoptionApplication
 *
 * 1. Pet Model:
 *    - Fields: petId (primary key), name, age, species, dateEntered, image
 *    - Relationships: has many AdoptionApplications
 *    - Authorization:
 *      - Guests can read
 *      - Authenticated users from identity pool can read
 *      - Authenticated users can create and read
 *
 * 2. AdoptionApplication Model:
 *    - Fields: applicationId (primary key), applicantName, email, phone, submittedAt, petId
 *    - Relationships: belongs to a Pet
 *    - Authorization:
 *      - Guests can create applications
 *      - Authenticated users can read applications
 *
 * Key Features:
 * - Uses Amplify's Gen 2 schema definition syntax
 * - Defines custom primary keys (identifiers) for both models
 * - Implements fine-grained authorization rules
 * - Establishes a one-to-many relationship between Pet and AdoptionApplication
 *
 * Exports:
 * - Schema: TypeScript type for client-side usage
 * - data: Amplify data configuration using the defined schema
 *
 * Usage:
 * This schema can be imported into the main backend configuration file to set up
 * the data layer of the Amplify backend.
 */
 

import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Pet: a.model({
    petId: a.id().required(),
    name: a.string(),
    age: a.integer(),
    species: a.enum(['Cat', 'Dog', 'Reptile', 'Fish', 'Bird', 'Rodent']),
    dateEntered: a.string(),
    image: a.string(),
    applications: a.hasMany('AdoptionApplication', 'petId')
  })
    .identifier(['petId']) // Define custom PK 
    .authorization(allow => [
      allow.guest().to(["read"]),
      allow.authenticated("identityPool").to(["read"]), 
      allow.authenticated().to(["create", "read"]),
    ]),
  AdoptionApplication: a.model({
    applicationId: a.id().required(),
    applicantName: a.string(),
    email: a.email(),
    phone: a.string(),
    submittedAt: a.datetime(),
    petId: a.id().required(),
    pet: a.belongsTo('Pet', 'petId')
  })
    .identifier(['applicationId']) // Define custom PK
    .authorization((allow) => [
      allow.guest().to(["create"]), // Allow unauthenticated users to create
      allow.authenticated().to(["read"]), // Allow authenticated users to read
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema
});