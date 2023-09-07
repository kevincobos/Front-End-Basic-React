import React, { Component, useCallback, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';


class GetContentFromMarkdownFile1 extends Component {
    //state is used to store the text of the file
    state = {
        page: null
    };

    //Somenting to remember:
    //this.props.rawMDFileName is the prop that is passed from the parent component
    //in this case, the parent component is SplitPaneWindow.js
    //ComponentDidMount is a lifecycle method that is called after the component is rendered
    componentDidMount(){
        try{
            //fetch is using the rawMDFileName prop to get the file from the github repo
            //then it returns the text of the file
            //then it sets the state of the page to the text of the file
            fetch(this.props.rawMDFileName)
            .then((response) => {
                return response.text();
            })
            .then(page => {
                this.setState(                    
                    {page}                    
                );
            })
        }
        catch (e) {
            console.log(e);
        }
    } 

    //ReactMarkdown is a component that takes the text of the file and renders it as markdown
    //ReactMarkdown is imported from the react-markdown library, is used in the return statement
    //children is the prop that takes the text of the file
    render() {
        const { page } = this.state;
        return (    
            <div
                style={ 
                    {
                        width: '100%', 
                        alignContent: 'left',
                        textAlign: 'left'
                    }
                }>
                <ReactMarkdown 
                    children={page} 
                />
            </div>
        )
    }
}

export default GetContentFromMarkdownFile1;