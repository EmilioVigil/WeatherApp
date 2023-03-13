import React, { useState } from "react";
import '../style/SearchBar.css'

export function SearchBar({ onSearch }) {

    const [nameCity, setnameCity] = useState('');
    const [input, setInput] = useState('')

    const onChange = (e) => {
        setnameCity(e.target.value)
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(nameCity);
        setInput('');
        setnameCity('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ciudad..."
                onChange={onChange}
                className="input-form"
                value={input}
            />
            <button
                type="submit"
                className="btn-form"
            >
                Buscar
            </button>
        </form>
    );
}