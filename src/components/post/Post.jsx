import './post.css'
export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum, dolor sit amet asdf fff ertg.
        </span>
        < hr />
        <span className='psotDate'>1 hour ago</span>
      </div>
      <p className='postDescription'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nam vitae assumenda in nisi atque rerum reiciendis, explicabo, laborum non, deserunt ut error! Assumenda sapiente deleniti, quis porro optio at.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nam vitae assumenda in nisi atque rerum reiciendis, explicabo, laborum non, deserunt ut error! Assumenda sapiente deleniti, quis porro optio at.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nam vitae assumenda in nisi atque rerum reiciendis, explicabo, laborum non, deserunt ut error! Assumenda sapiente deleniti, quis porro optio at.
      </p>
    </div>
  )
}
