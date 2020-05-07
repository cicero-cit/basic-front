import React from 'react';
import { Container } from './styles';

const Avatar: React.FC = () => {
  return (
    <Container>
      <span role="img" aria-label="name">
        😀
      </span>

      <strong>Roberto Nobre</strong>
      <p>(19) 982047718</p>
    </Container>
  );
};

export default Avatar;
