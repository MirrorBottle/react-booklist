import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

export default function BookForm() {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input reqired type="text" placeholder="Book Title" value={title} onChange={e => setTitle(e.target.value)} />
            <input reqired type="text" placeholder="Book Author" value={author} onChange={e => setAuthor(e.target.value)} />
            <input type="submit" value="add book" />
        </form>
    )
}
