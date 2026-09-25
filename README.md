# zenda-chat

Documentação do produto [Zenda](https://zendachat.com), em [docs.zendachat.com](https://docs.zendachat.com), hospedada com [Mintlify](https://mintlify.com).

## Conteúdo

Cobre apenas o que **já está no produto**:

- Playground, fontes, ações (leads, CTA, Nuvemshop)
- Canais: widget, Nuvemshop (mesmo balão), help page, WhatsApp Meta
- Em breve no dashboard: Instagram (Publicar) e Agendamento (Ações)
- Activity, analytics, configurações, plano e workspace

## Desenvolvimento local

```bash
pnpm install   # ou npm install
pnpm dev       # abre em http://localhost:3000
```

Requer Node.js 18+.

## Deploy (Mintlify)

1. Crie repositório no GitHub e envie este projeto.
2. Em [mintlify.com](https://mintlify.com) → **New docs** → conecte o repo.
3. Domínio público: `https://docs.zendachat.com`.
4. Cada push na branch `main` publica automaticamente.

## Estrutura

```
docs.json              # navegação e tema
introduction.mdx       # landing da doc
primeiros-passos.mdx
guias/                 # guias por área do dashboard
logo/                  # logo e favicon
```

## Próximos passos

- [ ] Criar repo `zenda-chat` no GitHub e fazer push
- [ ] Adicionar screenshots nos guias
- [ ] Guia de Instagram e de Agendamento quando saírem de "Em breve"

## Licença

Conteúdo © Zenda. Uso interno e público conforme política da empresa.
