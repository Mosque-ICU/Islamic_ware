import { useState } from 'react'
import Editor from '../Editor/Editor'
import Button from '../Button'

const Comment = ({
  index,
  text,
  replies,
  reactions,
  onReply,
  onReaction,
  isReply,
  replyindex,
}) => {
  const [newReply, setNewReply] = useState('')
  const [replying, setReplying] = useState(false)

  const handleReplyChange = (text) => {
    setNewReply(text)
  }

  const handleReplySubmit = () => {
    onReply(index, newReply)
    setNewReply('')
    setReplying(false)
  }

  const handleReactionClick = () => {
    onReaction(index)
  }

  return (
    <div className="mb-4">
      <div className="mb-2 flex">
        <div className="mr-3 flex-shrink-0">
          {/* <img
            className="h-8 w-8 rounded-full"
            src="https://i.pravatar.cc/100?img=2"
            alt="User Avatar"
          /> */}
        </div>
        <div className="flex-grow">
          <div className="mb-2 flex flex-row">
            <img
              className="h-6 w-6 rounded-full"
              src="https://i.pravatar.cc/100?img=2"
              alt="User Avatar"
            />
            <p className="ml-1 text-[13px] text-black ">John Doe</p>
          </div>
          <p
            style={{
              wordBreak: 'break-word',
              whiteSpace: 'pre-wrap',
              width: '500px',
            }}
            dangerouslySetInnerHTML={{ __html: text }}
            className="text-[13px] text-black"
          ></p>
          <div className="flex items-center justify-end">
            <button
              className="mr-2 font-medium text-gray-500 hover:text-gray-800"
              onClick={handleReactionClick}
            >
              {reactions !== 0 ? (
                <>
                  <svg
                    className="mr-1 inline-block h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M 20.684 7.005 C 19.98 6.426 18.865 6 17.715 6 C 15.368 6 13.584 7.956 12 9.423 C 10.416 7.956 8.632 6 6.285 6 C 5.136 6 4.02 6.426 3.316 7.005 C 1.53 8.259 1.47 11.253 2.93 13.206 L 11.179 22.995 C 11.461 23.32 11.847 23.5 12.254 23.5 C 12.661 23.5 13.047 23.32 13.329 22.995 L 21.578 13.206 C 23.03 11.253 22.97 8.259 21.184 7.005 Z"
                    />
                  </svg>
                  {reactions}
                </>
              ) : (
                <>
                  <img
                    className="mr-1 inline-block h-4 w-4"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA7UlEQVR4nO2UsQ4BQRCGL6LxFp5A4gX0JKKRUGvkdgkzp9D9cxqVF/AKngJRewdUehXJyUW44whiNyExyTSzm++bSXbWcb4x3B5ybtcvA0gZh2tCXZHsNUugGH2j8BZL7Qw/JcbG4MpD9RoeTiCuNbhmCdo8yFuDa5YdgPRn8K5feQAPNMn04+41YXUX/iQVybrl+cUYSBaxzuaXOr8PjzhYRYKbQyMCjji/KsDGroBkaFGAQ7ODrD0ByeT6vRsWKA8Fm4JlcmMNChSj8bIgXPk34VuiUSYpIJnHLs3O9fA/eV2CjSKUEvB/OE/iCFf1kL7Kb5hTAAAAAElFTkSuQmCC"
                  ></img>
                </>
              )}
            </button>
            {!isReply && (
              <button
                className="text-xs font-medium text-gray-500 hover:text-black hover:text-gray-800"
                onClick={() => setReplying(!replying)}
              >
                Reply
              </button>
            )}
          </div>
        </div>
      </div>
      {replying && (
        <>
          <div className="mb-2 flex">
            <div className="mr-3 flex-shrink-0">
              <img
                className="h-8 w-8 rounded-full"
                src="https://i.pravatar.cc/100?img=3"
                alt="User Avatar"
              />
            </div>
            <div className="flex-grow">
              <Editor value={newReply} onChange={handleReplyChange} />
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={handleReplySubmit}>Reply</Button>
          </div>
        </>
      )}
      {replies.length > 0 && (
        <div className="ml-8">
          <p className="mb-2 text-xs text-gray-500">
            {replies.length} {replies.length === 1 ? 'reply' : 'replies'}
          </p>
          {replies.map((reply, i) => (
            <Comment
              key={i}
              index={index}
              text={reply.text}
              replies={reply.replies}
              reactions={reply.reactions}
              onReply={onReply}
              onReaction={onReaction}
              isReply={reply.isReply}
              replyindex={i}
            />
          ))}
        </div>
      )}
      <hr className="my-4" />
    </div>
  )
}

export default Comment
