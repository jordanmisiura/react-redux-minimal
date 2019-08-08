export function enableTestMode(isEnable = false) {
    return {
      type: 'TOGGLE_TEST',
      isEnable
    };
}

export function setData(data) {
    return {
      type: 'UPDATE_DATA',
      data
    };
}