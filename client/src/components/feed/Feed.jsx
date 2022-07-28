import Share from "../share/Share"
import Post from "../post/Post"
import './feed.css'


export default function Feed(foods, title) {
  if (!foods.length) {
    return <h3>No Foods avaliable</h3>
  }
  return (
    <div className='feed'>
      <h3 className>{title}</h3>
        <div className="feedWrapper">
          {foods && foods.map((food)=> (
            <Post/>
          ))}
        
        </div>
    </div>
  )
}

