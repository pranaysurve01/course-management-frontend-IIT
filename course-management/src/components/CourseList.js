import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get(`http://localhost:8080/api/courses`);
      setCourses(response.data);
    };
    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/courses/${id}`);
      setCourses(courses.filter(course => course.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Course Code</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => (
          <tr key={course.id}>
            <td>{course.id}</td>
            <td>{course.title}</td>
            <td>{course.courseCode}</td>
            <td>
            <Button variant="info" onClick={() => navigate(`/courses/${course.id}`)}>Details</Button>
              <Button variant="danger" onClick={() => handleDelete(course.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CourseList;