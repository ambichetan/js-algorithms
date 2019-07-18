// FUCKEDUP

// don't do backtracking when you need to validate something? only use back tracking 
// when to explore all options? FFT - food for thought

const validIPAddresses = (ip) => {
  //validate

  //call helper
  const result = [];
  getValidIp(ip, 4, 0, '', result);
  //return
  return result;
};

const getValidIp = (ip, dots, index, processedIp, result) => {
  // base case
  if (dots === 0) {
    result.push(processedIp);
  } else {
    for (let i = 1; i <= 3; i++) {
      const subIp = ip.substr(index, dots === 1 ? ip.length - 1 : i);
      if (isValidIp(subIp)) {
        processedIp = processedIp + subIp + (dots === 1 ? '' : '.');
        getValidIp(ip, dots - 1, index + (dots === 1 ? ip.length - 1 : i), processedIp, result);
      }
    }
  }
};

const isValidIp = (string) => {
  const number = Number(string);
  return number >= 1 && number <= 255;
};

console.log(validIPAddresses('19216811'));
