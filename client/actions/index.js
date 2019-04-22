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

import {
    hideModal,
    showModal
} from './modal';

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
    hideModal,
    showModal,
    showPageLoading,
    hidePageLoading,
    signupUser,
    loginUser,
    logoutUser,
    unauthUser,
    eventsFetch,
    publishEvent
}