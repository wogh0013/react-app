import React, {Component} from 'react';

class UpdateContent extends Component{
    constructor(props){
      super(props);
      this.state = {
        id:this.props.data.id,
        title:this.props.data.title,
        desc:this.props.data.desc
      }
      this.inputFormHandler = this.inputFormHandler.bind(this);
    }

    inputFormHandler(e){
      this.setState({[e.target.name]:e.target.value});
    }
    render(){
        console.log(this.props.data);
        console.log('UpdateContent render');
      return(
        <article>
          <h2>Update</h2>
          <form action="/update_process" method="post"
            // submit 버튼을 포함하고 있는 form 태그에 onSubmit이라는 이벤트를
            // 걸어놓으면, submit 버튼을 클릭했을 때 onSubmit 이벤트가 실행된다.(form 고유의 기능)
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
                this.state.id,
                this.state.title,
                this.state.desc
              );
            }.bind(this)}
          >
            <input type="hidden" name="id" value={this.state.id}></input>
            <p>
              <input 
                type="text" 
                name="title" 
                placeholder="title"
                value={this.state.title}
                onChange={this.inputFormHandler}
                ></input>
            </p>
            <p>
              {/* 작성 내용이 여러 줄일 때 <textarea></textarea> */}
              <textarea 
                  onChange={this.inputFormHandler}
                  name="desc" 
                  placeholder="description" 
                  value={this.state.desc}></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
      );
    }
  }

  export default UpdateContent;
  