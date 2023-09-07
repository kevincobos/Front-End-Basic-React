import ReactMarkdown from 'react-markdown';

function SplitPaneSelectedContent(props) {

    return (
        console.log(props.splitPaneSelectedContent),
        <div
            style={{
                border: 'solid',
                borderRadius: 15,
                marginLeft: 100,
                marginTop: 50,
                width: 500,
            }}>
            <ReactMarkdown
                children={props.splitPaneSelectedContent.children}
            />
        </div>        
    );
} 

export default SplitPaneSelectedContent;