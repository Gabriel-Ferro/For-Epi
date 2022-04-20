# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>


## Personas

**Mateus Rodrigues** <br/>
Residente em Montes Claros – MG, 27 anos, casado e com três filhos, adora viajar e passar momentos com a sua família. Trabalha em uma empresa têxtil, no ramo de cama, mesa e banho. Atua como operador de maquinário, na confecção e acabamento dos produtos. Mateus, assim como os demais colegas operadores, utiliza EPI’s de proteção auricular, luvas, botas e tocas para o cabelo, contudo, sofre com uma grande dificuldade na hora de trocar os seus EPI’s vencidos ou estragados, pois não sabe do processo e importância de tal atividade. Sonha em contribuir de forma mais assertiva para a empresa, visando ter mais reconhecimento pelo seu trabalho.  

**Angela Monique** <br/>
Residente em Belo Horizonte – MG, 32 anos, engenheira química, solteira e mora sozinha com seus dois gatos, adora ler, meditar e ama passar momentos sozinhas ouvindo música classica. Trabalha em uma empresa química e em 2010 sofreu um acidente que amputou dois dedos da sua mão esquerda por não estar usando o EPI corretamente. Após o acidente, Angela se manteve atenta na importância do uso do EPI, e conscientiza todos os seus colegas para a importância do seu uso. Mesmo com as dificuldades, sonha em cursar um mestrado e um doutorado, para contribuir ainda mais na área em que trabalha. 

**Vladimir Augusto** <br/>
Residente em Sorocaba – SP, 21 anos, solteiro, cursando e atuando como técnico em segurança do trabalho. Adora estudar e é um entusiasta de carros de corrida. Trabalha em uma grande empresa do ramo de mecânica automobilística, e conforme estuda no seu curso, consegue entender profundamente a necessidade das empresas e dos colaboradores em manterem-se seguros com o uso de EPI’s. Vladimir também percebe que na empresa em que trabalha, muito dos resíduos são reciclados e retornam para o ciclo de produção de outras empresas.

**Roberto Tavares** <br/>
Residente em Salvador – BA, 40 anos, casado e com dois filhos adolescentes. Adora ler notícias sobre o mundo e atualidades, e é um aficionado por séries e filmes. Atua no ramo de reciclagem de resíduos empresariais de uma grande empresa que coleta e destina para reciclagem ou descarte os mais diversos materiais em todo o território da Bahia e proximidades. Trabalhou mais da metade da sua vida nessa empresa, e entende a importância da reciclagem, sobretudo do destino correto de cada material, contudo, percebe que a empresa precisa de um olhar tecnológico, que possa informatizar e agregar na agilidade dos processos.

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

<table border="1">
    <tr>
        <th>EU COMO (PERSONA) </th> <th>QUERO/PRECISO (FUNCIONALIDADE) </th> <th>PARA (MOTIVO/VALOR) </th>
    </tr>
    <tr>
        <td>Usuário do sistema</td> <td>Ter histórico do que já foi entregue em datas passadas</td> <td>Controle do que me foi entregue </td>
    </tr>
    <tr>
        <td>Usuário do sistema</td> <td>Saber quando o EPI esta próximo de perder a validade</td><td>Poder fazer a troca com o supervisor </td>
    </tr>
    <tr>
        <td>Usuário do sistema</td><td>Saber onde posso entregar o equipamento vencido</td><td>Cumprir com as regularidades da segurança do trabalho</td>
    </tr>
    <tr>
        <td>Usuário do sistema</td><td>Devolver/trocar o meu EPI de forma ágil</td><td>Poder voltar a exercer minhas atividades na empresa de forma rápida e segura</td>
    </tr>
    <tr>
        <td>Usuário do sistema</td><td>Ter acesso a informações da importância do uso do EPI</td><td>Poder entender melhor os motivos para cumprir com os deveres inerentes a segurança do trabalho</td>
    </tr>
    <tr>
        <td>Usuário do sistema</td><td>Ser notificado pelo aplicativo ou SMS quando o EPI estiver próximo do vencimento</td><td>Efetuar a troca do EPI. </td>
    </tr>
    <tr>
        <td>Usuário do sistema</td><td>Saber quais EPI’s devo usar no exercer da minha profissão</td><td>Manter-me seguro e protegido</td>
    </tr>
</table>

