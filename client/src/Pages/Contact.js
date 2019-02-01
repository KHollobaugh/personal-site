import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';


const Contact = () => {
    return(
        <div className="contact-page">

        <h1>Contact</h1>
        <Form>

        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="name" name="name" id="exampleName" placeholder="your name" />
        </FormGroup>

        <FormGroup>
          <Label for="name">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="your email" />
        </FormGroup>


        <FormGroup>
          <Label for="exampleMessage">Message</Label>
          <Input type="message" name="message" id="message" />
        </FormGroup>

      </Form>
        
        </div>
    )
}

export default Contact;