import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/images/stockphotochef.jpg" alt="" className="shareProfilePic" />
                <input placeholder="What do you want to give away" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOption">
                    <PermMediaIcon htmlColor='tomato' className='shareIcon'/>
                    <span className='shareOptionText'>Photo or video</span>
                </div>
                <div className="shareOption">
                    <AddLocationAltIcon  htmlColor='blue' className='shareIcon'/>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareOption">
                    <AttachMoneyIcon  htmlColor='green' className='shareIcon'/>
                    <span className='shareOptionText'>Price</span>
                    <input type="text" className="price" />
                    
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
    </div>
  )
}
