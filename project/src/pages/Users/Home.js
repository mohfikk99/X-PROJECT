import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Jumbotron from '../../component/home/Jumbotron'
import SectionInfo from '../../component/home/SectionInfo'
import Slider from '../../component/home/Slider'
import Footer from '../../component/Footer'

export default function Home() {
    return (
        <div>
            <Container>
                <Row>
                    <Jumbotron />
                    <hr />
                    <SectionInfo />
                    <Slider />

                    <Footer />
                </Row>
            </Container>
        </div>
    )
}
