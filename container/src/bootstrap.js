import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

mountProducts(document.getElementById('products'));
mountCart(document.getElementById('cart'));