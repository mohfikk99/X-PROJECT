import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'

const Tombol = [
    {
        name: 'Daerah Wisata',
        scroll: false,
        backdrop: true,
        placement: 'end'
    },
];

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-dark badge-dark" onClick={handleShow} className="canvas-end mb-5">
                {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default function TombolEnd() {
    return (
        <>
            {Tombol.map((props, idx) => (
                <OffCanvasExample key={idx} {...props} />
            ))}
        </>
    );
}
