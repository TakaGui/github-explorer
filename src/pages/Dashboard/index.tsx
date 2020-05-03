import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState([]);

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositóro" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="https://github.com/TakaGui/workshopdev">
          <img
            src="https://avatars2.githubusercontent.com/u/19439567?s=460&u=7697609774df2598e67ed652b468d6530f400e25&v=4"
            alt="Guilherme Takahashi"
          />

          <div>
            <strong>workshopdev</strong>
            <p>Workshop Dev feito com a Rocketseat</p>
          </div>

          <FiChevronRight size={35} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
