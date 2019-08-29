import React, { Component } from 'react';

class TabDisplay extends Component {
  constructor(props) {
    super(props);
    
  }
  
  

  generateTabs() {
    let TabHTML = [];

    for(var i=0;i<this.props.tabCount;i++) {
      TabHTML.push(<div><h1>Triggered loop</h1></div>);
    }
    
    return TabHTML;

  }
  
  genTabsTwo(tabsProp) {
    let tabs = tabsProp.split();
    let htmlResults = [];
    for(var i=0;i<tabs.length;i++) {
      htmlResults.push(tabs[i]);
    }
    return htmlResults;
  }

  generateTabContent() {
    
  }
  
  
  render() {
    return (
      <div>
        <div id="tabs-wrapper">
          {this.generateTabs()}
        </div>
        <div id="content-wrapper">
          <div>
            Test Content: {this.props.tabContent}
          </div>
        </div>
      </div>
    );
  }
  
}

TabDisplay.defaultProps = {
  tabCount: 2,
};


export default TabDisplay;