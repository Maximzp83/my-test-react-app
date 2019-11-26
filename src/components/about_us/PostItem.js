import React from "react";

const PostItem = ({post}) => (
  <li className="postItem">{ post.title }</li>
);

/*TodosList.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  saveTodo: PropTypes.func.isRequired,
};*/

export default PostItem;