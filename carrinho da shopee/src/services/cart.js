//quais açoes meu carrinho pode fazer

function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

//CASOS DE USO
// ✅ -> adicionar item no carrinho (mescla itens com mesmo nome)
async function addItem(userCart, item) {
  if (!item || !item.name) return;

  const index = userCart.findIndex((p) => p.name === item.name);
  if (index !== -1) {
    // mescla quantidades quando já existe
    userCart[index].quantity += item.quantity;
    return;
  }

  userCart.push(item);
}

// ✅ -> calcular o total do carrinho (retorna número)
async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log('\nShopee Cart TOTAL IS: ' + formatCurrency(result));
  return result;
}

// -> deletar item do carrinho por nome
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// -> ✅ remover um item - diminui um item
async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if (indexFound == -1) {
    console.log('item não encontrado');
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

// -> atualizar quantidade de um item (set)
async function updateItem(userCart, name, quantity) {
  const index = userCart.findIndex((i) => i.name === name);
  if (index === -1) return false;

  if (quantity <= 0) {
    userCart.splice(index, 1);
    return true;
  }

  userCart[index].quantity = quantity;
  return true;
}

// -> limpar carrinho
async function clearCart(userCart) {
  userCart.splice(0, userCart.length);
}

// ✅ mostra todos os items do carrinho
async function displaycart(userCart) {
  console.log('\nShopee cart list:');
  if (!userCart.length) {
    console.log('(carrinho vazio)');
    return;
  }

  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - ${formatCurrency(item.price)} | ${item.quantity}x | Subtotal = ${formatCurrency(
        item.subtotal()
      )}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displaycart, updateItem, clearCart };
