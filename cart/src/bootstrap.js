import faker from 'faker';

const mount = (el) => {
  const text = `<div>You have ${ faker.datatype.number() } items in your cart</div>`;
  el.innerHTML = text;
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-isolated-cart-app');
  el && mount(el);
}

export { mount };