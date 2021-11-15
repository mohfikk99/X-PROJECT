import React from 'react'
import { Carousel, Card, Row, Col, Button } from 'react-bootstrap'

export default function Slider() {
    return (
        <>
            <h2 className="title mt-5 text-center">Motto</h2>
            <Row>
                <Col xs={6}>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <Card border="light" >
                                <Card.Header>Nama Wisata</Card.Header>
                                <Card.Img variant="top" src="desain/slide1.png" />
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Carousel.Item>
                        {/* <Carousel.Item interval={1000}>
                                <Card border="light" >
                                    <Card.Header>Nama Wisata</Card.Header>
                                    <Card.Img variant="top" src="desain/slide2.png" />
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <Card border="light" >
                                    <Card.Header>Nama Wisata</Card.Header>
                                    <Card.Img variant="top" src="desain/slide3.png" />
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                            </Carousel.Item> */}
                    </Carousel>
                </Col>
                <Col xs={6}>
                    <div className="slide-text">
                        <h3><strong> Keindahan </strong>Yang  <br />  Tersembunyi Di <strong>Nusantara</strong> </h3>
                        <p> Nikmati keindahan khatulistiwa yang tersaji secara indah, akurat, dan terpercaya yang akan menemani perjalanan dan petualangan anda, dimanapun kapanpun</p>
                    </div>
                    <Button variant="outline-dark" className="section-info-button badge">Jelajahi Pariwisata</Button>
                </Col>
            </Row>
        </>


    )
}
