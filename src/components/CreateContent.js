import React, {Component} from 'react';

class CreateContent extends Component{
    render(){
        console.log('Content render');
      return(
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post"
            // submit 버튼을 포함하고 있는 form 태그에 onSubmit이라는 이벤트를
            // 걸어놓으면, submit 버튼을 클릭했을 때 onSubmit 이벤트가 실행된다.(form 고유의 기능)
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
              );
            }.bind(this)}
          >
            <p>
              <input type="text" name="title" placeholder="title"></input>
            </p>
            <p>
              {/* 작성 내용이 여러 줄일 때 <textarea></textarea> */}
              <textarea name="desc" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
      );
    }
  }

  export default CreateContent;
  