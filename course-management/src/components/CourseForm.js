import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const CourseForm = () => {
  const [title, setTitle] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCourse = { title, courseCode, description };
    try {
      await axios.post('http://localhost:8080/api/courses', newCourse);
      alert('Course created successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </Form.Group>
      <Form.Group controlId="formCourseCode">
        <Form.Label>Course Code</Form.Label>
        <Form.Control type="text" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} required />
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} required />
      </Form.Group>
      <Button variant="primary" type="submit">Add Course</Button>
    </Form>
  );
};

export default CourseForm;
