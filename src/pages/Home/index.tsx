import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Container, Content } from './styles';
import Button from '../../components/Button';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <h3>Qual braba você vai lansar hoje?</h3>
        <form>
          <Button className="success">Lansar um sucesso</Button>
          <Button className="info">Lansar uma info</Button>
          <Button className="error">Lansar um erro</Button>
        </form>

        <Link to="/signin">
          <FiArrowLeft />
          Sair
        </Link>
      </Content>
    </Container>
  );
};

export default Home;
