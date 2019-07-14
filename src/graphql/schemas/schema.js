const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Incident {
    _id: String
    title: String
    description: String
    assignee: String
    status: String
    createdAt: String
    updatedAt: String
  }

  type User {
    _id: String
    name: String
    email: String
    role: String
  }

  type Query {
    incidents: [Incident]
    incident(title: String!): Incident
    users: [User]
    user(email: String!): User
  }

  type Mutation {
    createIncident(title: String!, description: String, assignee: String!): Incident
    acknowledgeIncident(_id: String!): Incident
    assignIncident(_id: String!, assignee: String!): Incident
    resolveIncident(_id: String!): Incident
    deleteIncident(_id: String!): Incident
  }
`

module.exports = typeDefs
