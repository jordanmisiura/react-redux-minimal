function testReducer(
    state = {
      enable: false,
      data: []
    }, action
  ) {
    const newState = { ...state };
    switch (action.type) {
        case 'TOGGLE_TEST':
            newState.enable = action.isEnable;
            return newState;
        case 'UPDATE_DATA':
            newState.data = action.data;
            return newState;
        default:
            return state;
    }
  }
  
  export default testReducer;