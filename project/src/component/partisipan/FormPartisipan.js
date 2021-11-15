import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import FileBase from 'react-file-base64'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

import { createTour } from '../../actions/tours'

export default function FormPartisipan() {
    const [data, setData] = useState({
        name_tour: '',
        location: '',
        image: ''
    })
    const dispatch = useDispatch()
    const history = useHistory();
    const user = useState({ name: 'Partisipan' });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createTour({ ...data, name: user?.result?.name, history }));
        clear();
    }

    const clear = () => {
        setData({
            name_tour: '',
            location: '',
            image: ''
        })
    }


    return (
        <>
            <h2 className="title mt-5 text-center">Partisipan</h2>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNameTour">
                        <Form.Label>Nama Wisata *</Form.Label>
                        <Form.Control type="text" name="name_tour" value={data.name_tour} onChange={(e) => setData({ ...data, name_tour: e.target.value })} placeholder="Nama Wisata" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLocation">
                        <Form.Label>Lokasi Wisata *</Form.Label>
                        <Form.Control type="text" name="location" value={data.location} onChange={(e) => setData({ ...data, location: e.target.value })} placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group as={Col} controlId="formGridImage">
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setData({ ...data, image: base64 })}
                    />
                </Form.Group>
                {/* <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Jenis Wisata *</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Kota/Kabupaten *</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Provinsi *</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row> */}
                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Sumber Info</Form.Label>
                    <Form.Control type="file" name="image" placeholder="name@example.com" />
                </Form.Group> */}
                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Fasilitas</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Ulasan *</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group> */}

                {/* <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Syarat & Ketentuan Berlaku" />
                </Form.Group> */}

                <Button variant="outline-dark badge-dark" type="submit">
                    Kirim
                </Button>
            </Form>
        </>
    )
}
