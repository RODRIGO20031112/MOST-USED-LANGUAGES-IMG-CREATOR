import styled from 'styled-components';

import theme from 'styles/theme';

export const Container = styled.div`
  display: flex;
  width: auto;
  height: auto;
`;

export const Content = styled.div`
  width: auto;
  height: auto;
  max-width: ${theme.grid.container};
`;
