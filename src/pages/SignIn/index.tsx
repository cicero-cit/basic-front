import React, { useCallback, useState, SyntheticEvent } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { ErrorForm } from '../../utils/DefaultPrivateProps';
import { useToast } from '../../hooks/toast';
import UserAction from '../../actions/User';
import User from '../../models/User';

const InitialUser = new User();

const SignIn: React.FC = () => {
  const pageTestId = 'signin';

  const history = useHistory();

  const dispatch = useDispatch();

  const [user, setUser] = useState(InitialUser);
  const [errors, setErrors] = useState({} as ErrorForm);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatorio'),
        });

        await schema.validate(user, {
          abortEarly: false,
        });

        const { data } = dispatch(await UserAction.signin(user));

        if (!data) {
          throw Error;
        }

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          setErrors(getValidationErrors(err));
          return;
        }

        addToast({
          type: 'error',
          title: 'Error ao logar :(',
          description: 'Verifique as informações e tente novamente',
        });
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
        <h1>Preencha seus dados para entrar</h1>
        <form onSubmit={handleSubmit}>
          <Input
            testId={pageTestId}
            index={0}
            name="email"
            icon={FiMail}
            placeholder="E-mail"
            error={errors.email}
            onChange={handleChange}
            value={user.email}
          />

          <Input
            testId={pageTestId}
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            index={1}
            error={errors.password}
            onChange={handleChange}
            value={user.password}
          />

          <Button testId={pageTestId} type="submit">
            Entrar
          </Button>

          <Link to="/signin">Esqueci minha senha</Link>
        </form>

        <Link to="/signup">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
    </Container>
  );
};

export default SignIn;
