import React from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="content">
                    <Header />
                    <div className="app-content">{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default App;
