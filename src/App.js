import React, {Component} from 'react';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import './App.css';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';

//해당 App.js를 사용하고 있는 파일은 index.js 파일이다.

//component를 만드는 코드
class App extends Component {
  constructor(props){ //가장 먼저 실행되며 초기화 담당
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'create',
      selected_content_id:2,
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
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read'){
        var i = 0;
        while(i < this.state.contents.length){
          var data = this.state.contents[i];
          if(data.id === this.state.selected_content_id){
            _title = data.title;
            _desc = data.desc;
            break;
          }
          i = i + 1;
        }
        _article = <ReadContent title={_title} desc={_desc}></ReadContent>
     } else if(this.state.mode === 'create'){
       _article = <CreateContent onSubmit={function(_title, _desc){
        // add content to this.state.contents
        this.max_content_id = this.max_content_id + 1;
        this.state.contents.push(
          {id:this.max_content_id, title:_title, desc:_desc}
        );
        this.setState({
          contents:this.state.contents
        });
        console.log(_title, _desc);
       }.bind(this)}></CreateContent>
     }

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>

        <TOC 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)}
          data={this.state.contents}>
        </TOC>

        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          })
        }.bind(this)}></Control>

        {_article}

      </div>
    )
  }
};

export default App;

//상위가 하위를 변경할 때 : props
//하위가 상위를 변경할 때 : state(event)