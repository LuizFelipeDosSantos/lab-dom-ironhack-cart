// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  //get the elements
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  
  //get the values
  const priceProduct = Number(price.innerText);
  const quantityProduct = quantity.value;
  const subtotalProduct = priceProduct * quantityProduct;

  subtotal.innerText = subtotalProduct;

  return subtotalProduct;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');
  const arrayProducts = [...products];
  //execute the updateSubtotal and calculate the total
  let totalValue = 0; 
  arrayProducts.forEach((prod) => { 
    totalValue += updateSubtotal(prod);
  });

  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value > span');
  total.innerText = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  //... your code goes here
  const tableRowProduct = target.parentElement.parentElement;
  const tbodyProducts = tableRowProduct.parentElement; 
  tbodyProducts.removeChild(tableRowProduct);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  //get the elements
  const createProductElements = document.querySelectorAll('.create-product input');
  const createProductNameElement = createProductElements[0]; //<input type="text" placeholder="Product Name" /> 
  const createProductPriceElement = createProductElements[1]; //<input type="number" min="0" value="0" placeholder="Product Price" />
  //get the values to the new product
  const productName = createProductNameElement.value;
  const productPrice = createProductPriceElement.value;

  //create the product element with the values
  const tbodyElement = document.querySelector('#cart tbody');
  const productElement = document.createElement('tr');
  productElement.className = "product";
  productElement.innerHTML = `<td class="name">
                                <span>${productName}</span>
                              </td>
                              <td class="price">$<span>${Number(productPrice).toFixed(2)}</span></td>
                              <td class="quantity">
                                <input type="number" value="0" min="0" placeholder="Quantity" />
                              </td>
                              <td class="subtotal">$<span>0</span></td>
                              <td class="action">
                                <button class="btn btn-remove">Remove</button>
                              </td>`;
  tbodyElement.appendChild(productElement);
  //button remove onclick
  const buttonRemove = productElement.querySelector('button');
  buttonRemove.addEventListener('click', removeProduct);

  //return to the default values
  createProductNameElement.value = '';
  createProductPriceElement.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  //button remove
  const removeButtons = document.getElementsByClassName('btn btn-remove');
  const arrayRemoveButtons = [...removeButtons];
  arrayRemoveButtons.forEach((button) => button.addEventListener('click', removeProduct))
  //button create product
  const createProductButton = document.getElementById('create');
  createProductButton.addEventListener('click', createProduct);
});
