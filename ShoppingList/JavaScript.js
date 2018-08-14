
//var price = 1.25;
var price = [1, 2, 3];
var quantity = [0, 0, 0];

//var products = ["Coke", "Cheese", "Gum"];
function addItem(i) {

    quantity[i]++;
    var result = console.log(quantity);
    var total = quantity[0] + quantity[1] + quantity[2];
    var totalPrice = (quantity[0] * price[0]) + (quantity[1] * price[1]) + (quantity[2] * price[2]);
    document.getElementById("result").innerText = " Number of Items: " + total + "   Total Price = $" + totalPrice
}
