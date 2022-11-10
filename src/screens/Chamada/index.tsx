import React from "react";
import Separator from "../../components/Separator";
import RadioRow from "./RadioRow";
import SearchInput from "./SearchInput";
import { Container, HeaderTitle, Space, Table } from "./styles";
import SubmitButton from "./SubmitButton";

const Chamada: Page = ({}) => {
  return <Container>
    <HeaderTitle>Tabela dos Ideais</HeaderTitle>

    <Separator paddingTop={20} text="Selecionar desbravador"/>
    <SearchInput placeholder="Buscar um membro"/>

    <Separator paddingTop={20} text="Selecionar pontos"/>
    <Table>
      <RadioRow title="Frequência" options={[ 40, 20, 0 ]}/>
      <RadioRow title="Devoção Pessoal" options={[ 40, 20, 0 ]}/>
      <RadioRow title="Uniforme" options={[ 40, 20, 0 ]}/>
      <RadioRow title="Mensalidade" options={[ 40, 20, 0 ]}/>
      <RadioRow title="Ano Bíblico" options={[ 40, 20, 0 ]}/>
      <RadioRow title="Classe Regular" options={[ 40, 20, 0 ]}/>
      <RadioRow title="Espírito de Equipe" options={[ 40, 20, 0 ]}/>
      <RadioRow title="Disciplina" options={[ 40, 0 ]}/>
      <Space />
    </Table>

    <SubmitButton placeholder="Pronto"/>
  </Container>
}

export default Chamada;