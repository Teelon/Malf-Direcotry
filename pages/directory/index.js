import { Row,Col, Container, Form, FormLabel } from "react-bootstrap";
import payload from "payload";
import { query } from "express";

function Directory(){
    return (
    <Container className="mt-5">
        <Row className="align-bottom">
            <Col className="h1">Directory</Col>
            <Col >
            <Form>
                <Row>
                <Col lg={9}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Search"/>
                    </Form.Group>
                </Col>
                <Col>
                <Form.Group>
                    <Form.Select>
                        <option value="1">Name</option>
                        <option value="2">Extension</option>
                        <option value="3">Department</option>
                        <option value="3">Position</option>
                    </Form.Select>
                </Form.Group>
                </Col>
                </Row>
                
                
            </Form>
            </Col>
        </Row>
    </Container>
    )
}

export default Directory;


export async function getStaticProps(context) {


const extensions = await payload.find({
    collection: "extension",
    
  });
  console.log(extensions);

  return {
    props: {
        extensions
    }, // will be passed to the page component as props
  }
}