var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(string) {
  bestCustomer = string;
}

const leastFavoriteCustomer = 'blah';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'cheese';
}