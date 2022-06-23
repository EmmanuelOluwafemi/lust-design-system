module.exports = {
    "testEnvironment": "jsdom",
    roots: ['<rootDir>/src'],
    textRegex: '(/.*\\.test)\\.(ts|tsx)$',
    setupFilesAfterEvn: ['<rootDir>/jest.setup.ts']
}