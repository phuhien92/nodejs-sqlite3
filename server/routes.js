const routes = require('next-routes')

module.exports = routes()
    .add('event_types/edit','/event_types/edit/:id')
    .add('event_types/event', '/event_types/:id')