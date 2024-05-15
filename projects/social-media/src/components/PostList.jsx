import { usePost } from "../store/post-context"
import { AiFillLike } from "react-icons/ai";
import { FaComments } from "react-icons/fa";

export const PostList = () => {

  const { postState, postDispatch } = usePost();
  return (
    < div className="post-container">
      {postState.map(post =>
        <div className="card" key={post.id}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            <AiFillLike />
            <span className="badge text-bg-primary">{post.likes}</span>
            <FaComments />
            <span className="badge text-bg-secondary">{post.likes}</span>
            <a href="#" className="btn btn-primary" onClick={() => {
              postDispatch(
                {
                  type: 'DELETE_POST',
                  payload: { id: post.id }
                })
            }}>
              Delete
            </a>
          </div>
        </div>
      )}
    </div>

  )
}