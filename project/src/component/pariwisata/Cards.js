import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import SettingCard from '../SettingCard';

import { useSelector } from 'react-redux'

export default function Cards() {
    const tours = useSelector((state) => state.tours);

    return (
        <>

            <Row className="mt-5">
                {tours
                    .map((data) => (
                        <Col xs={4} key={data._id}>
                            <Card border="dark" className="mt-4 cards">
                                <Card.Header>{data.name_tour}, {data.name} <SettingCard /></Card.Header>
                                <Card.Img variant="top" src={data.image} />
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

        </>
    )
}
