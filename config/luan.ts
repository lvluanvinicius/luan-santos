const languages = [
  { id: 1, name: "PHP" },
  { id: 2, name: "CSS" },
  { id: 3, name: "HTML" },
  { id: 4, name: "ShellScript" },
  { id: 5, name: "Python" },
  { id: 6, name: "SQL" },
  { id: 7, name: "Javascript" },
];

const frameworks = [
  { id: 1, name: "Laravel" },
  { id: 1, name: "ReactJS" },
  { id: 1, name: "NextJS" },
  { id: 1, name: "MySQL" },
  { id: 1, name: "PostgreSQL" },
  { id: 1, name: "MongoDB" },
];

const others = [
  { id: 1, name: "Debian Server" },
  { id: 2, name: "Fedora Server" },
  { id: 3, name: "Ubuntu Server" },
  { id: 4, name: "WHM/CPanel" },
  { id: 5, name: "Docker" },
];

export const luanConfig = {
  name: "Luan V.P. Santos",
  subtitle: "Desenvolvimento de APIs e Aplicações Web Escaláveis",
  description:
    "Apaixonado por desenvolvimento backend e frontend, especialista em Next.js, React, PHP, Laravel e JavaScript.",
  skills: [
    {
      id: 1,
      type: "languages",
      content: [...languages],
    },
    {
      id: 2,
      type: "frameworks",
      content: [...frameworks],
    },
    {
      id: 3,
      type: "others",
      content: [...others],
    },
  ],
  profile: {
    image: "/uploads/luan.jpeg",
  },
  abount_me: [
    "<p>Olá! Sou Luan, um desenvolvedor full stack dedicado a transformar ideias em soluções tecnológicas robustas e escaláveis. Com formação em <b>Segurança da Informação pela FATEC Ourinhos</b>, desenvolvi uma sólida base de conhecimentos em <b>desenvolvimento web</b> e <b>infraestrutura de TI</b>. Minha paixão por criar produtos eficientes e funcionais me levou a dominar uma ampla gama de ferramentas, desde o frontend até o backend, garantindo sempre uma experiência fluida e otimizada para os usuários.</p>",
    "<p>Atualmente, atuo no <b>Grupo Cednet</b>, onde lidero o desenvolvimento de sistemas de gerenciamento para provedores de internet. Aqui, criei APIs integradas ao ERP, desenvolvendo soluções escaláveis que automatizam processos e facilitam o monitoramento de ativos com ferramentas como <b>Grafana</b> e <b>Zabbix</b>. Meu foco está em desenvolver sistemas que otimizem o desempenho, facilitem o gerenciamento de redes e melhorem a experiência do usuário final.</p>",
    "<p>Sou motivado por desafios e estou sempre em busca de novas tecnologias e oportunidades para melhorar minhas habilidades e criar soluções inovadoras. Além disso, acredito que a colaboração e o compartilhamento de conhecimento são fundamentais para o crescimento profissional.</p>",
  ],
  my_skills: {
    description:
      "No decorrer dos anos, tive a oportunidade de trabalhar com várias tecnologias, e aqui estão algumas das principais áreas em que atuo:",
    content: [
      {
        name: "Frontend Development:",
        content: [
          "<p><b>React & Next.js:</b> Criação de interfaces dinâmicas e interativas com React, focando em otimização de desempenho e uma experiência de usuário fluida. Utilizo Next.js para desenvolver aplicações server-side render e aplicações SPA com uma ótima performance.</p>",
          "<p><b>HTML5 & CSS3:</b> Desenvolvimento de interfaces modernas, responsivas e compatíveis com vários dispositivos, aplicando boas práticas de acessibilidade e SEO.</p>",
          "<p><b>JavaScript (ES6+):</b>Domínio das funcionalidades modernas do JavaScript, escrevendo código eficiente e claro, tanto no frontend quanto no backend.</p>",
        ],
      },
      {
        name: "Backend Development:",
        content: [
          "<p><b>PHP & Laravel:</b> Criação de APIs robustas e escaláveis, integradas com ERPs e outros sistemas, garantindo a segurança e o desempenho das aplicações.</p>",
          "<p><b>Node.js & Express:</b> Desenvolvimento de servidores e APIs de alto desempenho, focando na construção de aplicações RESTful e integração com serviços externos.</p>",
          "<p><b>Banco de Dados:</b> Experiência com MySQL, PostgreSQL e MongoDB, desde a modelagem de dados até a otimização de consultas para aplicações de grande escala.</p>",
        ],
      },
      {
        name: "DevOps & Infraestrutura:",
        content: [
          "<p><b>Docker:</b> Contêinerização de aplicações para garantir portabilidade e consistência no ambiente de desenvolvimento e produção.</p>",
          "<p><b>Monitoramento:</b> Implementação de soluções de monitoramento com Grafana e Zabbix para garantir o funcionamento e a disponibilidade contínua de sistemas e redes.</p>",
          "<p><b>CI/CD:</b> Configuração de pipelines de integração e entrega contínuas, otimizando o fluxo de desenvolvimento e deploy.</p>",
        ],
      },
      {
        name: "Ferramentas & Tecnologias Adicionais:",
        content: [
          "<p><b>Git & Versionamento de Código:</b> Experiência no uso do Git para controle de versões e colaboração em equipe, utilizando plataformas como GitHub e GitLab.</p>",
          "<p><b>Linux & Servidores:</b> Administração de servidores Linux (Debian, Ubuntu, Fedora), configuração de ambientes e implementação de soluções seguras e escaláveis.</p>",
          "<p><b>Automação:</b> Criação de scripts em Bash para automação de tarefas e processos, otimizando fluxos de trabalho e aumentando a produtividade.</p>",
        ],
      },
    ],
  },
};
