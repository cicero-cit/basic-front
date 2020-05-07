import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: object) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatorio'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        history.push('/');
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [history],
  );

  return (
    <Container>
      <Content>
        <h1>Preencha seus dados para entrar</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <Link to="/signin">Esqueci minha senha</Link>
        </Form>

        <Link to="/signup">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
    </Container>
  );
};

export default SignIn;
