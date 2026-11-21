# FIAP Pos-Tech - Fase 4 (Mobile) - Tech Challenge

A seção expo-mobile desse projeto foi desenvolvida para a Tech Challenge da Fase 4 - Mobile, permitindo que o programa também seja utilizado em dispositivos Android.

A aplicação foi desenvolvida em React e utiliza a API REST criada nas fases anteriores do projeto.


## Funcionalidades

- Listagem e visualização individual de posts
- Criação, edição e exclusão de posts x
- Busca de posts por título, conteúdo e autor x
- Login de alunos e professores x
- Persistência da autenticação no navegador x
- Layout responsivo para desktop e dispositivos móveis
- Integração com API REST x

Tecnologias utilizadas

- React
- JavaScript
- Typescript
- React Router DOM
- Axios
- CSS
- Docker
- Git
- GitHub Actions
- Firebase


## Arquitetura Mobile 

A seção mobile foi organizada separando páginas, componentes reutilizáveis e gerenciamento de autenticação.

```text
expo-mobile
├── routes/
│   ├── app.routes.tsx
│   └── index.tsx
└── src/
    ├── app/screens/
    │   ├── Home/
    │   │   └── index.tsx
    │   └── Login/
    │       └── index.tsx
    ├── components/
    │   └── shared/
    │       └── Header.tsx
    └── config/
        └── firebase.ts
```


## Autenticação Mobile

Credenciais de E-mail e Senha de exemplo foram criados para demonstração nessa fase.

Credenciais de demonstração:

```text
E-Mail: emailexemplo@email.com
Senha: SenhaExemplo
```

O estado de autenticação é gerenciado utilizando getReactNativePersistence do serviço de autenticação do Firebase, permitindo manter a sessão após a atualização da página.


## Integração com o backend

A integração com o backend foi, infelizmente, inviável. Os serviços do Firebase não foram funcionais coo foi demonstrado em aula, portanto foi impossível utilizar grande parte deles.


## Executando localmente 

### Pré-requisitos

- Node.js 22
- npm
- Aplicativo Expo Go (seja em um dispositivo Android ou emulador)

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Nat250/fiap-fullstack-techchallenge-fase4-Tentativa-Final-2.git
cd fiap-fullstack-techchallenge-fase4-Tentativa-Final-2
npm install
```

Execute o projeto:

```bash
npm run dev
```

Em outra tela cmd, execute os comandos:

```bash
cd fiap-fullstack-techchallenge-fase4-Tentativa-Final-2
cd expo-mobile
npx expo run
```

Com isso, ou siga o link ou faça um scan do QR code após o comando.


## Decisões técnicas

O projeto utiliza componentes funcionais e Hooks do React, incluindo `useState` e `useEffect`.

O **Firebase** é responsável pela navegação entre páginas e pelas rotas da aplicação e gerencia o estado global relacionado à autenticação.


## Desafios encontrados

Fora dificuldades de tempo devido a problemas fora do curso, praticamente todas as dificuldades do projeto estão relacionadas com o uso do Firebase como foi ensinado nas aulas. 

Foi funcionalmente impossível gerar uma forma de navegação e comunicação através de API com o Firebase, também como comunicação com a database e o backend da fase anterior. O projeto da fase teve que ser refeito várias vezes, apenas a última sendo funcional depois de recriar tudo do zero em pânico.

Tentativas de resolução de dúvidas com colegas também foi inviável, como todos ou sugeriram perguntar a solução a uma Inteligência Artificial, ou fizeram perguntas a uma IA ao invés de dar uma sugestão própria. O projeto enviado com atraso foi o mais bem desenvolvido em curto prazo.


## Autores

**Johannes Mattheus Krouwel - RM 372727**