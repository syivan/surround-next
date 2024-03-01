import { FloatingLabel, Modal, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import React from "react";

export default function Updates({ status, handleStatus }) {

    if (!status) {
        return null;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(event.target.mail.value);

    }

    return (
        <React.Fragment>
            <Modal show={status} onHide={handleStatus} className="d-flex">
                <Form onSubmit={handleSubmit}>
                    <Modal.Header>
                        <Modal.Title>
                            Subscribe to our newsletter!
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-2">
                            <Form.Control type="email" aria-describedby="emailHelpSection" name="mail" />
                        </FloatingLabel>
                        <Form.Text id="emailHelpSection" className="text-primary">
                            Get an email every now and then about new features and sounds coming to A Soft Murmur. No spam ever and one-click unsubscribe.
                        </Form.Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleStatus}>Close</Button>
                        <Button variant="primary" type="submit">Get Updates</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </React.Fragment>
    )
}