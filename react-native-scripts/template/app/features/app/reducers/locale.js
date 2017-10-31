import { DEFAULT_LOCALE, LOCALE_KEY } from './../../../constants';

// action types
export const CHANGE_LOCALE_SUCCESS = 'LOCALE/CHANGE_LOCALE';

// action creators
export const changeLocaleSuccess = locale => ({
    type: CHANGE_LOCALE_SUCCESS,
    locale,
});

// thunks
export const changeLocale = locale => async dispatch => {
    dispatch(changeLocaleSuccess(locale));
};

// reducer
const initialState = DEFAULT_LOCALE;
export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOCALE_SUCCESS: {
            return action.locale;
        }
        default: {
            return state;
        }
    }
};
