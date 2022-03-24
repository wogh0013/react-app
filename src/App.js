import React, {Component} from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';

//해당 App.js를 사용하고 있는 파일은 index.js 파일이다.

//component를 만드는 코드
class App extends Component {
  constructor(props){ //가장 먼저 실행되며 초기화 담당
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'World Wide Web!'},
      content:{title:'HTML', desc:'HTML is HyperText Markup Language.'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  } 
  render(){
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content
          title={this.state.content.title}
          desc={this.state.content.desc}>
        </Content>
      </div>
    )
  }
};

export default App;
