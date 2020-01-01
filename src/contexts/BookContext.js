import React, { createContext, useState } from 'react'

export const BookContext = createContext();

export default function BookContextProvider(props) {
    const [books, setBooks] = useState([
        { title: "Paper Towns", author: "John Green", id: 1 },
        { title: "The Fault is In Our Stars", author: "John Green", id: 2 },
        { title: "Kubikiri Cycle: Aoiro Savant to Zaregoto Tsukai", author: "NisiOisiN", id: 3 },
        { title: "The Memorandum of Okitegami Kyoko", author: "NisiOisiN", id: 4 }
    ])
    const addBook = (title, author) => {
        setBooks([...books, { title, author, id: Math.random() }])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    )
}

