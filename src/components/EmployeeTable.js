import React, { useState } from 'react';

const EmployeeTable = ({ employees }) => {
  const [sortedEmployees, setSortedEmployees] = useState(employees);

  const handleSort = (property) => {
    // Sort employees based on the selected property
    const sorted = [...sortedEmployees].sort((a, b) =>
      a[property].localeCompare(b[property])
    );
    setSortedEmployees(sorted);
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>Name</th>
          <th onClick={() => handleSort('department')}>Department</th>
          <th onClick={() => handleSort('position')}>Position</th>
        </tr>
      </thead>
      <tbody>
        {sortedEmployees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.department}</td>
            <td>{employee.position}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
