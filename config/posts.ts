export const posts = [
  {
    id: 1,
    image_banner: "grupocednet-banner.png",
    name: "API de Integrações do Grupo CedNet: Facilitando Conexões com Serviços Terceiros",
    slug: "api-integracoes-grupo-cednet-facilitando-conexoes-servicos-terceiros",
    content: [
      "<h2 class='text-2xl font-bold'>Introdução</h2>",
      "<p>O <b>Grupo CedNet</b>, fundado em 2001, sempre teve como objetivo oferecer serviços de internet de alta qualidade. Ao longo de mais de 20 anos de atuação, a empresa cresceu significativamente, atendendo a mais de 30 cidades no Centro-Oeste Paulista e no Norte Pioneiro do Paraná. Esse crescimento trouxe consigo a necessidade de integrar diferentes plataformas e otimizar processos internos</p>",
      "<p>Com o passar do tempo, o Grupo CedNet passou a utilizar diversas ferramentas, como o <b>ERP IXC Soft</b>, a plataforma de atendimento <b>KingVoice</b>, e a <b>Redecard</b> para processamento de pagamentos. No entanto, as limitações impostas pelos sistemas existentes exigiram a criação de uma solução que centralizasse e simplificasse as integrações. Foi nesse contexto que nasceu a <b>API de Integrações do Grupo CedNet</b>, desenvolvida em <b>Laravel</b> e utilizando <b>MySQL</b> como banco de dados.</p>",
      "<h2 class='text-2xl font-bold'>Motivação para Criar a API</h2>",
      "<p>Antes da criação da API, a integração entre os sistemas era complexa e demandava processos manuais, que não atendiam às crescentes demandas da empresa. Um dos principais desafios era a necessidade de adaptar os fluxos de atendimento e pagamentos, de forma personalizada e eficiente.</p>",
      "<p>A API foi projetada para resolver esses problemas, centralizando a comunicação entre as plataformas. Isso trouxe mais agilidade na gestão de dados, especialmente no que diz respeito às operações do <b>ERP IXC Soft</b>, integração com a central de atendimento <b>KingVoice</b>, e a implementação de soluções de pagamento via <b>Redecard</b>.</p>",
      "<h2 class='text-2xl font-bold'>Principais Funcionalidades da API</h2>",
      "<h4 class='text-xl font-bold'>Integração com o ERP IXC Soft</h4>",
      "<p>Uma das integrações mais críticas da API é com o ERP IXC Soft, que é o sistema de gestão utilizado pela CedNet. A API facilita a consulta de dados de contratos, status de faturas e status de conexões dos clientes. Além disso, a API realiza validações sobre o status de conexão <b>PPPoE</b>, verificando questões como reduções de velocidade, manutenções preventivas e notificações de paradas que possam afetar a conexão do cliente.</p>",
      "<p>Esses recursos são particularmente importantes no contexto do atendimento ao cliente via <b>Opa Suite</b>, um sistema de chat que inclui um robô virtual. O robô necessita acessar dados em tempo real do ERP, e a API nativa do Opa Suite não atendia completamente às necessidades da CedNet, o que exigiu a criação de um recurso personalizado para consultas e validações mais detalhadas.</p>",
      "<h4 class='text-xl font-bold'>Recursos de Pagamento e Links de Pagamentos</h4>",
      "<p>Outro ponto forte da API é sua integração com a <b>Redecard</b> para processar pagamentos. No aplicativo <b>Minhas Faturas</b>, desenvolvido em <b>Next.js</b>, os clientes podem visualizar e pagar suas faturas diretamente, utilizando a API para realizar transações de forma segura e eficiente.</p>",
      "<p>Com o tempo, surgiu a necessidade de oferecer <b>parcelamentos sem juros</b> para clientes específicos, sem liberar essas condições para todos. Para atender a essa demanda, foi criado o recurso de <b>Links de Pagamentos</b>, onde é possível customizar condições de pagamento para clientes individuais. A API gera um <b>token</b> válido por 24 horas, que é enviado diretamente ao cliente, garantindo que apenas ele tenha acesso à condição especial de pagamento.</p>",
      "<h4 class='text-xl font-bold'>Cednet Links Redirection</h4>",
      "<p>A solução de <b>Links de Pagamentos</b> também motivou o desenvolvimento do <b>Cednet Links Redirection</b>, um sistema semelhante ao <b>Bitly</b> que utiliza o domínio <b>cednet.link/</b>. Inicialmente criado para gerenciar os links de pagamento, o sistema foi expandido para permitir o encurtamento de outros tipos de links, oferecendo uma ferramenta flexível para a empresa.</p>",
      "<h2 class='text-2xl font-bold'>Desafios e Soluções</h2>",
      "<p>O desenvolvimento da API não foi isento de desafios. Um dos principais obstáculos foi garantir que as integrações funcionassem de maneira eficiente entre sistemas tão diferentes. Por exemplo, a integração com o <b>Opa Suite</b> exigiu a criação de um fluxo personalizado para consultas de contratos e conexões de clientes, algo que a API nativa não suportava.</p>",
      "<p>Outro desafio foi garantir a segurança dos pagamentos processados via <b>Redecard</b>, especialmente com a criação de links de pagamento temporários. A implementação de <b>tokens válidos por 24 horas</b> trouxe uma camada adicional de segurança, garantindo que apenas os clientes autorizados tivessem acesso às condições especiais de pagamento.</p>",
      "<h2 class='text-2xl font-bold'>Impacto e Benefícios para o Grupo CedNet</h2>",
      "<p>A implementação da <strong>API de Integrações</strong> trouxe inúmeros benefícios para o <strong>Grupo CedNet</strong>. Entre os principais, destacam-se:</p>",
      `<ul class="list-disc ml-4">
            <li><strong>Eficiência Operacional:</strong> A centralização dos processos reduziu o tempo necessário para consultas, validações e processamento de pagamentos.</li>
            <li><strong>Segurança:</strong> Com a criação de tokens temporários e integrações seguras com a <strong>Redecard</strong>, os processos de pagamento se tornaram mais confiáveis.</li>
            <li><strong>Flexibilidade:</strong> A capacidade de personalizar condições de pagamento para clientes individuais, sem impactar os demais, trouxe uma vantagem significativa para a empresa.</li>
            <li><strong>Melhoria no Atendimento ao Cliente:</strong> A integração com o <strong>Opa Suite</strong> e a capacidade de realizar consultas detalhadas em tempo real melhoraram significativamente a qualidade do atendimento prestado pela central de atendimento.</li>
       </ul>`,
      "<h2 class='text-2xl font-bold'>Conclusão</h2>",
      "<p>A <b>API de Integrações do Grupo CedNet</b> é um exemplo de como soluções tecnológicas podem transformar a operação de uma empresa. Ao centralizar e otimizar processos críticos, como a gestão de contratos, atendimento ao cliente e processamento de pagamentos, a API permitiu que a empresa continuasse crescendo e inovando no setor de telecomunicações.</p>",
      "<p>Com uma arquitetura flexível e segura, a API não só atende às necessidades atuais do Grupo CedNet, como também oferece uma base sólida para futuras expansões e integrações com novos serviços.</p>",
    ],
  },
  {
    id: 2,
    image_banner: "mikrotik.svg",
    name: "Cednet Router: Gerenciamento Eficiente de Mikrotiks",
    slug: "cednet-router-gerenciamento-eficiente-mikrotiks",
    content: [
      "<h2 class='text-2xl font-bold'>Introdução</h2>",
      "<p>O <b>Cednet Router</b> é uma solução desenvolvida para facilitar o gerenciamento de dispositivos Mikrotik em redes de telecomunicações. Com uma arquitetura robusta e flexível, o sistema combina o backend em <b>Laravel</b> com o frontend em <b>Next.js</b>, proporcionando uma experiência intuitiva e completa para administradores e técnicos que precisam monitorar, configurar e otimizar redes complexas.</p>",
      "<h2 class='text-2xl font-bold'>Objetivo</h2>",
      ` <p>O <strong>Cednet Router</strong> foi criado com o objetivo de:</p>
        <ul class="list-disc ml-4">
            <li>Simplificar o gerenciamento de dispositivos <strong>Mikrotik</strong> em redes de grande escala.</li>
            <li>Permitir o controle completo de dispositivos conectados à rede, como celulares e computadores.</li>
            <li>Implementar filtros de conteúdo, bloqueios e limitação de banda, semelhante a soluções como <strong>Cisco OpenDNS</strong> e <strong>Lumian Box</strong>.</li>
            <li>Proporcionar uma interface moderna, intuitiva e acessível, com atualizações em tempo real sobre o <strong>status</strong> da rede.</li>
        </ul>`,
      "<h2 class='text-2xl font-bold'>Backend: Laravel</h2>",
      "<p>O <strong>backend</strong> do <strong>Cednet Router</strong> foi desenvolvido em <strong>Laravel</strong> e serve como o núcleo de gerenciamento de todos os dispositivos <strong>Mikrotik</strong>. A API Laravel utiliza a <strong>RouterOS API PHP Class</strong> para se conectar aos dispositivos e executar comandos diretamente no sistema <strong>RouterOS</strong> dos <strong>Mikrotiks</strong>, possibilitando o controle total da rede.</p>",
      "<h4 class='text-xl font-bold'>Funcionalidades Principais</h4>",
      `<ol class="list-decimal ml-4 flex flex-col gap-4">
            <li><strong>Autenticação e Controle de Acesso:</strong>
                <ul class="list-disc ml-4">
                    <li>A API utiliza <strong>JWT (JSON Web Tokens)</strong> para gerenciar a autenticação e garantir segurança nas operações. Perfis de usuários diferenciados permitem o controle de permissões para cada função.</li>
                </ul>
            </li>
            <li><strong>Integração com <a href="https://routeros.com">RouterOS</a>:</strong>
                <ul class="list-disc ml-4">
                    <li>A <strong>RouterOS API PHP Class</strong> permite a execução de comandos diretamente nos dispositivos, incluindo criação e edição de filas de tráfego, ajustes em configurações de firewall, e monitoramento de status dos dispositivos.</li>
                </ul>
            </li>
            <li><strong>Gerenciamento de Dispositivos e Filtros de Conteúdo:</strong>
                <ul class="list-disc ml-4">
                    <li>Através da API, é possível configurar filtros de conteúdo, bloqueios e limitação de banda para cada dispositivo da rede, similar às soluções como <strong>OpenDNS</strong>. O backend também oferece ferramentas para gerenciar dispositivos como celulares e computadores conectados à rede <strong>Mikrotik</strong>.</li>
                </ul>
            </li>
            <li><strong>Monitoramento em Tempo Real e Histórico:</strong>
                <ul class="list-disc ml-4">
                    <li>O sistema coleta dados de uso de banda em tempo real, armazenando o histórico de cada sessão ativa para análise posterior. Cada vez que um dispositivo é desbloqueado ou criado, o uso de banda e outros dados são registrados.</li>
                </ul>
            </li>
            <li><strong>Relatórios e Logs:</strong>
                <ul class="list-disc ml-4">
                    <li>Logs de eventos e relatórios de uso da rede são gerados automaticamente, permitindo auditoria e identificação de possíveis problemas de rede.</li>
                </ul>
            </li>
        </ol>`,
      "<h2 class='text-2xl font-bold'>Benefícios</h2>",
      `<ul class="list-disc ml-4">
            <li><strong>Escalabilidade:</strong> O sistema foi projetado para gerenciar grandes volumes de dispositivos e conexões de forma eficiente.</li>
            <li><strong>Segurança e Eficiência:</strong> A API implementa criptografia de dados e controle de requisições para manter a rede segura e estável.</li>
            <li><strong>Flexibilidade:</strong> A comunicação direta com dispositivos <strong>Mikrotik</strong> oferece uma gestão em tempo real, adaptando-se facilmente às necessidades de cada rede.</li>
        </ul>`,
      "<h2 class='text-2xl font-bold'>Frontend: Next.js</h2>",
      "<p>O <strong>frontend</strong> do <strong>Cednet Router</strong> foi desenvolvido utilizando <strong>Next.js</strong>, garantindo uma interface simples e eficiente. Utilizando o <strong>ShadCN</strong> como framework de design, o <strong>frontend</strong> é totalmente responsivo, proporcionando uma experiência de navegação fluida tanto em dispositivos móveis quanto em desktops.</p>",
      "<h4 class='text-xl font-bold'>Integração e API Própria</h4>",
      "<p>O <strong>frontend</strong> interage tanto com a <strong>API Laravel</strong> quanto com suas próprias APIs internas, <strong>que são responsáveis</strong> por realizar tarefas específicas diretamente no <strong>frontend</strong>, sem sobrecarregar o <strong>backend</strong>. Isso inclui a atualização de dashboards e consultas rápidas de dados em tempo real.</p>",
      "<h4 class='text-xl font-bold'>Funcionalidades</h4>",
      `<ol class="list-decimal ml-4 flex flex-col gap-4">
            <li><strong>Painel de Controle do Cliente:</strong>
                <ul class="list-disc ml-4">
                    <li>Cada cliente tem um painel centralizado que exibe todos os dispositivos <strong>Mikrotik</strong> registrados, além do <strong>status</strong> da rede e logs de eventos recentes.</li>
                </ul>
            </li>
            <li><strong>Dashboard de Mikrotiks:</strong>
                <ul class="list-disc ml-4">
                    <li>Um painel específico para cada <strong>Mikrotik</strong>, com informações detalhadas sobre interfaces, filas de tráfego e dispositivos conectados à rede.</li>
                </ul>
            </li>
            <li><strong>Dashboard de Dispositivos:</strong>
                <ul class="list-disc ml-4">
                    <li>O sistema oferece um painel para cada dispositivo conectado, permitindo que administradores monitorem o uso de banda, <strong>status</strong> de conexão e apliquem limites de banda ou bloqueios.</li>
                </ul>
            </li>
            <li><strong>Gerenciamento de Dispositivos:</strong>
                <ul class="list-disc ml-4">
                    <li>Através do <strong>frontend</strong>, os administradores podem gerenciar todos os dispositivos conectados à rede, com a possibilidade de aplicar restrições e monitorar o uso em tempo real.</li>
                </ul>
            </li>
        </ol>`,
      "<h4 class='text-xl font-bold'>Benefícios</h4>",
      `<ul class="list-disc ml-4">
        <li><strong>Interface Responsiva:</strong> O <strong>frontend</strong> foi projetado para ser responsivo, garantindo uma experiência fluida em qualquer dispositivo.</li>
        <li><strong>Atualizações em Tempo Real:</strong> Utilizando mecanismos de atualização como <strong>WebSockets</strong>, o sistema atualiza dashboards automaticamente, proporcionando informações precisas sem a necessidade de recarregar a página.</li>
        <li><strong>Alto Desempenho:</strong> A arquitetura do <strong>Next.js</strong> otimiza o tempo de resposta da interface, garantindo uma experiência rápida e eficiente.</li>
       </ul>`,
      "<h2 class='text-2xl font-bold'>Conclusão</h2>",
      "<p>O <strong>Cednet Router</strong> é uma solução poderosa e escalável para o gerenciamento de redes <strong>Mikrotik</strong>, permitindo controle total sobre dispositivos conectados e tráfego de rede. A combinação do <strong>backend</strong> em <strong>Laravel</strong> com o frontend em <strong>Next.js</strong> oferece uma plataforma moderna e eficiente, ideal para provedores de internet e redes corporativas. Com funcionalidades como controle de banda, bloqueio de dispositivos e monitoramento em tempo real, o <strong>Cednet Router</strong> se destaca como uma ferramenta essencial para administradores de redes que buscam otimizar o desempenho e a segurança de suas operações.</p>",
    ],
  },
];
