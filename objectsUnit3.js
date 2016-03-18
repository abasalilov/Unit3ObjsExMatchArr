var carObj = {
    make: "Telsa",
    model: "newest",
    year: "newest"
};

var carKeys = ['make', 'model', 'year'];

function getCarKeys(obj, arr) {

var carKeys2 = Object.keys(obj);
    for(var i =0; i < arr.length; i++) {
        if(carKeys2.indexOf(arr[i]) === -1) {
            return false
        }
    }
    return true;
}

getCarKeys(carObj, carKeys);
