import React, { useState, useEffect } from 'react';
import { Form, Input, Scope } from 'unform';
import * as Yup from 'yup';
import api from '../../services/api';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório')
})

export default function UserForm({ history, match }) {
  const [data, setData] = useState({});
  const { id } = match.params;

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`/users/${id}`);
      setData(response.data);
    }

    if (id) {
      loadData()
    }
  }, [id])

  async function handleSubmit(data) {
    await api.postOrPut('/users', id, data);

    history.push('/users');
  }

  return (
    <Form schema={schema} initialData={data} onSubmit={handleSubmit}>
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
