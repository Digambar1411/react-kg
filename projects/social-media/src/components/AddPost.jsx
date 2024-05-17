import { useRef } from "react";
import { usePost } from "../store/post-context"
import { v1 as uuid } from 'uuid'


export const AddPost = () => {

  const { postDispatch } = usePost();

  const title = useRef();
  const body = useRef();
  const likes = useRef();

  return (
    <form className='add-post' onSubmit={(e) => {
      let titleVal = title.current.value;
      let bodyVal = body.current.value;
      let likesVal = likes.current.value;
      e.preventDefault();
      postDispatch({
        type: 'ADD_POST',
        payload: {
          title: titleVal,
          body: bodyVal,
          likes: likesVal,
          id: uuid()
        }
      })
      title.current.value = '';
      body.current.value = '';
      likes.current.value = '';
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
        <label htmlFor="likes" className="form-label">Likes</label>
        <input type="number" className="form-control" id="likes" ref={likes} />
      </div>
      <button type="submit" className="btn btn-primary">Create</button>
    </form>
  )
}