const shopper = {
	name: 'Human Shopper',
	money: 95,
	isShopping: true,
	addGrocery: (item, price, quantity) => {
		groceryCart.push({ itemName: item, itemPrice: price, itemQuantity: quantity });
	},
	buyGroceries: function() {
		let money = this.money;
		let totalPrice = 0;
		for (let i = 0; i < groceryCart.length; i++) {
			totalPrice += groceryCart[i].itemPrice;
		}
		if (money > totalPrice) {
			this.money = money;
			money -= totalPrice;
			console.log(
				'You purchased your items totaling ' +
					totalPrice +
					' dollars. You have ' +
					this.money +
					' dollars left!'
			);
		} else {
			console.log('Insufficient funds');
		}
	}
};

const groceryCart = new Array();

const displayCart = () => {
	console.log('The current contents of your shopping cart are: ');
	for (let i = 0; i < groceryCart.length; i++) {
		console.log(groceryCart[i].itemName);
	}
};

const cartPrice = () => {
	let totalCost = 0;
	for (let i = 0; i < groceryCart.length; i++) {
		totalCost += groceryCart[i].itemPrice;
	}
	console.log('The current total price of your shopping cart is: ' + totalCost + ' dollars.');
};

shopper.addGrocery('Apples', 2, 5);
shopper.addGrocery('Bananas', 1, 4);
shopper.addGrocery('Alcohol', 1, 4);

displayCart();

cartPrice();

shopper.buyGroceries();
