import React from 'react';
import { Link } from "react-router-dom";



import TabDisplay from './TabDisplay';
import HeroBanner from './HeroBanner';

class Home extends React.Component {
    constructor(props){
        super(props);
        var test = ["test","test2","test3"];

        this.state = {};
    }

    genContent() {
        const template = (<div><h1>testLINE</h1></div>);
        let content = [];
        for(var i=0;i<5;i++) {
            content.push(template);
        }
        return content;
    }


    render(){
        return(
            <div>
                <HeroBanner pageBanner="HomeBanner" />
                <h1>Home</h1>
                <hr></hr>
                <hr></hr>
                <TabDisplay tabCount="5" tabContent={this.genContent()}/>
                
            </div>
        );
    }
}

export default Home;