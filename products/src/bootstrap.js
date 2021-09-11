import faker from 'faker';

const mount = (el) => {
  const products = Array(10).fill()
    .map(() => `<div>${faker.commerce.productName()}</div>`)
    .join('');

  el.innerHTML = products;
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-isolated-products-app');
  el && mount(el);
}

export { mount };