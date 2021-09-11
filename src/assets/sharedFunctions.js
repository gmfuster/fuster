//For future common functions, use a service in the app shared folder instead.
var getRandom1ToN = (n) => {
    return Math.floor(Math.random() * n) + 1
}

export {getRandom1ToN};