<table border="1">
     <tr>
        <th>EU COMO (ADMINISTRADOR) </th> <th>QUERO/PRECISO (FUNCIONALIDADE) </th> <th>PARA (MOTIVO/VALOR) </th>
    </tr>
    <tr>
        <td>Administrador do sistema</td> <td>Cadastrar todos os funcionários da empresa.</td> <td>Controlar a entrega do EPI e gerar dados de entregas.</td>
    </tr>
    <tr>
        <td>Administrador do sistema</td> <td>Classificar e agrupar funcionários conforme atuação e riscos provenientes do trabalho exercido.</td> <td>Classificar a entrega do EPI e organizar quais EPI’s devem ser entregues.</td>
    </tr>
    <tr>
        <td>Administrador do sistema</td> <td>Cadastrar a biometria do colaborador.</td> <td>Agilizar o processo de entrega de EPI’s.</td>
    </tr>
     <tr>
        <td>Administrador do sistema</td> <td>Emitir notificações para cada colaborador de forma simultânea ou individual sobre o vencimento e troca do seu EPI.</td> <td>Efetuar a troca do EPI do colaborador.</td>
    </tr>
      <tr>
        <td>Administrador do sistema</td> <td>Poder cadastrar todos os EPI’s em estoque, assim como a quantidade e data de vencimento de todos eles.</td> <td>Manter controle de estoque e evitar perdas de EPI’S por vencimento, devido ao mau gerenciamento de estoque.</td>
    </tr>
     <tr>
        <td>Administrador do sistema</td> <td>Registrar treinamentos sobre os mais diversos temas relacionados a segurança do trabalho.</td> <td>Conscientizar o trabalhador sobre suas obrigações médicas e legais.</td>
    </tr>
    <tr>
        <td>Administrador do sistema</td> <td>Monitorar todos os EPI’s descartados.</td> <td>Ter dados e acesso a informação para posteriormente descartar os EPI’s de forma correta.</td>
    </tr>
     <tr>
        <td>Administrador do sistema</td> <td>Gerar dashboards e planilhas com informações de usuário, EPI’s, dados de entregas, dados de saída, e etc.</td> <td>Conseguir tomar decisões mais assertivas com base nas informações geradas pelo aplicativo.</td>
    </tr>
    <tr>
        <td>Administrador do sistema</td> <td>Ter acesso a normas de uso e descartes de EPI’s.</td> <td>Ter conhecimento das leis e agir de forma mais assertiva em relação a elas.</td>
    </tr>
     <tr>
        <td>Administrador do sistema</td> <td>Receber alertas caso algum funcionário esteja com o EPI vencido ou que não tenha efetuado a troca na data correta.</td> <td>Organizar, controlar e auxiliar os colaboradores no cumprimento do seu dever como funcionário.</td>
    </tr>
</table>

### Requisitos Funcionais

<table border="1">
    <tr>
        <th>ID  </th> <th>Descrição do Requisito </th> <th>Prioridade </th>
    </tr>
    <tr>
        <td>RF-001 </td> <td>Permitir que o usuário e administrador acesse sua conta</td> <td>ALTA </td>
    </tr>
    <tr>
        <td>RF-002 </td> <td>Permitir que o administrado registre a entrega do equipamento</td> <td>ALTA </td>
    </tr>
    <tr>
        <td>RF-003 </td> <td>Informar a importação da utilização do EPI</td> <td>MÉDIA </td>
    </tr>
    <tr>
        <td>RF-004 </td> <td>Notificações da não devolução de acessórios</td> <td>ALTA </td>
    </tr>
    <tr>
        <td>RF-005 </td> <td>Permitir que o administrador cadastre cada colaborador individualmente</td> <td>ALTA </td>
    </tr>
    <tr>
        <td>RF-006 </td> <td>Permitir que o administrado cadastre cada EPI de forma individual</td> <td>ALTA </td>
    </tr>
    <tr>
        <td>RF-007 </td> <td>Permitir que o administrador exclua o cadastro do colaborador quando necessário</td> <td>ALTA </td>
    </tr>
    <tr>
        <td>RF-008 </td> <td>Permitir que o colaborador veja quais EPI’s está usando</td> <td>ALTA </td>
    </tr>
    <tr>
        <td>RF-009 </td> <td>Permitir que o colaborador veja o histórico de quando devolveu cada EPI</td> <td>MÉDIA </td>
    </tr>
    <tr>
        <td>RF-010 </td> <td>Permitir que o administrador gere planilhas com dados de EPI descartados</td> <td>MÉDIA </td>
    </tr>
    <tr>
        <td>RF-011 </td> <td>Permitir que o administrador consiga cadastrar a sua conta</td> <td>ALTA </td>
    </tr>
    <tr>
        <td>RF-012 </td> <td>O Sistema deve enviar SMS para o celular do colaborador indicando que a devolução do EPI não está em dia</td> <td>MÉDIA </td>
    </tr>
</table>


### Requisitos não Funcionais

<table border="1">
    <tr>
         <th>ID  </th> <th>Descrição do Requisito </th> <th>Prioridade </th>
    </tr>
    <tr>
        <td>RNF-001 </td> <td>Controle de devolução e entrega de cada usuário </td> <td>ALTA </td>
    </tr>
    <tr>
        <td>RNF-002 </td> <td>Interface Intuitiva  </td> <td>MÉDIA </td>
    </tr>
    <tr>
        <td>RNF-003 </td> <td>Bloqueio temporário da conta do usuário que não devolver o equipamento   </td> <td>ALTA </td>
    </tr>
    <tr>
        <td>RNF-004 </td> <td>O sistema deve funcionar em todos os principais navegadores  </td> <td>MÉDIA </td>
    </tr>
    <tr>
        <td>RNF-005 </td> <td>Rodar na WEB e em dispositivos mobile de forma responsiva  </td> <td>ALTA </td>
    </tr>
    <tr>
        <td>RNF-006 </td> <td>A interface do sistema deverá se comportar adequadamente independente do front-end que será utilizado para acesso – Browser, Smartphone ou Tablet  </td> <td>ALTA </td>
    </tr>
    <tr>
        <td>RNF-007 </td> <td>Para o sistema será aplicado rigorosamente as atualizações dos fabricantes, sempre que são liberadas  </td> <td>ALTA </td>
        </tr>
</table>
    

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
