import * as S from './styles';

export const Header = () => {
  return (
    <S.Toolbar>
      <S.Linker href="/about">
        <S.Rocket />
      </S.Linker>
      <S.Linker href="/about">
        <S.Madewith>Made with</S.Madewith>
        <S.Madewith><S.Nextjs/></S.Madewith>
      </S.Linker>
    </S.Toolbar>
  );
};
