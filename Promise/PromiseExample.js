var array = [1, 2, 3, 4, 5, 6];
var numberToCheck = 6;
var checkNumber = function (num) {
    return new Promise(function (resolve, reject) {
        var resolveData = "Resolved";
        var rejectData = "Rejected";
        var delay = 2000;
        setTimeout(function () {
            if (num > 5) {
                resolve(resolveData);
            }
            else {
                reject(rejectData);
            }
        }, delay);
    });
};
checkNumber(numberToCheck)
    .then(function (message) {
    console.log(message);
})
    .catch(function (error) {
    console.error(error);
});
