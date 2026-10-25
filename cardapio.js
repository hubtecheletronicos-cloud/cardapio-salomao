/* =====================================================================
   CARDÁPIO DIGITAL - PIZZARIA SALOMÃO - TIRADENTES  (ESBOÇO DE DEMONSTRAÇÃO)
   Este é o ÚNICO arquivo que você edita no dia a dia.

   COMO TROCAR UM PREÇO
   - Ache o item na lista LIST e mude o valor de p. Use PONTO:
     p: 49.9  vira  R$ 49,90.  Sem preço confirmado: p: null (mostra "Consultar valor").

   COMO ESCONDER UM ITEM (sem apagar)
   - Acrescente off: true no item. Para mostrar de novo, apague off: true.

   COMO MUDAR AS PROMOÇÕES
   - Edite os textos dentro de PROMOS. Cada texto entre aspas é uma linha na faixa amarela.
     Para não ter promoção, deixe PROMOS = [];

   COMO ADICIONAR UM ITEM
   - Copie uma linha inteira de LIST, cole logo abaixo, e troque id (único!),
     s (id da seção), nome, desc e p. Não esqueça a vírgula no final da linha.
   - kind: 'direct' = adiciona na hora | 'pizza' = pede a borda | 'obs' = pede observação/sabores.

   ATENÇÃO: os itens e dados abaixo são EXEMPLOS genéricos. Nenhum preço foi
   confirmado. Substitua pelo cardápio real da loja antes de publicar.
   ===================================================================== */

var WHATSAPP = '5500000000000';   // TROCAR: 55 + DDD + número, só dígitos
var TAXA_ENTREGA = null;          // número (ex.: 6) ou null = "a combinar"

var LOJA = {
  nome: 'Pizzaria Salomão',
  slogan: 'Tiradentes',
  boasVindas: 'Pizza quentinha, feita na hora. Monte seu pedido e envie pelo WhatsApp.',
  nota: null,                     // ex.: 4.8
  avaliacoes: null,               // ex.: 320
  horario: 'Horário: confirmar com a loja',
  entrega: 'Entrega: região a confirmar',
  endereco: 'Endereço: a confirmar',
  enderecoRetirada: '',
  telefone: '',
  rodape: [
    'Cardápio de demonstração. Preços e itens sujeitos a confirmação.',
    'Pedido finalizado pelo WhatsApp.'
  ]
};

var PROMOS = [
  'Promoção da semana: a confirmar com a loja',
  'Combos com desconto no pedido pelo cardápio digital'
];

var BORDAS = [
  { id: 'sem',       nome: 'Sem borda',         p: 0 },
  { id: 'catupiry',  nome: 'Borda de catupiry', p: null },
  { id: 'cheddar',   nome: 'Borda de cheddar',  p: null },
  { id: 'chocolate', nome: 'Borda de chocolate', p: null }
];

var CATS = [
  { id: 'todas',   nome: 'Todas' },
  { id: 'combos',  nome: 'Combos' },
  { id: 'pizzas',  nome: 'Pizzas' },
  { id: 'doces',   nome: 'Doces' },
  { id: 'bebidas', nome: 'Bebidas' }
];

var SECTIONS = [
  { id: 'combos',  cat: 'combos',  title: 'Combos',          note: 'Economia para a família toda.' },
  { id: 'salgadas', cat: 'pizzas', title: 'Pizzas salgadas', note: 'Informe o tamanho nas observações.' },
  { id: 'doces',   cat: 'doces',   title: 'Pizzas doces',    note: 'Para fechar com chave de ouro.' },
  { id: 'bebidas', cat: 'bebidas', title: 'Bebidas',         note: 'Gelada para acompanhar.' }
];

var LIST = [
  /* COMBOS */
  { id: 'combo1', s: 'combos', kind: 'obs', nome: 'Combo Pizza + Refrigerante', desc: 'Uma pizza à sua escolha com refrigerante para acompanhar. Diga o sabor e o tamanho.', p: null, tag: 'Mais pedido', hint: 'Sabor da pizza, tamanho e refrigerante' },
  { id: 'combo2', s: 'combos', kind: 'obs', nome: 'Combo Duas Pizzas', desc: 'Duas pizzas para dividir. Escolha os dois sabores.', p: null, hint: 'Sabores e tamanhos' },

  /* PIZZAS SALGADAS */
  { id: 'p_mussarela',  s: 'salgadas', kind: 'pizza', nome: 'Mussarela',  desc: 'Molho de tomate, mussarela derretida e orégano.', p: null, bordas: ['sem', 'catupiry', 'cheddar'] },
  { id: 'p_calabresa',  s: 'salgadas', kind: 'pizza', nome: 'Calabresa',  desc: 'Calabresa fatiada, cebola e mussarela.', p: null, tag: 'Clássica', bordas: ['sem', 'catupiry', 'cheddar'] },
  { id: 'p_portuguesa', s: 'salgadas', kind: 'pizza', nome: 'Portuguesa', desc: 'Presunto, ovos, cebola, azeitona e mussarela.', p: null, bordas: ['sem', 'catupiry', 'cheddar'] },
  { id: 'p_frango',     s: 'salgadas', kind: 'pizza', nome: 'Frango com catupiry', desc: 'Frango desfiado cremoso com catupiry.', p: null, bordas: ['sem', 'catupiry', 'cheddar'] },
  { id: 'p_marguerita', s: 'salgadas', kind: 'pizza', nome: 'Marguerita', desc: 'Mussarela, tomate fresco e manjericão.', p: null, bordas: ['sem', 'catupiry', 'cheddar'] },

  /* PIZZAS DOCES */
  { id: 'd_chocolate',  s: 'doces', kind: 'pizza', nome: 'Chocolate', desc: 'Chocolate cremoso sobre massa dourada.', p: null, bordas: ['sem', 'chocolate'] },
  { id: 'd_romeu',      s: 'doces', kind: 'pizza', nome: 'Romeu e Julieta', desc: 'Mussarela com goiabada.', p: null, bordas: ['sem', 'chocolate'] },

  /* BEBIDAS */
  { id: 'b_refri',  s: 'bebidas', kind: 'obs', nome: 'Refrigerante', desc: 'Informe o sabor e o tamanho.', p: null, hint: 'Sabor e tamanho' },
  { id: 'b_suco',   s: 'bebidas', kind: 'obs', nome: 'Suco',         desc: 'Informe o sabor.', p: null, hint: 'Sabor' },
  { id: 'b_agua',   s: 'bebidas', kind: 'direct', nome: 'Água mineral', desc: 'Garrafa individual.', p: null }
];
