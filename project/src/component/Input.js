import React from 'react'
import { InputGroup, Form, Button } from 'react-bootstrap'

export default function Input({ name, handleChange, placeholder, autoFocus, type, handleShowPassword }) {

    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label>{placeholder}</Form.Label>
                <InputGroup className="mb-2">
                    <Form.Control
                        name={name}
                        onChange={handleChange}
                        required
                        placeholder={placeholder}
                        autoFocus={autoFocus}
                        type={type}
                    />
                    {name === 'password' ? (
                        <Button variant="outline-secondary" onClick={handleShowPassword}>
                            {type === 'password' ? 'show' : 'hidden'}
                        </Button>
                    ) : null}

                </InputGroup>
            </Form.Group>
        </>
    )
}
