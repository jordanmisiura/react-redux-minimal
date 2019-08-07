import { connect } from 'react-redux';
import MainComp from './maincomp';

const mapStateToProps = (state, ownProps) => {
    console.info("main comp map state to props: state: ",state,"  :  ownProps: ", ownProps);
    return {
  
    };
};

const mapDispatchToProps = () => ({});

const MainCompContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComp);

module.exports = MainCompContainer;
