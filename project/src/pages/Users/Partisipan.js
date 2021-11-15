import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import FormPartisipan from '../../component/partisipan/FormPartisipan'
import Footer from '../../component/Footer'

export default function Partisipan() {
    return (
        <>
            <Container className="mb-4">
                <Row>
                    <Col xs={6}>
                        <Image src="desain/desain.png" width="100%" />
                    </Col>
                    <Col xs={6} className="mt-4">
                        <h1><strong> Ayooo... </strong>Bergabung Menjadi Anggota & Partisipan</h1>
                        <p className="motto">Dokumentasikan Jutaan Pesona Wisata Yang Ada Di Daerah Kalian Dengan Menjadi Anggota Dan Partisipan Bersama Kami.</p>
                    </Col>
                </Row>
                <hr />
                <FormPartisipan />
                <Footer />
            </Container>
        </>
    )
}
