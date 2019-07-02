import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const makeSelectText = () => createSelector(
    selectGlobal,
    global => global.text
);

export {
    makeSelectText,
};
