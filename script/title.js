let string = "> iris";
let up = true;
let count = 0;

setInterval(() => {
    if (count == string.length) {
        up = false
    } else if (count == 1) {
        up = true
    }

    count = up ? ++count : --count
    document.title = string.slice(0, count)
}, 250)
