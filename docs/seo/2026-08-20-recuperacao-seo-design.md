# Melhoria de SEO e recuperação de acesso — datadenamoro.com.br

**Data:** 2026-08-20
**Status:** Aprovado para planejamento de implementação

## Contexto e diagnóstico

O site datadenamoro.com.br (calculadora de tempo de namoro, React + Vite, deploy via GitHub + Vercel Hobby) apresentou uma queda de cliques e impressões no Search Console a partir de 16/06/2026, o que gerou a preocupação inicial de perda de posicionamento.

A análise do gráfico de 12 meses do Search Console mostrou que:

- O site foi lançado em agosto/2025 e teve um período natural de baixo tráfego e posição instável até o fim de 2025 (comportamento típico de site novo).
- O tráfego cresceu organicamente de fevereiro a maio/2026.
- Em junho/2026 houve um pico sazonal muito forte ligado ao Dia dos Namorados (12/06, data brasileira), com queda natural logo depois — esperado para uma ferramenta de "tempo juntos".
- Após a queda do pico, o patamar de cliques/impressões se estabilizou **acima** do patamar de fevereiro–maio/2026 — ou seja, não houve perda real de tração.
- A posição média ficou estável ao longo dos últimos 10+ meses, sem sinal de penalização.
- Confirmado no Search Console: nenhuma ação manual, e a única URL do site está indexada normalmente (1 página indexada, 0 não indexadas).

**Conclusão do diagnóstico:** não há penalização, erro técnico crítico ou perda real de ranking. O problema de fundo é estrutural: o site inteiro é uma única página React (SPA client-side, sem rotas), então só existe **uma URL indexável** competindo por todos os termos de busca relevantes (calculadora de namoro, bodas de casamento, ideias de presente, datas do amor, etc). Isso limita o potencial de crescimento orgânico e ainda causa alguma canibalização de palavra-chave dentro da própria página.

Gaps técnicos adicionais identificados na auditoria de código:
- Sem `sitemap.xml` e sem `robots.txt`.
- Sem dados estruturados (JSON-LD) — desperdiça o FAQ de 10 perguntas já existente, que é candidato natural a rich snippets.
- Sem tag canonical.
- Título e meta description fixos e genéricos (mesmos para qualquer estado da página).
- Banners de afiliados com imagens pesadas (`.png` de até ~2,5MB), possível impacto negativo em Core Web Vitals / velocidade no celular.
- Processo de deploy sem revisão: uma alteração de banner já apagou sem querer os códigos do Google Analytics e do Search Console, sinal de que mudanças de código não estão sendo conferidas antes de publicar.

## Objetivo

Aumentar o número de páginas indexáveis e a solidez técnica de SEO do site, para crescer o tráfego orgânico evergreen (fora do pico sazonal de junho), sem enfraquecer o conteúdo já existente na página inicial.

## Escopo

### Fase 1 — Ajustes técnicos rápidos (baixo risco, sem mudança de arquitetura)

- Criar `public/sitemap.xml` e `public/robots.txt`.
- Adicionar dados estruturados JSON-LD (`FAQPage`) no FAQ da home.
- Adicionar tag `<link rel="canonical">` no `index.html`.
- Comprimir/converter para `.webp` as imagens de banner mais pesadas (`bannerlingerie.png`, `bannerlivro.png`, `banneroleo.png`).
- Revisar título e meta description da home para refletir melhor o conteúdo após a reorganização da Fase 2.

### Fase 2 — Reestruturação em múltiplas páginas

Migrar de SPA de página única para múltiplas rotas usando `react-router-dom` (mantendo Vite + React + deploy GitHub/Vercel, sem trocar de stack).

Reorganização de conteúdo (nada é removido, apenas redistribuído):

- **Home (`/`)**: calculadora, introdução emocional, "como usar" e um FAQ enxuto com apenas as perguntas mais diretamente ligadas ao cálculo em si. Mantém volume de texto próprio e relevante — não fica "fraca".
- **`/bodas-de-casamento`**: conteúdo completo sobre bodas (lista de 1 a 75 anos, história, significado), com espaço para crescer mais no futuro (presente sugerido por boda, etc).
- **`/ideias-presente-namoro`**: ideias de comemoração por marco (1 mês até 50 anos) + perguntas do FAQ relacionadas a presentes/comemorações. Boa página para reforçar banners de afiliados.
- **`/dia-dos-namorados`**: conteúdo sazonal sempre-verde sobre a data no Brasil e no mundo, pensado para ser otimizado com antecedência a cada ano, reduzindo a dependência de um pico concentrado só na home.

Cada rota nova recebe título, meta description e JSON-LD próprios (schema `FAQPage` onde aplicável). Menu/rodapé passam a linkar entre as páginas. `sitemap.xml` passa a incluir as novas URLs.

### Fora de escopo (por agora)

- Migração para um framework com pré-renderização estática (Astro/Next.js) — pode ser considerada como evolução futura se o crescimento das novas páginas esbarrar nas limitações de indexação de conteúdo renderizado no cliente (CSR).
- Qualquer reintrodução de produto pago (página personalizada do casal) — fora do escopo deste projeto de SEO.

## Processo de implementação e deploy

- Claude edita os arquivos diretamente na pasta local do projeto (via ponte de dispositivo já conectada).
- Antes de qualquer alteração ir para o GitHub, um resumo claro do que mudou é apresentado à Amanda (não apenas "pronto, alterei").
- Build testado localmente (`pnpm run build` / `pnpm run preview`) antes de qualquer entrega.
- Amanda roda os comandos `git add` / `commit` / `push` no terminal dela mesma.
- Após cada deploy, validação conjunta no Search Console (Inspeção de URL) para confirmar que a nova página foi descoberta.

## Critérios de sucesso

- `sitemap.xml` e `robots.txt` publicados e reconhecidos pelo Search Console.
- FAQ da home com rich snippet elegível (JSON-LD validado sem erros).
- Redução mensurável do peso das imagens de banner (KB antes/depois).
- 4 URLs indexadas no Search Console (home + 3 páginas novas), sem erros de rastreamento.
- Crescimento de impressões/cliques em termos evergreen (fora do período de pico sazonal de junho) nos meses seguintes ao lançamento da Fase 2.

## Riscos e mitigação

- **Risco:** nova estrutura de rotas quebrar algo no build/deploy. **Mitigação:** testar build local antes de qualquer entrega, revisar diffs antes do push.
- **Risco:** conteúdo duplicado ou mal distribuído entre home e páginas novas. **Mitigação:** revisão de conteúdo por página nesta spec antes da implementação (feito acima).
- **Risco:** indexação das novas páginas demorar (renderização client-side). **Mitigação:** sitemap.xml + inspeção manual de URL no Search Console para acelerar descoberta; considerar SSG como Fase 3 se necessário.
