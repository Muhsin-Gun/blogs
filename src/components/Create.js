import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


     const Create = () => {
      const [data, setData]= useState({
        title: "",
        author: "",
        body: "",
    });



const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({
        ...prev,
        [name]: value
    }));
};

const handleSubmit = (e) => {
    e.preventDefault();
       axios.post('http://localhost:4000/blogs', data)
        .then(res => {
            toast.success("post created successfully", {
                position: "top-right",
                autoClose: 3000,
            });
          
         
        })
        .catch(err => {
            toast.error("an error has occurred", {
                position: "top-right",
                autoClose: 3000,
            });
            
        });
};


return (
    <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label><br />
                <Form.Control name="title" type="text" onChange={handleChange} placeholder="Enter title"  />
            </Form.Group><br />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Author</Form.Label><br />
                <Form.Control name="author" type="text" onChange={handleChange} placeholder="Enter author's name" />
            </Form.Group><br />
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Body</Form.Label><br />
                <Form.Control name="body" as="textarea" rows={3} onChange={handleChange} placeholder="Enter body"/>
            </Form.Group><br />
            <Button variant='primary' type='submit'>Submit</Button>
        </Form>
        <ToastContainer />
    </div>
);
};

export default Create;