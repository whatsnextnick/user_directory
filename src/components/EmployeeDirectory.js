import React, { useEffect, useState } from 'react';
import EmployeeTable from './EmployeeTable';
import employees from '../data/employees'; // Import the employee data

const EmployeeDirectory = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [filterOption, setFilterOption] = useState('name');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    setEmployeeData(employees);
    setFilteredEmployees(employees);
  }, []);

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
    filterEmployees(event.target.value);
  };

  const filterEmployees = (filterOption) => {
    if (filterOption === 'name') {
      // Filter employees by name
      const filtered = employeeData.filter((employee) =>
        employee.name.toLowerCase().includes(filterOption.toLowerCase())
      );
      setFilteredEmployees(filtered);
    }
  };

  return (
    <div>
      <h1>Employee Directory</h1>
      <div>
        <label htmlFor="filterOption">Filter by:</label>
        <select id="filterOption" value={filterOption} onChange={handleFilterChange}>
          <option value="name">Name</option>
          {/* Add more filter options if needed */}
        </select>
      </div>
      <EmployeeTable employees={filteredEmployees} />
    </div>
  );
};

export default EmployeeDirectory;
