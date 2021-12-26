// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Query {
    me: User
  }

  type Mutation {

  }

  type User {
      _id: ID
      username: String
      email: String
      bookCount: Int
      savedBooks: [Book]
  }

  type Book {
      bookId: ID
      authors: [String]
      description: String
      title: String
      image: String
      link: String
  }
  
  type Auth {

  }
`;

// export the typeDefs
module.exports = typeDefs;