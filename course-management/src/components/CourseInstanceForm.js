import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const CourseInstanceForm = () => {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [courseId, setCourseId] = useState('');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get(`http://localhost:8080/api/courses`);
      setCourses(response.data);
    };
    fetchCourses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newInstance = { year, semester, course: { id: courseId } };
    try {
      await axios.post(`http://localhost:8080/api/instances`, newInstance);
      alert('Instance created successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formYear">
        <Form.Label>Year</Form.Label>
        <Form.Control value={year} onChange={(e) => setYear(e.target.value)} required />
      </Form.Group>
      <Form.Group controlId="formSemester">
        <Form.Label>Semester</Form.Label>
        <Form.Control value={semester} onChange={(e) => setSemester(e.target.value)} required />
      </Form.Group>
      <Form.Group controlId="formCourseId">
        <Form.Label>Course</Form.Label>
        <Form.Control as="select" value={courseId} onChange={(e) => setCourseId(e.target.value)} required>
          <option value="">Select Course</option>
          {courses.map(course => (
            <option key={course.id} value={course.id}>{course.title}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">Add Instance</Button>
    </Form>
  );
};

export default CourseInstanceForm;