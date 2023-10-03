import React, { useState } from "react";
import Button from "../Button/Button";
import Editor from "../Editor/Editor";

function ArticleComments({ close, comments, setComments }) {
  const [newComment, setNewComment] = useState("");
  const [showCommentBox, setShowCommentBox] = useState(false);

  const handleCommentChange = (text) => {
    console.log(text);
    setNewComment(text);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() === "") return;
    setComments([...comments, { text: newComment, replies: [], reactions: 0 }]);
    setNewComment("");
  };

  const handleReply = (index, replyText) => {
    const reply = { text: replyText, reactions: 0, isReply: true };
    setComments((comments) => {
      const newComments = [...comments];
      newComments[index].replies.push(reply);
      return newComments;
    });
  };

  const handleReaction = (index) => {
    const newComments = [...comments];
    newComments[index].reactions += 1;
    setComments(newComments);
  };

  return (
    <>
      <div className="sidebar-right slideLeft rounded-lg bg-white shadow-lg" style={{ overflowY: "hidden" }}>
        <div className="px-4 py-6">
          <h2 className="mb-2 ml-3 text-lg font-medium">Comments ({comments.length}) </h2>
          <form onSubmit={handleSubmit} style={{ minHeight: "50px" }}>
            <div className="mb-4 flex">
              <div className="mr-3 flex-shrink-0">
                {/* <img
                  className="h-8 w-8 rounded-full"
                  src="https://i.pravatar.cc/100?img=1"
                  alt="User Avatar"
                /> */}
              </div>
              {showCommentBox ? (
                <div style={{ width: "100px" }} className=" flex-grow rounded-lg border border-gray-300 bg-white">
                  <Editor value={newComment} onChange={handleCommentChange} />
                </div>
              ) : (
                <div className="fadeIn flex-grow rounded-lg border border-gray-300 bg-white">
                  <button
                    className="w-full px-4 py-2 text-left text-sm font-medium text-gray-500 hover:text-black hover:text-gray-800"
                    onClick={() => setShowCommentBox(true)}
                  >
                    Write a comment...
                  </button>
                </div>
              )}
            </div>
            <div className="text-right">
              {showCommentBox && (
                <div className="flex flex-row-reverse">
                  <Button variant="secondary" size="md" onClick={() => setShowCommentBox(false)}>
                    Cancel
                  </Button>
                  {newComment && (
                    <Button disabled={!newComment} className="slideLeft mr-2" size="md">
                      Post
                    </Button>
                  )}
                </div>
              )}
            </div>
          </form>
        </div>
        <div
          className=" hide-scrollbar mr-2 overflow-y-auto px-4 py-6"
          style={{
            maxHeight: "80vh",
          }}
        >
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <Comment
                key={index}
                index={index}
                text={comment.text}
                replies={comment.replies}
                reactions={comment.reactions}
                onReply={handleReply}
                onReaction={handleReaction}
                isReply={false}
              />
            ))
          ) : (
            <p className="text-center text-gray-600">No comments yet.</p>
          )}
        </div>
      </div>
      <div className="sidebar-overlay" style={{ backgroundColor: "transparent" }} onClick={close}></div>
    </>
  );
}

export default ArticleComments;
