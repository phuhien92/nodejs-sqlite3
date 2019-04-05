const routes = require('next-routes')

module.exports = routes()
    .add('dashboard','/dashboard','dashboard')
    .add('events','/events')
    .add('createEvent','/events/create','events/create')
    .add('eventEdit','/e/:id/edit','events/edit')

    // profile or account
    .add('account', '/account', 'account')

    