import React from 'react';
// import { Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {
            currentPage: window.location.pathname,
        };
        this.handleHeaderClick = this.handleHeaderClick.bind(this);
    }

    handleHeaderClick(pathname){
        var state = { 'page_id': pathname };
        var title = pathname;
        var url = pathname;
        window.history.pushState(state, title, url);

        this.setState({ currentPage : pathname });
    }*/

    render() {
        // let currentPage = this.state.currentPage;

        // let page = <Homepage />;
        /*if (currentPage === '/' || currentPage === '/home') {
        }
        else if (currentPage === '/blog'){
            page = <Blog />;
        }
        else if (currentPage === '/portfolio'){
            page = <Portfolio />;
        }
        else if (currentPage === '/contact'){
            page = <Contact />;
        }
        else if (currentPage === '/getdata'){
            page = <GetData />;
        }*/

        return (
            <div className="App">
                <div className="content">
                    <Header
                        // currentPage={this.state.currentPage}
                        // handleHeaderClick={this.handleHeaderClick}
                    />
                    <div className="app-content">{this.props.children}</div>
                    <Footer
                        // currentPage={this.state.currentPage}
                        // handleHeaderClick={this.handleHeaderClick}
                    />
                </div>
            </div>
        );
    }
}

export default App;
