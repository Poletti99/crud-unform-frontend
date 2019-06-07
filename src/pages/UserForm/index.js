import React, { useState, useEffect } from 'react';
import { Form, Input, Scope } from 'unform';
import api from '../../services/api';

export default function UserForm({ history, match }) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function loadData() {
      const { id } = match.params;
      const response = await api.get(`/users/${id}`);
      setData(response.data);
    }

    if (match.params.id) {
      loadData()
    }
  }, [match.params.id])

  async function handleSubmit(data) {
    await api.postOrPut('/users', match.params.id, data);

    history.push('/users');
  }

  return (
    <Form initialData={data} onSubmit={handleSubmit}>
      <Input name="name" label="Nome" />
      <Input name="email" label="Email" />

      <Scope path="address">
        <Input name="street" label="Rua" />
        <Input name="number" label="Número" />
      </Scope>

      <button type="submit">Enviar</button>
    </Form>
  )
}
