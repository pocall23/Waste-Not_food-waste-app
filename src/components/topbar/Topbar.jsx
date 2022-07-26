import "./topbar.css"
import  SearchIcon   from '@mui/icons-material/Search';

import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
  return (
    <div className="topbarContainer">
       <div className="topbarLeft">
        <span className="logo">Soup Kitchen</span>
       </div>
       <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input placeholder="Search for friends, post or video" className="searchIput" />
        </div>
       </div>
       <div className="topbarRight">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
       </div>
       <div className="topbarIcons">
        
        <div className="topbarIconItem">
          <NotificationsIcon />
          <span className="topbarIconBadge">2</span>
        </div>
       </div>
       <img src="/assets/images/stockphotochef.jpg" alt="" className="topbarImg" />

        </div>
  )
}
