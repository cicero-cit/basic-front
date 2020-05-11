import React, { useCallback, useState, SyntheticEvent } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Content } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';
import { ErrorForm } from '../../utils/DefaultPrivateProps';
import User from '../../models/User';
import { useToast } from '../../hooks/toast';
import UserAction from '../../actions/User';

const initialUser = new User();

const SignUp: React.FC = () => {
  const pageTestId = 'signup';

  const history = useHistory();
  const dispatch = useDispatch();

  const [user, setUser] = useState(initialUser);
  const [errors, setErrors] = useState({} as ErrorForm);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'Minimo de 6 digitos'),
        });

        await schema.validate(user, {
          abortEarly: false,
        });

        dispatch(await UserAction.signup(user));

        history.push('/signin');

        addToast({
          type: 'success',
          title: 'Bem vindo ;)',
          description: 'Agora, insira seus dados e comece a cadastrar',
        });
      } catch (err) {
        setErrors(getValidationErrors(err));
      }
    },
    [history, user, addToast, dispatch],
  );

  const handleChange = (e: SyntheticEvent): void => {
    const field = e.target as HTMLTextAreaElement;
    setUser({ ...user, [field.name]: field.value });
  };

  return (
    <Container>
      <Content>
        <h1>Realize seu cadastro.</h1>
        <form onSubmit={handleSubmit}>
          <Input
            testId={pageTestId}
            index={0}
            name="name"
            icon={FiUser}
            placeholder="Nome"
            error={errors.name}
            onChange={handleChange}
            value={user.name}
          />
          <Input
            testId={pageTestId}
            index={1}
            name="email"
            icon={FiMail}
            placeholder="E-mail"
            error={errors.email}
            onChange={handleChange}
            value={user.email}
          />

          <Input
            testId={pageTestId}
            index={2}
            name="password"
            icon={FiLock}
            placeholder="Senha"
            error={errors.password}
            onChange={handleChange}
            value={user.password}
            type="password"
          />
          <Button testId={pageTestId} type="submit">
            Cadastrar
          </Button>
        </form>

        <Link to="/signin">
          <FiArrowLeft />
          Voltar para logon
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
