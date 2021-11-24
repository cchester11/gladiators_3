

module.exports = enemyNameFunc = function () {
    for (let i = 0; i < 5; i++) {
        for (let i = 0; i < 5; i++) {

            if (i === 0 || i === 2 || i === 4) {
                enemyName += vowArr[Math.floor(Math.random() * vowArrMath.length)]
            }

            if (i === 1 || i === 3) {
                enemyName += consArr[Math.floor(Math.random() * consArrMath.length)]
            }

        }

        enemyNames.push(enemyName)
        enemyName = ''
    }

    console.log(enemyNames)
}