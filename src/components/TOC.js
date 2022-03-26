import React, {Component} from 'react';

class TOC extends Component{
  //1. render()가 호출되기 이전에 shouldComponentUpdate()가 먼저 호출된다.
  //2. shouldComponentUpdate()의 return값이 true면 render() 호출
  //                                        false면 render() 호출 X 이라고 약속돼있다.
  //3. shouldComponentUpdate()는 새롭게 바뀐 값과 이전 값 둘 다 접근할 수 있다.

    shouldComponentUpdate(newProps, newState){
      console.log('===> TOC render shouldComponentUpdate'
        , newProps.data
        , this.props.data
      );
      if(this.props.data === newProps.data){ //값이 바뀌지 않았다면
        return false; //render() 호출 X
      }
      return true; //값이 바뀌었다면 render() 호출
    }

    render(){
        console.log('===> TOC render');
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(
            <li key={data[i].id}>
              <a href={"/content/"+data[i].id}
              data-id={data[i].id}
              onClick={function(e){
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id);
              }.bind(this)}
              >{data[i].title}</a>
            </li>);
            i = i + 1; 
        }
      return(
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  }

  export default TOC;