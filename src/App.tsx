import React from "react";
import GlobalStyles from "./GlobalStyles";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Formulario } from "./components/Formulario/Formulario";
import { ListaDeVagas } from "./components/ListaVagas/ListaVagas";


const vagas = [
  { titulo: "Desenvolvedor Front-end", descricao: "Vaga para React.js e TypeScript." },
  { titulo: "Designer UX/UI", descricao: "Experiência com Figma e design responsivo." },
  { titulo: "Desenvolvedor Back-end", descricao: "Experiência com Node.js e bancos de dados SQL/NoSQL." },
  { titulo: "Desenvolvedor Fullstack", descricao: "Habilidades em front-end e back-end, com foco em JavaScript e TypeScript." },
  { titulo: "Engenheiro de Dados", descricao: "Conhecimento em pipelines de dados, ETL e Big Data." },
  { titulo: "Administrador de Banco de Dados", descricao: "Experiência com PostgreSQL, MySQL e otimização de consultas." },
  { titulo: "Cientista de Dados", descricao: "Análise de dados, Machine Learning e estatística avançada." },
  { titulo: "Designer de Interfaces", descricao: "Criação de layouts intuitivos para aplicações web e mobile." },
  { titulo: "Arquiteto de Software", descricao: "Definição de padrões e arquitetura de sistemas escaláveis." },
  { titulo: "Gerente de Projetos", descricao: "Gestão de equipes e prazos em projetos de TI." },
  { titulo: "Especialista em Segurança da Informação", descricao: "Proteção de dados e redes, implementando soluções de segurança." },
  { titulo: "Consultor de TI", descricao: "Aconselhamento técnico sobre infraestrutura e soluções tecnológicas." },
  { titulo: "Product Owner", descricao: "Responsável pela visão e roadmap de produto." },
  { titulo: "DevOps Engineer", descricao: "Automação e integração de sistemas para facilitar o desenvolvimento contínuo." },
  { titulo: "Analista de Qualidade", descricao: "Testes de software e automação para garantir a qualidade do produto." },
  { titulo: "Programador C#", descricao: "Desenvolvimento de sistemas utilizando a linguagem C# e .NET." },
  { titulo: "Analista de Suporte Técnico", descricao: "Suporte técnico para usuários e resolução de problemas em sistemas." },
  { titulo: "Administrador de Sistemas", descricao: "Gestão de servidores e infraestruturas de TI." },
  { titulo: "Engenheiro de Software", descricao: "Desenvolvimento e manutenção de software em diversas plataformas." },
  { titulo: "Assistente de TI", descricao: "Apoio geral em tarefas de tecnologia e infraestrutura." }
];



const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Formulario />
      <ListaDeVagas vagas={vagas} />
    </>
  );
};

export default App;
