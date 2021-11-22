import React, { useState, useEffect } from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap'
import FileBase from 'react-file-base64'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

import { createTour, updateTour } from '../../actions/tours'

export default function FormPostingan({ showModal, handleShowModal, handleCloseModal, currentId, setCurrentId }) {
    const [data, setData] = useState({
        name_tour: '',
        location: '',
        image: ''
    });
    const tour = useSelector((state) => currentId ? state.tours.find((p) => p._id === currentId) : null);
    const user = JSON.parse(localStorage.getItem('profile'));

    const dispatch = useDispatch()
    const history = useHistory();

    useEffect(() => {
        if (tour) setData(tour);
    }, [tour])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateTour({ currentId, ...data, name: user?.result?.name }));
        } else {
            dispatch(createTour({ ...data, name: user?.result?.name, history }));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setData({
            name_tour: '',
            location: '',
            image: ''
        })
    }


    return (
        <>
            <Button variant="outline-dark badge-dark" onClick={handleShowModal}>
                Tambahkan
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>{currentId ? 'Ubah' : 'Tambah'} Postingan</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNameTour">
                                <Form.Label>Nama Wisata *</Form.Label>
                                <Form.Control type="text" name="name_tour" value={data.name_tour} onChange={(e) => setData({ ...data, name_tour: e.target.value })} placeholder="Nama Wisata..." />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLocation">
                                <Form.Label>Lokasi Wisata *</Form.Label>
                                <Form.Control type="text" name="location" value={data.location} onChange={(e) => setData({ ...data, location: e.target.value })} placeholder="Lokasi..." />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
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
                </Row>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Sumber Info</Form.Label>
                    <Form.Control type="text" name="image"/>
                </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Fasilitas</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Ulasan *</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Syarat & Ketentuan Berlaku" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridImage">
                <Form.Label>Gambar</Form.Label> <br/>
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => setData({ ...data, image: base64 })}
                                className="form-control"
                            />
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Batal
                        </Button>
                        <Button variant="dark" onClick={handleCloseModal} type="submit">
                            Posting
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}
