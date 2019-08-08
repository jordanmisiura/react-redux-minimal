import { connect } from 'react-redux';
import MainComp from './maincomp';
import { enableTestMode, setData } from '../actions/testActions';

const HOST = 'http://localhost:9888';

const mapStateToProps = (state, ownProps) => {
    console.info("main comp map state to props: state: ",state,"  :  ownProps: ", ownProps);
    return {
        channels: state.test.data
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        testMode: (isEnabled) => {
            return dispatch(enableTestMode(isEnabled));
        },
        fetchData: () => dispatch(
            (dispatch, getState) => {//thunk
                fetch(HOST+"/api/allchannels")
                .then(response => response.json())
                .then((jsonChannelData) => {
                    let dataTest = [];
                    if (jsonChannelData.channels !== null && jsonChannelData.channels.length > 0) {
                        jsonChannelData.channels.forEach((channel) => {
                            dataTest.push(channel.name);
                        });
                    }
                    //console.info("data test: ", dataTest);
                    dispatch(setData(dataTest));
                });
            }//end of thunk
        )
    }
};

const MainCompContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComp);

module.exports = MainCompContainer;
