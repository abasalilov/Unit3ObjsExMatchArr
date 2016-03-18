var tools = ["computer", "books", "text editor"];

function countDown(arr, count) {
	    if (count === 0) {
        return "done"
    } else if (count === undefined) {
        count = arr.length ;
    }
    console.log(arr[(arr.length - count)]);

    return countDown(arr, count -= 1);
}

countDown(tools)
