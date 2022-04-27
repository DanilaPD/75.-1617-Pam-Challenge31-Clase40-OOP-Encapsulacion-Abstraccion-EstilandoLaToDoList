const price = 2000;
const discount = 15;
const quantity = 10;

const totalPrice = (price, discount, quantity) => {
    let total = ((price * discount) / 100) * quantity;
    console.log(total);
};

totalPrice(price, discount, quantity);