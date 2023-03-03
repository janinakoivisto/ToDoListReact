import React from 'react';

const TodoTable = ({ todos, onDelete }) => {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
