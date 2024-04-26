import React from 'react';
import {Button} from 'react-bootstrap'
import redirectToAuthCodeFlow from "@/utils/authorize";

const Page = async () => {
    return (
        <React.Fragment>
        <Button onClick={redirectToAuthCodeFlow}>
                please
        </Button>
    </React.Fragment>)
}

export default Page;