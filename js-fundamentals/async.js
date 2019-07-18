console.log('a');

const fakeAsyncPromiseService = (data) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data);
  }, 2000);
});

const fakeAsyncCbService = (data, cb) => {
  setTimeout(() => {
    cb(data);
  }, 3000);
};

// call back;
const test1 = (data, cb) => {
  fakeAsyncCbService(data, cb);
};

test1('cb', (data) => {
  console.log(data);
});

// promise
const test2 = (data) => {
  return fakeAsyncPromiseService(data);
};

test2('promise').then((data) => {
  console.log(data);
});

// async/await
const fakeAsync3 = async (data) => {
  const promise = await fakeAsyncPromiseService(data);
  await fakeAsyncPromiseService(data);
  await fakeAsyncPromiseService(data);
  return promise;
};

fakeAsync3('async').then((data) => {
  console.log(data);
});

console.log('b');
