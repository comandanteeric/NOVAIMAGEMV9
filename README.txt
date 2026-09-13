NOVA IMAGEM ERP V9.1
====================

Esta revisão foi feita sobre a V9 já validada no Cloudflare.

PRINCIPAIS AJUSTES
- Exclusão de orçamentos reforçada para usuários GESTOR.
- PDF de orçamento redesenhado no padrão visual enviado: cabeçalho compacto, dados do cliente, resumo em tabela e condições.
- Estoque: código interno manual, código do fornecedor e geração/atribuição de código também pelo recebimento de ordem de compra.
- KPIs: filtros por período, vendedor ou LOJA TODA e impressão de relatório.
- Contas a pagar: status PENDENTE / PAGO / EM ATRASO, filtro por período/status, exclusão, totais geral/filtrado/pago/a pagar/em atraso e impressão.
- Fornecedores: exibição em linhas, CNPJ, contato, editar, nova ordem de compra e excluir.
- Ordem de compra: fornecedor, responsável, solicitante, data, tipo de material, detalhamento, código do fornecedor e quantidade.
- Recebimento de compra: NF, data, código interno, custo unitário e entrada automática no estoque.
- Duplicatas: número do documento, vencimento e valor; integração automática com Contas a Pagar.
- Usuários: permissões configuráveis por área do menu, edição de permissões e exclusão/desativação.

IMPORTANTE PARA PUBLICAR
- NÃO apague a pasta functions/ que já existe no repositório GitHub.
- Substitua apenas os arquivos da raiz desta pasta na branch v9.
- Mantenha o binding D1 DB e as Functions/API já existentes no Cloudflare.
- Teste a branch v9 antes de promover qualquer alteração para main.


V9.1 CONSOLIDADA - ESTOQUE E GESTÃO
- 35 combinações iniciais com 500 por item conforme lista definida.
- Código interno e código de fornecedor opcionais.
- Estoque mínimo, alertas e histórico de movimentações.
- Resumo do estoque: custo total e venda à vista total.
- Ajuste manual exige justificativa.
- Ordens de compra: AGUARDANDO RECEBIMENTO > RECEBIDA > FINALIZADA.
- Duplicatas precisam fechar com o total da NF antes de irem para Contas a Pagar.
- PDF do cliente não exibe percentuais de acréscimo/desconto; somente valores finais 18x, 4x e à vista.
