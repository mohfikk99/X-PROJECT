import React from 'react'
import { Row, Col, Card, Button, Stack } from 'react-bootstrap'
import SettingCard from '../SettingCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapSigns
} from "@fortawesome/free-solid-svg-icons";

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
                                    <Stack direction="horizontal" gap={2}>
                                        <strong className="me-auto">{tour.name}</strong>
                                        <SettingCard tour={tour} handleShowModal={handleShowModal} setCurrentId={setCurrentId} />
                                    </Stack>
                                </Card.Header>
                                <Card.Img variant="top" src={tour.image} />
                                <Card.Body>
                                    <div className="titleCard">
                                        <strong>
                                            <FontAwesomeIcon icon={faMapSigns} className="me-3" />
                                            {tour.name_tour}
                                        </strong>
                                    </div>
                                    <hr />
                                    <Button variant="outline-dark badge-dark" className="btn-custom">
                                        Detail
                                    </Button>

                                    <Button variant="outline-dark badge-dark" className="btn-custom ms-4">
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
