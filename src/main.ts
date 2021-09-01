import { Messaging } from './dip/services/messaging';
import { Persistent } from './dip/services/persistent';
import { ShoppingCart } from './dip/entities/classes/shopping-cart';
import { Order } from './dip/entities/classes/order';
import { NoDiscount } from './dip/entities/classes/discount';
import { EntrerpriseCustomer } from './dip/entities/classes/custumer';

const noDiscount = new NoDiscount();
const company = new EntrerpriseCustomer('Letras', '0000.000-0001');
const shopp = new ShoppingCart(noDiscount);
const message = new Messaging();
const persistent = new Persistent();

const order = new Order(shopp, message, persistent, company);

shopp.additem({ name: 'Caderno', price: 80 });
shopp.additem({ name: 'Livro', price: 10 });
shopp.additem({ name: 'Lapis', price: 10 });

order.checkout();
