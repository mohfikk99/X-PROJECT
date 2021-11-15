import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

export default function Jumbotron() {
    return (
        <>
            <Row className="mt-2">
                <Col xs={6} className="mt-4">
                    <h4 className="text-welcome"><strong>Selamat Datang</strong></h4>
                    <h1><strong> Promosi Pariwisata </strong>Dalam Satu Langkah</h1>
                    <p className="motto">Ayooo, Bergabung bersama kami dan menjadi bagian dalam rencana besar ini. Sebarkan objek-objek wisata yang ada di daerah kalian</p>
                </Col>
                <Col xs={6}>
                    <Image src="desain/desain.png" width="115%" />
                </Col>
            </Row>
        </>
    )
}
