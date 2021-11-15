import React from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'


export default function SectionInfo() {
    return (
        <>
            <h2 className="title">Partisipan</h2>
            <Row className="mb-2">
                <Col xs={6} className="text-center">
                    <Image src="desain/partisipan.svg" className="section-info-image" />
                    <p className="motto">Dokumentasikan Jutaan Pesona Wisata Yang Ada Di Daerah Kalian Dengan Menjadi Anggota Dan Partisipan Bersama Kami.</p>
                    <Button variant="outline-dark" className="section-info-button badge"> Siap Jadi Partisipan? </Button>
                </Col>
                <Col xs={6}>
                    <div className="section-info-one">
                        <h4 className="info-title">Explore</h4>
                        <p className="info-text">Kunjungi & Nikmati Keindahannya</p>
                    </div>
                    <div className="section-info-two">
                        <h4 className="info-title">Trip</h4>
                        <p className="info-text">Tantangan & Keberaian</p>
                    </div>
                    <div className="section-info-three">
                        <h4 className="info-title">Adventure</h4>
                        <p className="info-text">Langkah Awal Dari Sebuah Perjalanan</p>
                    </div>
                </Col>
            </Row>
        </ >
    )
}
