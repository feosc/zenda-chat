# zenda-chat

Documentação do produto [Zenda](https://www.zenda.ai), hospedada com [Mintlify](https://mintlify.com).

## Conteúdo

Cobre apenas o que **já está no produto**:

- Playground, fontes, ações (leads, CTA, Shopify)
- Canais: widget, help page, WhatsApp Meta
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
3. Configure domínio customizado: `docs.zenda.ai` (CNAME no DNS).
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
- [ ] Conectar Mintlify e apontar `docs.zenda.ai`
- [ ] Adicionar screenshots nos guias
- [ ] Redirect de `zenda.ai/docs/whatsapp` → nova URL
- [ ] Guias para canais/ações quando saírem de "Em breve"

## Licença

Conteúdo © Zenda. Uso interno e público conforme política da empresa.
