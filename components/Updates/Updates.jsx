import { FloatingLabel, Modal, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import React from "react";

export default function Updates({ status, handleStatus }) {

    if (!status) {
        return null;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const date = new Date();
        const formattedDate = date.toISOString().split('T')[0];
        await fetch('/api/subscribe', {
            method: 'POST',
            body: JSON.stringify({ email: event.target.mail.value, enrollment_date: formattedDate })
        })
        handleStatus();
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
                            <Form.Control type="email" aria-describedby="emailHelpSection" name="mail" required />
                        </FloatingLabel>
                        <Form.Text id="emailHelpSection" className="text-primary">
                            Join our email newsletter bringing you the latest features, articles and ambience coming to The Sound Ambience.
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