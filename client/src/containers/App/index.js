import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as actionCreators from '../App/actions';
import {makeSelectText, makeSelectLoginResponse, makeSelectLogin} from '../App/selectors';
import {compose} from 'redux';
import saga from './saga';
import injectSaga from '../../store/injectSaga';

class App extends React.Component {
    componentDidMount() {
        this.props.appAction();
    }

    render() {
        return (
            <div>
                SharedCount: {this.props.text}
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    text: makeSelectText(),
});

function mapDispatchToProps(dispatch) {
    return {
        appAction: () => dispatch(actionCreators.appAction()),
    };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({key: 'app', saga});

export default compose(
    withConnect,
    withSaga
)(App);
