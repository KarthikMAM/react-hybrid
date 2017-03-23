import { actions, store } from 'state';
import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    onClickHandler(e) {
        store.dispatch(actions.toggleHello());
    }

    render() {
        return <h1 onClick={this.onClickHandler.bind(this)}> {this.props.hello} World!! </h1>;
    }
}

console.log(store);

function renderer() {
    ReactDOM.render(
        <HelloWorld store={store} hello={store.getState()} />,
        document.getElementById('root')
    )
}

renderer();
store.subscribe(renderer);