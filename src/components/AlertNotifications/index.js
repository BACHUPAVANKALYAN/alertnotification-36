// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const renderInfoNotification = () => (
    <Notification>
      <MdInfo className="info icon" />
      <div className="message-container">
        <h1 className="head">Info</h1>
        <p className="des">Anyone on the internet can view these files.</p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <MdWarning className="warning icon" />
      <div className="message-container">
        <h1 className="head">Warning</h1>
        <p className="des">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderErrorWarningNotification = () => (
    <Notification>
      <RiErrorWarningFill className="error icon" />
      <div className="message-container">
        <h1 className="head">Error</h1>
        <p className="des">
          Sorry, you are not authorized to have access to delete the file.
        </p>
      </div>
    </Notification>
  )

  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div className="message-container">
        <h1 className="head">Success</h1>
        <p className="des">You can access all the files in the folder</p>
      </div>
    </Notification>
  )

  return (
    <div className="app-container">
      <div className="responsive-container">
        <h1 className="heading">Alert Notifications</h1>
        <renderSuccessNotification />
        <renderErrorWarningNotification />
        <renderWarningNotification />
        <renderInfoNotification />
      </div>
    </div>
  )
}

export default AlertNotifications
