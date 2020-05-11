import React, { useCallback, useEffect, useState, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiAnchor } from 'react-icons/fi';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Container, Content, ListContainer } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';
import Avatar from '../../components/Avatar';
import { useToast } from '../../hooks/toast';
import { ErrorForm } from '../../utils/DefaultPrivateProps';
import Contact from '../../models/Contact';
import ContactAction from '../../actions/Contact';
import { useTypedSelector } from '../../reducers';
import { REMOVE_FROM_LIST } from '../../types/Contact';

const initialContact = new Contact();

const Home: React.FC = () => {
  const pageTestId = 'home';

  const dispatch = useDispatch();
  const contacts = useTypedSelector(state => state.Contact.list) || [];

  const [errors, setErrors] = useState({} as ErrorForm);

  const [contact, setContact] = useState<Contact>(initialContact);

  const { addToast } = useToast();

  const addContact = useCallback(
    async ({ name, nickname }: Omit<Contact, 'id'>) => {
      const data = {
        name,
        nickname,
        emoji: Math.floor(Math.random() * 10),
      };

      dispatch(await ContactAction.add(data));
      setContact(initialContact);

      addToast({
        type: 'success',
        title: 'Adicionado!',
        description: 'Contato adicionado com sucesso!',
      });
    },
    [addToast, dispatch],
  );

  const updateContact = useCallback(
    async ({ id, name, nickname, emoji }: Contact) => {
      const data = {
        id,
        name,
        nickname,
        emoji,
      };

      dispatch(await ContactAction.edit(data));
      setContact(initialContact);

      addToast({
        type: 'info',
        title: 'Atualizado!',
        description: 'Contato foi atualizado',
      });
    },
    [addToast, dispatch],
  );

  const deleteContact = useCallback(
    async (id: string) => {
      dispatch(await ContactAction.delete(id));

      addToast({
        type: 'error',
        title: 'Bye bye!',
        description: 'Contato foi removido da lista',
      });
    },
    [addToast, dispatch],
  );

  const clickEditContact = useCallback(
    (id: string) => {
      dispatch({
        type: REMOVE_FROM_LIST,
        data: { id },
      });
      const clickedContact = contacts.find(item => item.id === id);
      setContact(clickedContact as Contact);
    },
    [contacts, dispatch],
  );

  const getContacts = useCallback(async () => {
    dispatch(await ContactAction.getAll());
  }, [dispatch]);

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  const handleSubmit = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          nickname: Yup.string().required('Nickname obrigatório'),
        });

        await schema.validate(contact, {
          abortEarly: false,
        });

        if (contact.id) {
          await updateContact(contact);
        } else {
          await addContact(contact);
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          setErrors(getValidationErrors(err));
        }
      }
    },
    [addContact, updateContact, contact],
  );

  const handleChange = (e: SyntheticEvent): void => {
    const field = e.target as HTMLTextAreaElement;
    setContact({ ...contact, [field.name]: field.value });
  };

  return (
    <Container>
      <Content>
        <h3>Quem vai adicionar na sua lista hoje?</h3>

        <form onSubmit={handleSubmit}>
          <Input
            name="name"
            icon={FiUser}
            placeholder="Nome"
            testId={pageTestId}
            error={errors.name}
            onChange={handleChange}
            value={contact.name}
          />
          <Input
            name="nickname"
            icon={FiAnchor}
            placeholder="Nickname"
            testId={pageTestId}
            error={errors.nickname}
            onChange={handleChange}
            value={contact.nickname}
          />

          <Button testId={pageTestId} type="submit" className="success">
            Adicionar
          </Button>
        </form>

        <Link to="/signin">
          <FiArrowLeft />
          Sair
        </Link>
      </Content>

      <ListContainer>
        {contacts.map((item, idx) => (
          <Avatar
            {...item}
            key={item.id}
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
