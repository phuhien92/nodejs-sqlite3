import Router from 'next/router';
import axios from 'axios';
import cookie from 'js-cookie';
import * as types from './actionTypes';

export const showPageLoading = () => ({ type: types.SHOW_PAGE_LOADING });
export const hidePageLoading = () => ({ type: types.HIDE_PAGE_LOADING });