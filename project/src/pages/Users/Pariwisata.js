import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TombolStart from '../../component/pariwisata/TombolStart'
import TombolEnd from '../../component/pariwisata/TombolEnd'
import Search from '../../component/pariwisata/Search'
import Cards from '../../component/pariwisata/Cards'

export default function Pariwisata() {


    return (
        <div>
            <Container className="mt-3">

                <Search />
                <Row>
                    <Col xs={6}>
                        <TombolStart />
                    </Col>
                    <Col xs={6}>
                        <TombolEnd />
                    </Col>
                </Row>




                <Row>
                    <Col xs={12}>

                        <Cards />

                    </Col>
                </Row>


            </Container>
        </div>
    )
}
