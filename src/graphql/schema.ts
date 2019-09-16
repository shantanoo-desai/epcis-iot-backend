import { gql } from 'apollo-server';

export default gql`

    type Site {
        _id: ID!
        company: String!
        siteName: String!
        countryCode: String!
        city: String!
        topic: String!
        sensors: [SensorMap!]!
    }

    type SensorMap {
        mac: String!
        bizLocation: String!
    }

    input SiteInput {
        company: String!
        siteName: String!
        countryCode: String!
        city: String!
        topic: String!
        sensors: [SensorMapInput!]!
    }

    input SensorMapInput {
        mac: String!
        bizLocation: String!
    }

    type Query {
        site(siteId: ID!): Site
        sites: [Site!]
        bizLocations: [String!]
    }

    type Mutation {
        createSite(siteInput: SiteInput!): Site
        removeSite(siteId: ID!): Site
        updateSite(siteId: ID!, siteInput: SiteInput!): Site
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;