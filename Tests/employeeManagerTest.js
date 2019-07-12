var manager = {}

var testData = require('../TestAssets/array')
module.exports = {
    beforeEach: browser => {
        manager = browser.page.employeeManager(),
        manager.navigate()
        .pause(5000)
        .waitForElementVisible('@employeeLogo', '10000')
    },
    after: browser => {
        manager.end()
    },
    'It Can Add an Employee': browser => {
        testData.forEach(item => {
            manager.addEmployee(item)
        })
    },
}
