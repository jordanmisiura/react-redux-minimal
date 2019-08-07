import { connect } from 'react-redux';
import MainComp from './maincomp';
import { enableTestMode } from '../actions/testActions';

const mapStateToProps = (state, ownProps) => {
    console.info("main comp map state to props: state: ",state,"  :  ownProps: ", ownProps);
    return {
  
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        testMode: (isEnabled) => {
            return dispatch(enableTestMode(isEnabled));
        }
    }
};

const MainCompContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComp);

module.exports = MainCompContainer;
