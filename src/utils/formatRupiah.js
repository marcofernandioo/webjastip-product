const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'IDR' });
export default (amount) => {
  let res = formatter.format(amount).split('IDR');
  res = res.slice(1);
  return `Rp.${res}`;
};