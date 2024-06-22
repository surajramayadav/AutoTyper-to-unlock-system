const data = {
    key1: true,
    key2: true,
    key3: false,
    key4: true,
}

for (let i = 0; i < 4; i++) {
    console.log(Object.keys(data)[i])
    if (!Object.values(data)[i]) {
        delete data[Object.keys(data)[i]]
    }

}
console.log(data)