import React, { Component } from 'react';
import ListGroup from './common/listGroup';
import page1 from '../data/page1.txt';
import page2 from '../data/page2.txt';
import page3 from '../data/page3.txt';
import page4 from '../data/page4.txt';

class Pages extends Component {
    state = {
        pages: [
            { title: 'example.txt' },
            { title: 'page1.txt' },
            { title: 'page2.txt' },
            { title: 'page3.txt' },
            { title: 'page4.txt' },
        ],
        selection: "example.txt",
        code: ["example code"]
    }

    handlePageSelect = (selection) => {

        switch (selection) {
            case 'page1.txt':
                fetch(page1)
                    .then(r => r.text())
                    .then(text => {
                        this.setState({ pages: this.state.pages, selection: selection, code: text.split("\n") })
                    });
                break;
            case 'page2.txt':
                fetch(page2)
                    .then(r => r.text())
                    .then(text => {
                        this.setState({ pages: this.state.pages, selection: selection, code: text.split("\n") })
                    });
                break;
            case 'page3.txt':
                fetch(page3)
                    .then(r => r.text())
                    .then(text => {
                        this.setState({ pages: this.state.pages, selection: selection, code: text.split("\n") })
                    });
                break;
            case 'page4.txt':
                fetch(page4)
                    .then(r => r.text())
                    .then(text => {
                        this.setState({ pages: this.state.pages, selection: selection, code: text.split("\n") })
                    });
                break;
            default:
                this.setState({ pages: this.state.pages, selection: "example.txt", code: ["example code"] })
        }

        console.log(this.state.code);



    }

    render() {
        const currentPage = this.state.pages.find(element => {
            return element.title === this.state.selection;
        })



        return (
            <React.Fragment>
                <div style={{ marginTop: 50 }} />

                <div className="row">

                    <div className="col-2">
                        <ListGroup items={this.state.pages} onItemSelect={(selection) => this.handlePageSelect(selection)} />
                    </div>

                    <div className="col">
                        <h1>{currentPage.title}</h1>
                        {this.state.code.map(line => <h6 key={Math.random()}>{line}</h6>)}
                        {/* duplicate keys can be a problem  */}

                    </div>


                </div>


            </React.Fragment>



        );
    }
}

export default Pages;


