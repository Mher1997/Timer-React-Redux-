export const CHANGE_INTERVAL = 'CHANGE_INTERVAL';
export const CHANGE_BUTTON = 'CHANGE_BUTTON';

// action creators
export const changeInterval = value => ({
  type: CHANGE_INTERVAL,
  payload: value,
})

export const changeButton = value => ({
  type: CHANGE_BUTTON,
  payload: value,
})