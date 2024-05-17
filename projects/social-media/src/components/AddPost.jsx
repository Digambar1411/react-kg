import { useRef } from "react";
import { usePost } from "../store/post-context"
import { v1 as uuid } from 'uuid'


export const AddPost = () => {

  const { postDispatch } = usePost();

  const title = useRef();
  const body = useRef();
  const reactions = useRef();
  const hashtags = useRef();

  return (
    <form className='add-post' onSubmit={(e) => {
      let titleVal = title.current.value;
      let bodyVal = body.current.value;
      let reactionsVal = reactions.current.value;
      let hashtagsVal = hashtags.current.value.split(',');

      e.preventDefault();
      postDispatch({
        type: 'ADD_POST',
        payload: {
          title: titleVal,
          body: bodyVal,
          reactions: reactionsVal,
          id: uuid(),
          hashtags:hashtagsVal
        }
      })
      title.current.value = '';
      body.current.value = '';
      reactions.current.value = '';
      hashtags.current.value ='';
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
        <label htmlFor="hashtags" className="form-label">Hashtags</label>
        <input type="text" className="form-control" id="hashtags" ref={hashtags} />
      </div>

      <button type="submit" className="btn btn-primary">Create</button>
    </form>
  )
}