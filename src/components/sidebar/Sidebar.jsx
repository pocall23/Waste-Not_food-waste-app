import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import RadarIcon from '@mui/icons-material/Radar';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpIcon from '@mui/icons-material/Help';


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
             <RssFeedIcon className="sidebarIcon"/>
             <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
             <RadarIcon className="sidebarIcon"/>
             <span className="sidebarListItemText">Nearby</span>
                </li>
                <li className="sidebarListItem">
             <RadarIcon className="sidebarIcon"/>
             <span className="sidebarListItemText">Nearby</span>
                </li>
                <li className="sidebarListItem">
             <RadarIcon className="sidebarIcon"/>
             <span className="sidebarListItemText">Nearby</span>
                </li>
                <li className="sidebarListItem">
             <RadarIcon className="sidebarIcon"/>
             <span className="sidebarListItemText">Nearby</span>
                </li>
                <li className="sidebarListItem">
             <BookmarksIcon className="sidebarIcon"/>
             <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
             <HelpIcon className="sidebarIcon"/>
             <span className="sidebarListItemText">FAQ</span>
                </li>            
            </ul>

            <hr className="sidebarHr"/>
            <div className="favouritesText">
                Favourites
            </div>
            <li className="sidebarFriend">
                <img src="/assets/images/stockphotochef.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="/assets/images/stockphotochef.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="/assets/images/stockphotochef.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="/assets/images/stockphotochef.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="/assets/images/stockphotochef.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="/assets/images/stockphotochef.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="/assets/images/stockphotochef.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="/assets/images/stockphotochef.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">John Doe</span>
            </li>
        </div>
    </div>
  )
}
