import React, { useCallback, useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiPhone, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Container, Content, ListContainer } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';
import Avatar from '../../components/Avatar';
import API from '../../services/api';

interface Contact {
  id: string;
  name: string;
  nickname: string;
}

const Home: React.FC = () => {
  const pageTestId = 'home';

  const formRef = useRef<FormHandles>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [contact, setContact] = useState<Contact>({} as Contact);

  const addContact = useCallback(
    async ({ name, nickname }: Omit<Contact, 'id'>) => {
      const Contact = {
        name,
        nickname,
      };

      const response = await API.post('contacts', Contact);
      setContacts(oldContacts => [...oldContacts, response.data]);
    },
    [],
  );

  const updateContact = useCallback(async ({ id, name, nickname }: Contact) => {
    const Contact = {
      id,
      name,
      nickname,
    };

    const response = await API.put(`contacts/${Contact.id}`, Contact);
    setContacts(oldContacts => [...oldContacts, response.data]);
    formRef.current?.setData({ name: '', nickname: '' });
  }, []);

  const deleteContact = useCallback(async (id: string) => {
    await API.delete(`contacts/${id}`);
    setContacts(oldContacts => oldContacts.filter(item => item.id !== id));
  }, []);

  const clickEditContact = useCallback(
    (id: string) => {
      setContacts(oldContacts => oldContacts.filter(item => item.id !== id));
      const clickedContact = contacts.find(item => item.id === id);
      setContact(clickedContact as Contact);
      formRef?.current?.setData(clickedContact as Contact);
    },
    [contacts],
  );

  const getContacts = useCallback(async () => {
    const response = await API.get('contacts');
    setContacts(response.data);
  }, []);

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  const handleSubmit = useCallback(
    async (data: Omit<Contact, 'id'>) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          nickname: Yup.string().required('Nickname obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (contact.id) {
          await updateContact({ ...data, id: contact.id });
        } else {
          await addContact(data);
        }
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [addContact, updateContact, contact.id],
  );

  return (
    <Container>
      <Content>
        <h3>Quem vai adicionar na sua lista hoje?</h3>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="nickname" icon={FiPhone} placeholder="Nickname" />

          <Button testId={pageTestId} type="submit" className="success">
            Adicionar
          </Button>
        </Form>

        <Link to="/signin">
          <FiArrowLeft />
          Sair
        </Link>
      </Content>

      <ListContainer>
        {contacts.map((item, idx) => (
          <Avatar
            {...item}
            testId={pageTestId}
            index={idx}
            deleteContact={deleteContact}
            editContact={clickEditContact}
          />
        ))}
      </ListContainer>
    </Container>
  );
};

export default Home;
