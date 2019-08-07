function testReducer(
    state = {
      enable: false
    }, action
  ) {
    const newState = { ...state };
    switch (action.type) {
      case 'TOGGLE_TEST':
        newState.enable = action.isEnable;
        return newState;
      default:
        return state;
    }
  }
  
  export default testReducer;