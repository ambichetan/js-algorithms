const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    const context = this;
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
};

const fn = function (data) { console.log(this.data || data) };
const debounceFn = debounce(fn, 100);

debounceFn(1);
debounceFn(2);
debounceFn(3);

const obj = {
  data: 4,
  debounceFn: debounce(fn, 100)
};

obj.debounceFn();
obj.debounceFn();
obj.debounceFn();
obj.debounceFn();
