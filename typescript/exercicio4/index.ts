let dominio: number[] = [5, 12, 36, 8, 7, 1, 85, 45];
let listaValores: number[] = [
  7, 9, 13, 26, 1, 14, 85, 12, 23, 45, 58, 47, 33, 14, 2, 4,
];

const compara = (a: number[], b: number[]) => {
  let emComum = a.filter((itemLista) => b.includes(itemLista));
  emComum.sort((a, b) => a - b);
  console.log(emComum);
  return emComum;
};

compara(dominio, listaValores);

