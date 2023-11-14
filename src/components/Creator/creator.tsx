import { useState } from 'react';
import * as S from './styles';
import { Langs } from 'components/Langs/langs';

interface WannaCreateMenuProps {
  state: boolean;
  children: React.ReactNode;
}

export const WannaCreateMenu: React.FC<WannaCreateMenuProps> = ({
  state,
  children
}) => {
  return <S.WannaCreateMenu state={state}>{children}</S.WannaCreateMenu>;
};

interface TableProps {
  state: boolean;
  children: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ state, children }) => {
  return <S.Table state={state}>{children}</S.Table>;
};

export const Creator = () => {
  const [state, setState] = useState(true);
  const modifyState = () => setState(!state);

  const [selecionados, setSelecionados] = useState<string[]>([]);

  const handleCheckboxChange = (item: string) => {
    if (selecionados.includes(item)) {
      setSelecionados(
        selecionados.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelecionados([...selecionados, item]);
    }
  };

  const handleMostrarSelecionados = () => {
    alert(`Itens selecionados: ${selecionados.join(', ')}`);
  };

  return (
    <div>
      <S.WannaCreate onClick={modifyState}>
        Do you want to create a Most Used Languages for Readme.md? <S.Add />
      </S.WannaCreate>
      <WannaCreateMenu state={state}>
        <Table state={state}>
          {Langs.map((item, index) => (
            <S.List key={index}>
              <S.Checkbox
                type="checkbox"
                checked={selecionados.includes(item)}
                onChange={() => handleCheckboxChange(item)}
              />
              <label>{item}</label>
            </S.List>
          ))}
        
          <S.Selects onClick={handleMostrarSelecionados}>
            Mostrar Selecionados
          </S.Selects>
        </Table>
      </WannaCreateMenu>
    </div>
  );
};
