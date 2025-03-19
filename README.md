O projeto explora como o `@ts-react/form` simplifica a criação de formulários em TypeScript, eliminando grande parte do código repetitivo normalmente necessário ao utilizar Zod e React Hook Form, sem sacrificar a personalização.

## Tecnologias Utilizadas

- [Next.js 15](https://nextjs.org/) com [Turbopack](https://turbo.build/pack)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/) para componentes reutilizáveis
- [@ts-react/form](https://react-ts-form.com/lander) para geração de formulários
- [Zod](https://zod.dev/) para validação de esquemas
- [React Hook Form](https://react-hook-form.com/) para gerenciamento de estado do formulário

## Instalação

```bash
# Clone o repositório
...

# Entre na pasta do projeto:
cd next-react-ts-form

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev
```

O projeto estará disponível em http://localhost:3000.

## Estrutura do Projeto

```
/
├── 📁 app/                    # Diretório de rotas do Next.js
│   ├── 📁 contact             # Roteamente (app router)
|   │   ├── ⚛ contact.tsx      # Página de contato com formulário
│   ├── ⚛ page.tsx            # Page home
│   ├── ⚛ layout.tsx          # layout global
│   ├── globals.css         # Estilos globais
├── components/             # Componentes reutilizáveis
│   ├── forms/              # Formulários específicos
│   ├── ui/                 # Componentes de UI (Shadcn)
│   ├── ⚛ inputs.tsx          # Campos de entrada personalizados
│   └── ⚛ textfield.tsx       # Componente de formulário principal
├── lib/                    # Utilitários e funções auxiliares
├── public/                 # Arquivos estáticos
└── schemas/                # Esquemas Zod para validação
```


## Vantagens

- **Tipagem Automática**: Os valores do formulário são tipados automaticamente com base no esquema Zod
- **Menos Código Repetitivo**: Reduz significativamente a quantidade de código para criar formulários
- **Personalização**: Mantém a flexibilidade para personalizar a aparência e comportamento dos campos
- **Validação Integrada**: Validação de formulário robusta com mensagens de erro personalizáveis

## Recursos Adicionais
- [Documentação do ts-react/form](https://react-ts-form.com/lander)
- [Exemplos do ts-react-form](https://github.com/iway1/react-ts-form/blob/main/field-examples.md)
- [Guithub ts-react/form](https://github.com/iway1/react-ts-form)
- [Guia do Zod](https://zod.dev/)
- [Documentação do Next.js](https://nextjs.org/docs)
- [Shadcn UI](https://ui.shadcn.com/)

## Scripts

- `npm run dev` - Inicia o servidor de desenvolvimento com Turbopack
- `npm run build` - Constrói o aplicativo para produção
- `npm run start` - Inicia o aplicativo construído
- `npm run lint` - Executa verificação de lint no código


Projeto desenvolvido para fins educacionais para explorar o uso do `@ts-react/form` com Next.js 15.