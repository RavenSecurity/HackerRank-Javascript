arr = [93, 93, 69, 69, 69, 7]
const count = []

for(let i = 0; i < arr.length; i++) {
    (count.push(arr.filter(x => x==arr[i]).length-1))
}

console.log(count)

// WTF I don't even understand the problem