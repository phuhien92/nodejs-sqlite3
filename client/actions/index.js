import {
    signupUser,
    loginUser,
    logoutUser,
    unauthUser
} from './auth';

import {
    showPageLoading,
    hidePageLoading
} from './loading';

import {
    eventsFetch,
    publishEvent
} from './event';

const readEntity = (entityName, id) => ({
    type: `REQUEST_READ_${entityName.toUpperCase()}`,
    urlParams: { entityName, id },
    meta: {
        identifier: id,
        entityName
    }
})

export {
    readEntity,

    showPageLoading,
    hidePageLoading,
    signupUser,
    loginUser,
    logoutUser,
    unauthUser,
    eventsFetch,
    publishEvent
}