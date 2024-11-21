import { IComment } from '@/database/blogSchema';

type CommentProps = { 
    comment: IComment; 
  } 
  
  function parseCommentTime(time: Date) {
    return new Date(time).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  }
  
  function Comment({ comment }: CommentProps) { 
    return ( 
      <div className="border-b border-border pb-4 mb-4">
        <h4 className="font-crimson font-bold text-lg">{comment.user}</h4>
        <p className="font-crimson my-2">{comment.comment}</p>
        <span className="text-secondary text-sm">
          {parseCommentTime(comment.time)}
        </span>
      </div>
    ); 
  } 
  
  export default Comment;