const array: number[] = [1, 2, 3, 4, 5, 6];
const numberToCheck: number = 6;

const checkNumber = (num: number): Promise<number[]> => {
  return new Promise((resolve, reject) => {
    const rejectData = "Rejected";
    const delay = 2000;

    setTimeout(() => {
      if (num > 5) {
        resolve(array);
      } else {
        reject(rejectData);
      }
    }, delay);
  });
};

checkNumber(numberToCheck)
  .then((array) => {
    console.log(array);
  })
  .catch((error) => {
    console.error(error);
  });
