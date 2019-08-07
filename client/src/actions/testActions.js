export function enableTestMode(isEnable = false) {
    return {
      type: 'TOGGLE_TEST',
      isEnable
    };
}