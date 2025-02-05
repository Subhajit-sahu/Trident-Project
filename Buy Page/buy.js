document.getElementById("buy-button").addEventListener("click", function() {
    let confirmPurchase = confirm("Are you sure you want to buy this machine?");
    if (confirmPurchase) {
        alert("🎉 Thank you for your purchase! Your order has been placed. 🚀");
    } else {
        alert("No worries! Let us know if you need more details. 😊");
    }
});
