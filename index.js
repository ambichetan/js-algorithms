const start = Date.now();

const debounce = (fn, delay) => {
  let isDebounce;
  return function (...args) {
    const context = this;
    clearTimeout(isDebounce);
    isDebounce = setTimeout(() => fn.apply(context, args), delay);
  };
};

const fn = (i) => {
  console.log('called', i);
  const millis = Date.now() - start;
  console.log("seconds elapsed = " + Math.floor(millis / 1000));
};
const debounced = debounce(fn, 1000);
debounced(1);
debounced(2);
debounced(3);
setTimeout(debounced, 1000, 4);
