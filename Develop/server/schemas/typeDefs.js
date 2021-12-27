// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Query {
    me: User
  }

  type Mutation {
      login(email: String, password: String): Auth
      addUser(username: String, email: String, password: String): Auth
      saveBook(author: [String], description: String, title:  String, bookId: String, image: String, link: String): User
      removeBook(bookId: ID): User
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
      token:
      user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;