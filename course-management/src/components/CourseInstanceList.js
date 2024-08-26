import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CourseInstanceList = ({ year, semester }) => {
  const [instances, setInstances] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInstances = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/instances/${year}/${semester}`);
        setInstances(response.data);
      } catch (error) {
        console.error('Error fetching course instances:', error);
      }
    };
    fetchInstances();
  }, [year, semester]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/instances/${year}/${semester}/${id}`);
      setInstances(instances.filter(instance => instance.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Year</th>
          <th>Semester</th>
          <th>Course Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {instances.map(instance => (
          <tr key={instance.id}>
            <td>{instance.id}</td>
            <td>{instance.year}</td>
            <td>{instance.semester}</td>
            <td>{instance.course ? instance.course.title : 'N/A'}</td> {/* Handle null values */}
            <td>
              <Button 
                variant="info" 
                onClick={() => navigate(`/instances/${instance.id}`)}
              >
                View Details
              </Button>
              <Button 
                variant="danger" 
                onClick={() => handleDelete(instance.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CourseInstanceList;
