const array: number[] = [1, 2, 3, 4, 5, 6];
const numberToCheck: number = 6;

const checkNumber = (num: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    const resolveData = "Resolved";
    const rejectData = "Rejected";
    const delay = 2000;

    setTimeout(() => {
      if (num > 5) {
        resolve(resolveData);
      } else {
        reject(rejectData);
      }
    }, delay);
  });
};

checkNumber(numberToCheck)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
