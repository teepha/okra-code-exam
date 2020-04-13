/* eslint-disable no-shadow */
export const getToken = () => localStorage.getItem('token');
export const setToken = token => localStorage.setItem('token', token);
export const removeToken = () => localStorage.removeItem('token');
export const BASEURL = 'http://localhost:8080';

export const isLocalhost = () => Boolean(
  window.location.hostname === 'localhost'
      // [::1] is the IPv6 localhost address.
      || window.location.hostname === '[::1]'
      // 127.0.0.1/8 is considered localhost for IPv4.
      || window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
);

export const sumValue = (array, key, initial = 0) => {
  const total = array.reduce((total, amount) => Number(total) + Number(amount[key]), initial);
  return total;
};

export const formatValue = (value) => {
  const amount = parseFloat(value)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return amount;
};
