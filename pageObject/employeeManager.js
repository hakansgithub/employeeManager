var manager = {
    addEmployee: function (edit) {
        this
            .waitForElementPresent('@searchEmployee', 20000)
            .click('@addEmployee')
            .api.acceptAlert()
        this
            .waitForElementPresent('@newEmployee')
            .click('@newEmployee')
            .waitForElementPresent('@searchresultTitle', 'New Employee')
            .clearValue('@nameField')
            .setValue('@nameField', edit.name)
            .clearValue('@phoneField')
            .setValue('@phoneField', edit.phone)
            .clearValue('@emailField')
            .setValue('@emailField', edit.email)
            .clearValue('@titleField')
            .setValue('@titleField', edit.title)
            .click('@saveButton')
        return this
    },

}


module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [manager],
    elements: {
        addEmployee: 'li[name="addEmployee"]',
        newEmployee: {
            selector: '//li[contains(., "New Employee")]',
            locateStrategy: 'xpath'
        },
        employeeLogo: '[class="titleText"]',
        searchEmployee: '[name="searchBox"]',
        clearSearch: '[name="clearSearch"]',
        employee1: 'li[name=employee6674]',
        cardTitle: '#employeeTitle',
        deleteButton: 'button[name="delete"]',
        cancelButton: 'button[name="cancel"]',
        searchresultTitle: '[name="employeeName"]',
        saveButton: '#saveBtn',
        nameField: 'input[name="nameEntry"]',
        phoneField: 'input[name="phoneEntry"]',
        emailField: 'input[name="emailEntry"]',
        titleField: 'input[name="titleEntry"]',

    },
}
