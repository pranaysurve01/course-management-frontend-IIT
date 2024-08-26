import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams(); // Get course id from URL
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/courses/${id}`);
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchCourse();
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Button variant="primary" onClick={() => navigate(-1)}>Back to Course List</Button>
      <h2>Course Details</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Course Code</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{course.id}</td>
            <td>{course.title}</td>
            <td>{course.courseCode}</td>
            <td>{course.description}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CourseDetail;
