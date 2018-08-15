const axios = require('axios');
const urlRegex  = require('url-regex');

const preservedUrls = [
    'login',
    'logout',
    'signup',
    'reset-password',
    'resetpassword',
    'url-password',
    'settings',
    'stats',
    'verify',
    'api',
    '404',
    'static',
    'images',
];

exports.preservedUrls = preservedUrls;