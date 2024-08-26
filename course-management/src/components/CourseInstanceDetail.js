import React, { useEffect, useState } from 'react';
import { Table, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CourseInstanceDetail = () => {
  const [instance, setInstance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Get the ID from the URL parameters

  useEffect(() => {
    const fetchInstance = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/instances/${id}`);
        setInstance(response.data);
      } catch (error) {
        setError('Error fetching course instance details.');
        console.error('Error fetching course instance details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchInstance();
  }, [id]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  if (!instance) return <div>No details found</div>;

  return (
    <div>
      <h3>Course Instance Details</h3>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>ID</th>
            <td>{instance.id}</td>
          </tr>
          <tr>
            <th>Year</th>
            <td>{instance.year}</td>
          </tr>
          <tr>
            <th>Semester</th>
            <td>{instance.semester}</td>
          </tr>
          <tr>
            <th>Course Title</th>
            <td>{instance.course ? instance.course.title : 'N/A'}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CourseInstanceDetail;
