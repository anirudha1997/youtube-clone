import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <Comment key={index} info={comment} />
  ));
};

export default CommentList;
