import React, { useState } from 'react';
import CourseInstanceList from '../components/CourseInstanceList';
import { Form, Button } from 'react-bootstrap';

const CourseInstancesPage = () => {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [showList, setShowList] = useState(false);

  const handleSearch = () => {
    setShowList(true);
  };

  return (
    <div>
      <h2>Course Instances</h2>
      <Form inline className="mb-4">
        <Form.Group controlId="formYear">
          <Form.Label>Year</Form.Label>
          <Form.Control value={year} onChange={(e) => setYear(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formSemester" className="ml-3">
          <Form.Label>Semester</Form.Label>
          <Form.Control value={semester} onChange={(e) => setSemester(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" className="ml-3" onClick={handleSearch}>Search</Button>
      </Form>
      {showList && <CourseInstanceList year={year} semester={semester} />}
    </div>
  );
};

export default CourseInstancesPage;