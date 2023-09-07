import SplitPane, {
    Divider,
    SplitPaneBottom,
    SplitPaneLeft,
    SplitPaneRight,
    SplitPaneTop,
  } from "./SplitPane";
import QuoteContext from "./QuoteContext";
import { useState } from "react";

import "./App.css";

//This a temporary solution to the problem of loading the content of the markdown files
//The problem is that the content of the markdown files is not loaded when the page is loaded
import GetContentFromMarkdownFile from "./GetContentFromMarkdownFile";
import GetContentFromMarkdownFile1 from "./GetContentFromMarkdownFile1";
import GetContentFromMarkdownFile2 from "./GetContentFromMarkdownFile2";

  
  let quotes = [
    {
      id: 1,
      author: "Front-End-Basic-React",
      description: "Please wait, the content is loading...",
    },
    {
      id: 2,
      author: "AWS CSA",
      description: "Loading...",
    },
    {
      id: 3,
      author: "Robotics and Automation",
      description:
        "Please wait, the content is loading...",
    },
  ];

  function SplitPaneWindow() {
    const rawMarkDownFileName = [
      "https://raw.githubusercontent.com/kevincobos/front-end-basic-react/main/README.md",
      "https://raw.githubusercontent.com/kevincobos/AWS-Cloud-Solutions-Architect/main/README.md",
      "https://raw.githubusercontent.com/kevincobos/Fanuc-Robot-MateLR-200iD-4S/main/README.md"
    ]

    const [currQuote, setCurrQuote] = useState(1);    
    //const refinedMarkDownContent = <GetContentFromMarkdownFile />;
    
    quotes[rawMarkDownFileName.length] = Array.from({length: rawMarkDownFileName.length})
      .map((_, index) => (
        <GetContentFromMarkdownFile rawMDFileName={rawMarkDownFileName[index]} />
      )
    )


    quotes[0].description = <GetContentFromMarkdownFile  rawMDFileName={rawMarkDownFileName[0]}/>;
    quotes[1].description = <GetContentFromMarkdownFile1  rawMDFileName={rawMarkDownFileName[1]}/>;
    quotes[2].description = <GetContentFromMarkdownFile2  rawMDFileName={rawMarkDownFileName[2]}/>;

    return (
      <div className="SplitPaneWindow">
        <QuoteContext.Provider value={{ quotes, currQuote, setCurrQuote }}>
          <SplitPane className="split-pane-row">
            <SplitPaneLeft>
              <SplitPane className="split-pane-col">
                <SplitPaneTop />
                <Divider className="separator-row" />
                <SplitPaneBottom />
              </SplitPane>
            </SplitPaneLeft>
            <Divider className="separator-col" />
            <SplitPaneRight />
          </SplitPane>
        </QuoteContext.Provider>
      </div>
    );
  }
  
  export default SplitPaneWindow;