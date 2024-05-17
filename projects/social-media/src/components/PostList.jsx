import { usePost } from "../store/post-context"
import { MdDelete } from "react-icons/md";

export const PostList = () => {

  const { postState, postDispatch } = usePost();
  return (
    < div className="post-container">
      {postState.map(post =>
        <div className="card" key={post.id}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            {post.hashtags.map(tag => <span className="badge text-bg-primary mr-3">{tag}</span>)}
            <button class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle" 
            onClick={() => {
              postDispatch(
                {
                  type: 'DELETE_POST',
                  payload: { id: post.id }
                })
            }}
          ><MdDelete /></button>
          </div>
        </div>
      )}
    </div>

  )
}