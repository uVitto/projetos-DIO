//CASOS DE USO DOS ITENS

// -> criar item com subtotal certo e validações simples
async function createItem(name, price = 0, quantity = 1) {
  const p = Number(price) || 0;
  const q = parseInt(quantity, 10) || 1;

  const item = {
    name: String(name),
    price: p >= 0 ? p : 0,
    quantity: q > 0 ? q : 1,
    subtotal() {
      return this.price * this.quantity;
    },
  };

  return item;
}

export default createItem;
