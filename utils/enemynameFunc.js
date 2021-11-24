// for name generation
const consArr = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
const vowArr = ['a', 'e', 'i', 'o', 'u', 'y']
const vowArrMath = [
    Math.floor(Math.random() * 10), Math.floor(Math.random() + 15), Math.floor(Math.random() + 17), Math.floor(Math.random() * 5)
]
const consArrMath = [
    Math.floor(Math.random() * 10), Math.floor(Math.random() + 15), Math.floor(Math.random() + 17), Math.floor(Math.random() * 5)
]

const enemyNameFunc = function (array) {
    let enemyName = ''

    for (let i = 0; i < 5; i++) {
        for (let i = 0; i < 5; i++) {

            if (i === 0 || i === 2 || i === 4) {
                enemyName += vowArr[Math.floor(Math.random() * vowArrMath.length)]
            }

            if (i === 1 || i === 3) {
                enemyName += consArr[Math.floor(Math.random() * consArrMath.length)]
            }

        }

        array.push(enemyName)
        enemyName = ''
    }

    console.log(array)
}

module.exports = enemyNameFunc