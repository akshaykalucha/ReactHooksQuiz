import { gql } from '@apollo/client'

export const ALL_AUTHORS = gql`
query {
    allAuthors {
        name
        birth
    }
}
`

export const ALL_BOOKS = gql`
query {
    allBooks {
        title
        published
        author
        genres
    }
}
`

export const BOOK_COUNT = gql`
query {
    bookCount
}
`

export const AUTHOR_COUNT = gql`
query {
    authorCount
}
`

export const FIND_AUTHOR = gql`
query findAuthorByName($nameToSearch: String!) {
    findAuthor(name: $nameToSearch) {
        name
        ssn
        birth
    }
}
`

export const FIND_BOOK = gql`
query findBookByName($titleToSearch: String!) {
    findBook(title: $titleToSearch) {
        isbn
        title
        published
        author
        genres
    }
}
`