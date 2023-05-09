import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Setting() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Account</span>
        </div>
        <form action="" className="settingsForm">
          <label htmlFor="" className='settingsPP'>
            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
          </label>
          <label htmlFor="fileInput"></label>
        </form>
      </div>
      < Sidebar />
    </div>
  )
}
