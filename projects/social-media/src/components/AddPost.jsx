import { useRef } from "react";
import { usePost } from "../store/post-context"
import { v1 as uuid } from 'uuid'


export const AddPost = () => {

  const { postDispatch } = usePost();

  const title = useRef();
  const body = useRef();
  const reactions = useRef();
  const tags = useRef();

  return (
    <form className='add-post' onSubmit={(e) => {
      let titleVal = title.current.value;
      let bodyVal = body.current.value;
      let reactionsVal = reactions.current.value;
      let tagsVal = tags.current.value.split(',');

      e.preventDefault();
      postDispatch({
        type: 'ADD_POST',
        payload: {
          title: titleVal,
          body: bodyVal,
          reactions: reactionsVal,
          id: uuid(),
          tags:tagsVal
        }
      })
      title.current.value = '';
      body.current.value = '';
      reactions.current.value = '';
      tags.current.value ='';
    }}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text/number" className="form-control" id="title" ref={title} />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Write Post Description</label>
        <textarea type="text/number" className="form-control" id="description" ref={body} />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Reactions</label>
        <input type="number" className="form-control" id="reactions" ref={reactions} />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Tags</label>
        <input type="text" className="form-control" id="tags" ref={tags} />
      </div>

      <button type="submit" className="btn btn-primary">Create</button>
    </form>
  )
}