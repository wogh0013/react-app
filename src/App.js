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
      mode:'read',
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      subject:{title:'WEB', sub:'World Wide Web!'},
      content:{title:'HTML', desc:'HTML is HyperText Markup Language.'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  } 

  //리액트에서 props, state의 값이 바뀌면, 해당 props, state를 가지고 있는 render 함수가 재호출된다.
  //하위에 있는 component들의 render 함수도 재호출된다.
  //화면이 다시 그려진다.
  //render함수 : 어떤 HTML을 그릴 것인가라는 것을 결정하는 함수이다.
  // -->> props나 state가 바뀌면, 화면이 다시 그려진다.
  render(){
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    console.log('render', this);
    return (
      <div className="App">
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault(); // a태그의 기본적인 동작을 막음
            // debugger; //브라우저가 이 부분에서 실행을 멈춤
            this.setState({
              mode:'welcome'
            }); 
            //이미 component 생성이 끝나고 동적으로 stata값을 바꿀 때는 함수로 해야 함.
            //함수를 통해 변경하고 싶은 값을 객체로 주어 변경함.
            //Constructor에서는 맨 위처럼 편하게 바꾸면 됨.
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC 
          data={this.state.contents}>
        </TOC>
        <Content
          title={_title}
          desc={_desc}>
        </Content>
      </div>
    )
  }
};

export default App;
