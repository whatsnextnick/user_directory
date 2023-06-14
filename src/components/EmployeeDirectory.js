import React, { useEffect, useState } from 'react';
import EmployeeTable from './EmployeeTable';

const EmployeeDirectory = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employee data from an API or local file
    fetch('https://api.example.com/employees')
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Employee Directory</h1>
      <EmployeeTable employees={employees} />
    </div>
  );
};

export default EmployeeDirectory;
