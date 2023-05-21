const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];

function addToBasket(productId) {
    let a = products.find(el => el.id === productId);

    let found = order.find(el => el.id === productId);
    if (found) {
        alert('Товар уже добавлен в корзину');
    } else {
        order.push(a);
        console.log(order)
    }
    renderCart()
    rerenderTotalPrice()
}

function removeFromBasket(productId) {
    order = order.filter(el => el.id !== productId)
    renderCart()
    rerenderTotalPrice()
}

function rerenderTotalPrice() {
    document.getElementById('total').innerText = order
        .reduce((acc, item) => acc + item.price, 0);
}

function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach(el => {
        const li = document.createElement('li');
        li.innerText = el.title;
        li.onclick = () => removeFromBasket(el.id);
        cart.appendChild(li);
    })

}