import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import SettingCard from '../SettingCard';

import { useSelector } from 'react-redux'

export default function CardPost({ handleShowModal, setCurrentId }) {
    const tours = useSelector((state) => state.tours);
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <>
            {/* {!tours.length < Spinner animation="border" /> : ( */}
            <Row className="mt-5">
                {tours
                    .filter((tour) => tour.name === user?.result?.name)
                    .map((tour) => (
                        <Col xs={4} key={tour._id}>
                            <Card border="dark" className="mt-4 cards">
                                <Card.Header>
                                    {tour.name_tour}, {tour.name}
                                    <SettingCard tour={tour} handleShowModal={handleShowModal} setCurrentId={setCurrentId} />
                                </Card.Header>
                                <Card.Img variant="top" src={tour.image} />
                                <Card.Body>
                                    <hr />
                                    <Button variant="outline-dark badge-dark" className="btn-custom">
                                        Detail
                                    </Button>

                                    <Button variant="outline-dark badge-dark" className="btn-custom">
                                        Rute
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </Row>
            {/* )} */}
        </>
    )
}
