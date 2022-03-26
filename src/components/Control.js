import React, {Component} from 'react';

class Control extends Component{ //props (property 속성, 특성)
    render(){ //자바스크립트의 최신 버전은 function을 생략( function render() )
        console.log('Subject render');
      return (
        <ul>
        <li><a href="/create" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('create');
        }.bind(this)}>create</a></li>
        <li><a href="/update" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('update');
        }.bind(this)}>update</a></li>
        <li><input onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('delete');
        }.bind(this)} type="button" value="delete"></input></li>
        {/* delete는 button을 사용한다. */}
      </ul>
      );
    }
  }

  export default Control;