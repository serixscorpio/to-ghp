// vue.config.js file to be place in the root of your repository
// make sure you update `yourProjectName` with the name of your GitHub project

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/to-ghp/'
    : '/'
}
