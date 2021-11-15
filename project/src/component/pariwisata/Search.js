import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'


export default function Search() {
    return (
        <>

            <InputGroup className="mb-4">
                <FormControl
                    placeholder="Telusuri Pariwisata..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-dark" id="button-addon2">
                    Search
                </Button>
            </InputGroup>

        </>
    )
}
