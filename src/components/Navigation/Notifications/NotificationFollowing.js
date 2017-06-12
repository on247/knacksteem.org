import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { FormattedRelative } from 'react-intl';
import { Link } from 'react-router';
import Avatar from '../../Avatar';
import './Notification.less';

const NotificationFollowing = ({ onClick, id, read, date, payload }) =>
  <div
    onClick={() => onClick(id)}
    className={
      classNames('Notification', {
        'Notification--unread': !read,
      })
    }
  >
    <Avatar username={payload.user} size={40} />
    <div className="Notification__text">
      <div className="Notification__text__message">
        <Link to={`/${payload.user}`}>{payload.user}</Link> is now following you.
      </div>
      <div className="Notification__text__date">
        <FormattedRelative value={date} />
      </div>
    </div>
  </div>;

NotificationFollowing.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.number,
  read: PropTypes.bool,
  date: PropTypes.string,
  payload: PropTypes.shape(),
};

NotificationFollowing.defaultProps = {
  onClick: () => {},
};

export default NotificationFollowing;