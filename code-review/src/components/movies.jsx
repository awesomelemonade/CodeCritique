import { CodeBlock, CopyBlock, nord } from 'react-code-blocks'
import React, { Component } from 'react';
import ListGroup from './common/listGroup';
import page1 from '../data/page1.txt';
import page2 from '../data/page2.txt';
import page3 from '../data/page3.txt';
import page4 from '../data/page4.txt';

class Pages extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        pages: [
            { title: 'example.txt', comment: '' },
            { title: 'page1.txt', comment: '' },
            { title: 'page2.txt', comment: '' },
            { title: 'page3.txt', comment: '' },
            { title: 'page4.txt', comment: '' },
        ],
        selection: "example.txt",
        code: ["example code"],
        comment: "example comment"
    }

    handlePageSelect = (selection) => {

        var page = this.state.pages.find(p => p.title === selection);

        switch (selection) {
            case 'page1.txt':
                fetch(page1)
                    .then(r => r.text())
                    .then(text => {
                        this.setState({ ...this.state, selection: selection, code: text.split("\n"), rawCode: text, comment: page.comment })
                    });
                break;
            case 'page2.txt':
                fetch(page2)
                    .then(r => r.text())
                    .then(text => {
                        this.setState({ ...this.state, selection: selection, code: text.split("\n"), rawCode: text, comment: page.comment })
                    });
                break;
            case 'page3.txt':
                fetch(page3)
                    .then(r => r.text())
                    .then(text => {
                        this.setState({ ...this.state, selection: selection, code: text.split("\n"), rawCode: text, comment: page.comment })
                    });
                break;
            case 'page4.txt':
                fetch(page4)
                    .then(r => r.text())
                    .then(text => {
                        this.setState({ ...this.state, selection: selection, code: text.split("\n"), rawCode: text, comment: page.comment })
                    });
                break;
            default:
                this.setState({ ...this.state, selection: "example.txt", code: ["example code"], rawCode: "example code", comment: "example comment" })
        }
    }

    handleCommentChange = event => {
        const input = event.target.value;
        this.setState({ ...this.state, pages: this.state.pages.map(p => (p.title === this.state.selection ? { ...p, comment: input } : p)), comment: input });
    }


    render() {
        const currentPage = this.state.pages.find(element => {
            return element.title === this.state.selection;
        })
        if (this.state.rawCode === undefined) {
            this.state.rawCode = "undefined";
        }
        return (
            <React.Fragment>
                <div style={{ marginTop: 50 }} />

                <div className="row">
                    <div className="col-2">
                        <ListGroup items={this.state.pages} selection={this.state.selection} onItemSelect={(selection) => this.handlePageSelect(selection)} />
                    </div>

                    <div className="col">
                        <h1>{currentPage.title}</h1>
                        {/*this.state.code.map(line => <h6 key={Math.random()}>{line}</h6>)*/}
                        {/* duplicate keys can be a problem  */}
                        <CopyBlock
                            text={this.state.rawCode}
                            theme={nord}
                            language="javascript"
                            wrapLines
                            codeBlock
                        />

                        <h2>COMMENTS:</h2>
                        <input type="text" style={{ width: "800px" }} value={this.state.comment} onChange={this.handleCommentChange}></input>
                        {/* <Comment />
                        <CommentInput comment={this.state.comment} /> */}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function Comment(props) {
    return (
        <div>
        </div>
    );
}

function CommentInput(props) {
    /*handleCommentChange = event => {
        const input = event.target.value;
        this.setState({ ...this.state, pages: this.state.pages.map(p => (p.title === this.state.selection ? { ...p, comment: input } : p)), comment: input });
    }*/
    return (
        <div>
            {/*<input type="text" style={{ width: "800px" }} value={this.state.comment} onChange={this.handleCommentChange}></input>*/}
            <input type="text" style={{ width: "800px" }} value={props.comment}></input>
        </div>
    );
}


export default Pages;


