# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>


## Personas

**Clinica Madame Curie** <br/>
Empresa de médio porte, CNPJ registrado na categoria “Prestação de Serviços”, atua especificamente na área da saúde, possui 8 anos desde sua fundação, se concentra no atendimento exclusivo de pessoas que se identificam como mulheres, detêm valores tais como: “agir de forma correta”, “a vida em primeiro lugar” e “cuidar do nosso planeta”. Empoderamento feminino e Natureza. Não possui uma logística clara no que se refere ao descarte de EPI’s, atualmente buscando aprimorar esse processo para contribuir para a conservação do meio ambiente e evitar multas fiscais. Nota 4.7 no site “Glassdoor” em avaliações de funcionários e ex-funcionários. Nota 8.1 no site “Reclame Aqui”. 

**Lacterra** <br/>
Empresa de médio porte, CNPJ registrado na categoria “Prestação de Serviços”, atua especificamente área de construção, possui 3 anos desde sua fundação, focada em reformas e edificação de apartamentos de luxo em São Paulo, detêm valores tais como: “incentivo à disciplina e à honestidade”, “inovação” e “foco nas necessidades do público”. Trabalho em equipe e foco no resultado. Tem tido prejuízos financeiros por não possuir um sistema que controle o registro, documentação e devolução dos EPI’s, o que acarreta em falhas pontuais na segurança nos locais de trabalho. Nota 3.4 no site “Glassdoor” em avaliações de funcionários e ex-funcionários. Nota 6.1 no site “Reclame Aqui”. 

**Fábrica King** <br/>
Empresa de grande porte, CNPJ registrado na categoria de “Comércio”, atua especificamente na área de roupas e calçados, possui 12 anos desde sua fundação, concentrada, se concentra em fornecer peças de vestuário com foco no mercado de moda masculina em todo o país adequando-se à cultura local, detêm valores tais como: “colaboração”, “proatividade”, “sustentabilidade econômica”. Simplicidade e Humildade. Possui falhas na logística referente à prazos de vencimento e equipamentos ociosos, alguns dos funcionários reclamam de terem que trabalhar sem a proteção necessária. Nota 2.8 no site “Glassdoor” em avaliações de funcionários e ex-funcionários. Nota 5.8 no site “Reclame Aqui”. 


> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
