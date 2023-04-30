function addToCart(productName, price) {
    var cartTable = document.getElementById("warenkorb-tabelle");
    var totalPriceElement = document.getElementById("gesamtpreis");
    var newRow = cartTable.insertRow(-1);
    var productCell = newRow.insertCell(0);
    var priceCell = newRow.insertCell(1);
    var actionCell = newRow.insertCell(2);
    var totalPrice = parseInt(totalPriceElement.innerHTML);
    
    productCell.innerHTML = productName;
    priceCell.innerHTML = price + "€";
    actionCell.innerHTML = '<button onClick="removeFromCart(this, ' + price + ')">Löschen</button>';
    
    totalPrice += price;
    totalPriceElement.innerHTML = totalPrice + "€";
  }
  
  function removeFromCart(row, price) {
    var cartTable = document.getElementById("warenkorb-tabelle");
    var totalPriceElement = document.getElementById("gesamtpreis");
    var rowIndex = row.parentNode.parentNode.rowIndex;
    var totalPrice = parseInt(totalPriceElement.innerHTML);
    
    cartTable.deleteRow(rowIndex);
    totalPrice -= price;
    totalPriceElement.innerHTML = totalPrice + "€";
  }