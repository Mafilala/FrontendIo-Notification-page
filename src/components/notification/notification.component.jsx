import "./notification.styles.css";
const Notification = ({
  doer,
  action,
  time,
  receiver,
  index,
  notificationStatus,
  setNotificationStatus,
}) => {
  return (
    <div
      className={
        notificationStatus[index] == 1 ? "notification newN" : "notification"
      }
      onClick={() =>
        setNotificationStatus((prev) => {
          const newN = prev.slice();
          newN[index] = 0;
          return newN;
        })
      }
    >
      <div className="image_and_content">
        <div className="image-container">
          <img src={doer.imgUrl} />
        </div>
        <div className="middle">
          <p>
            <span className="name doer-name">{doer.name}</span> {action}
            {"   "}
            {receiver.name && (
              <span
                className={
                  receiver.isEntity ? "name entity" : "name receiver-name"
                }
              >
                {receiver.name}
              </span>
            )}
            {notificationStatus[index] == 1 && <div className="dot"></div>}
          </p>
          <p className="time">{time}</p>
          {receiver.message && <p className="message">{receiver.message}</p>}
        </div>
      </div>
      {receiver.imgUrl && (
        <div className="image-container receiver-image">
          <img src={receiver.imgUrl} />
        </div>
      )}
    </div>
  );
};

export default Notification;
