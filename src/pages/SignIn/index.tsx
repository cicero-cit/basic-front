import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <h1>Preencha seus dados para entrar</h1>
      <form>
        <input placeholder="E-mail" />

        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
  </Container>
);

export default SignIn;
