// Zaimplementuj formularz rejestracji w React, który zawiera następujące pola:
// Imię (wymagane)
// Email (wymagane, z walidacją formatu)
// Hasło (min. 8 znaków, wymagane)
// Dodatkowe zadania:
// Zaimplementuj walidację w czasie rzeczywistym, wyświetlając komunikaty błędów.
// Dodaj przycisk „Wyślij”, który wyświetli alert z danymi, gdy formularz zostanie poprawnie wypełniony.

import React from 'react'
import { useState } from 'React'

const registrationForm = {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        formDate[e.target.name] = e.target.value
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("error")
    }
}

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
        </div>
        <div>
            <label>Email:</label>
            <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
        </div>
        <div>
            <label>Password:</label>
            <input
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
        </div>
        <button type="submit">Submit</button>
    </form>
)

export default registrationForm
