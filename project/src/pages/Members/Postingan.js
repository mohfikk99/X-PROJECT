import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FormPostingan from '../../component/postingan/FormPostingan'
import CardPost from '../../component/postingan/CardPost'

import { useDispatch } from 'react-redux';
import { getTours } from '../../actions/tours';

export default function Postingan() {
    const [currentId, setCurrentId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);


    useEffect(() => {
        dispatch(getTours());
    }, [currentId, dispatch])

    return (
        <>
            <Container className="mt-3">
                <FormPostingan
                    showModal={showModal}
                    handleShowModal={handleShowModal}
                    handleCloseModal={handleCloseModal}
                    currentId={currentId}
                    setCurrentId={setCurrentId}
                />
                <Row>
                    <Col xs={12}>

                        <CardPost handleShowModal={handleShowModal} setCurrentId={setCurrentId} />

                    </Col>
                </Row>
            </Container>
        </>
    )
}
