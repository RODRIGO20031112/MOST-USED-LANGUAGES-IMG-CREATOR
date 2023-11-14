import { Main } from 'components/Main/';
import * as S from './styles';
import { Header } from 'components/Header/header';
import { Creator } from 'components/Creator/creator';
import { Creations } from 'components/Creations/creations';

const Dashboard = () => {
  return (
    <Main>
      <Header />
      <S.Container>
        <Creations/>
        <Creator />
      </S.Container>
    </Main>
  );
};

export default Dashboard;
