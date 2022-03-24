import React, {Component} from 'react';

class Subject extends Component{ //props (property 속성, 특성)
    render(){ //자바스크립트의 최신 버전은 function을 생략( function render() )
        console.log('Subject render');
      return (
        <header>
          <h1><a href="/">{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }

  export default Subject;