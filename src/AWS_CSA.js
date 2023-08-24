import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';


class  AWS_CSA extends Component {
    
    state = {
        page: null
    };
    
    componentDidMount() {
        try{
            fetch('https://raw.githubusercontent.com/kevincobos/front-end-basic-react/main/README.md')
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
    render() {
        const { page } = this.state;
        console.log(page);
        return (
            <div className="content" style={{textAlign: 'left'}}>
            <ReactMarkdown children={page} />
            </div>
            
        )
    }
}
export default AWS_CSA;