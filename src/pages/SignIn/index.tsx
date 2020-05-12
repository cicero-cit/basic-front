import React, { useCallback, useState, SyntheticEvent, useRef } from 'react';
import { FiLogIn, FiMail, FiLock, FiGithub } from 'react-icons/fi';
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

const SignIn: React.FC = () => {
  const pageTestId = 'signin';

  const history = useHistory();

  const dispatch = useDispatch();

  const formRef = useRef<HTMLFormElement>(null);
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

        const user = {
          email: formRef.current.email.value,
          password: formRef.current.password.value,
        };

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
    [history, addToast, dispatch],
  );

  return (
    <Container>
      <Content>
        <h1>Preencha seus dados para entrar</h1>

        <form onSubmit={handleSubmit} ref={formRef}>
          <Input
            testId={pageTestId}
            index={0}
            name="email"
            icon={FiMail}
            placeholder="E-mail"
            error={errors.email}
          />

          <Input
            testId={pageTestId}
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            index={1}
            error={errors.password}
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
        <a href="https://github.com/cicero-cit/basic-front">
          <FiGithub />
          Source code
        </a>
      </Content>
    </Container>
  );
};

export default SignIn;
