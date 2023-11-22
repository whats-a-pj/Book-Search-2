import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// export const SAVE_BOOK = gql`
//     mutation saveBook(authors: [String], description: String!, title: String!) {
//         saveBook(authors: $authors, description: $description, title: $title) {
//             bookId
//             authors
//             description
//             title
//             image
//             link
//         }
//     }
// `;

// export const REMOVE_BOOK = gql`
//     mutation removeBook(bookId: ID!) {
//         removeBook(bookId: $bookId) {
//             bookId
//         }
//     }
// `;