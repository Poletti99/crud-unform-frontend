import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users');

      setUsers(response.data);
    }

    loadUsers();
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Rua</th>
          <th>Nº</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
              <td>{user.address.number}</td>
              <td>
                <a href="">Editar</a>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
