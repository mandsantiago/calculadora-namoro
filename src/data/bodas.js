// Lista completa de bodas de casamento (1 a 75 anos), usada tanto pela calculadora
// quanto pela página de conteúdo /bodas-de-casamento.
export const bodasPorAno = {
  1: 'Bodas de Papel',
  2: 'Bodas de Algodão',
  3: 'Bodas de Trigo',
  4: 'Bodas de Linho',
  5: 'Bodas de Madeira ou Ferro',
  6: 'Bodas de Perfume ou Açúcar',
  7: 'Bodas de Latão ou Lã',
  8: 'Bodas de Papoula ou Barro',
  9: 'Bodas de Cerâmica ou Vime',
  10: 'Bodas de Estanho',
  11: 'Bodas de Aço',
  12: 'Bodas de Seda ou Ônix',
  13: 'Bodas de Linho ou Renda',
  14: 'Bodas de Marfim',
  15: 'Bodas de Cristal',
  16: 'Bodas de Turmalina',
  17: 'Bodas de Rosa',
  18: 'Bodas de Turquesa',
  19: 'Bodas de Cretone ou Água-marinha',
  20: 'Bodas de Porcelana',
  21: 'Bodas de Zircão',
  22: 'Bodas de Louça',
  23: 'Bodas de Palha',
  24: 'Bodas de Opala',
  25: 'Bodas de Prata',
  30: 'Bodas de Pérola',
  35: 'Bodas de Coral',
  40: 'Bodas de Esmeralda',
  45: 'Bodas de Rubi',
  50: 'Bodas de Ouro',
  55: 'Bodas de Ametista',
  60: 'Bodas de Diamante',
  65: 'Bodas de Platina',
  70: 'Bodas de Vinho',
  75: 'Bodas de Brilhante',
}

export const getBodaAtual = (anos) => {
  return bodasPorAno[anos] || (anos > 0 ? `${anos} anos de união` : 'Início da jornada')
}

// Subconjunto usado na tabela em destaque da página de bodas (as mais conhecidas/comemoradas)
export const bodasPrincipais = [1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 75].map((ano) => ({
  ano,
  nome: bodasPorAno[ano],
}))
