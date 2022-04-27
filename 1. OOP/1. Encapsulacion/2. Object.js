const product = {
    price: 2000,
    discount: 15,
    quantity: 10,
    totalPrice: function () {
        let total = ((this.price * this.discount) / 100) * this.quantity;
        console.log(total);
    }
};

product.totalPrice();