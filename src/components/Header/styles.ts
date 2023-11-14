import Link from 'next/link';
import styled from 'styled-components';
import { BiRocket } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';

export const Linker = styled(Link)`
  display: flex;
  margin: 0 15px 0 15px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffc4da;
`;

export const Toolbar = styled.div`
  background-color: #191919;
  width: 100%;
  height: 60px;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

export const Rocket = styled(BiRocket)`
  color: #ffc4da;
  height: 30px;
  width: 100%;
`;

export const Nextjs = styled(TbBrandNextjs)`
  color: #ffc4da;
  height: 36px;
  width: 100%;
`;

export const Madewith = styled.span`
  margin-right: 10px;
  display: flex;
`;