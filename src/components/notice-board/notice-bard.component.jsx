import "./notice-board.styles.css";
import { notifications } from "../../assets/data";
import Notification from "../notification/notification.component";
import { useState } from "react";

const NoticeBoard = () => {
  const [notificationStatus, setNotificationStatus] = useState([
    1, 1, 1, 0, 0, 0, 0,
  ]);
  const count = notificationStatus.reduce(
    (acc, v) => (v == 1 ? acc + 1 : acc),
    0
  );
  return (
    <article className="notice-board">
      <header>
        <div className="note_plus_count">
          <h1>Notifications</h1>
          <div className="count-container">{count}</div>
        </div>
        <button onClick={() => setNotificationStatus([0, 0, 0, 0, 0, 0, 0])}>
          Mark all as read
        </button>
      </header>
      {notifications.map((data, idx) => (
        <Notification
          key={idx}
          doer={data.doer}
          action={data.action}
          time={data.time}
          receiver={data.receiver}
          index={idx}
          notificationStatus={notificationStatus}
          setNotificationStatus={setNotificationStatus}
        />
      ))}
    </article>
  );
};

export default NoticeBoard;
