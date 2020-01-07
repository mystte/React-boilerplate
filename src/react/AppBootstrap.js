import React from 'react';
// import PropTypes from 'prop-types';
import { withCookies } from 'react-cookie';

import AppRouter from './router/AppRouter';

const AppBootstrap = cookies => {
  // useEffect() {
  //   this.props.dispatch(loadAppData(this.props.cookies.cookies));
  //   Localization.setLanguage('en');
  // }

  // componentDidUpdate() {
  //   if (this.props.user) {
  //     if (this.props.cookies.get('gamerscout-api-session') !== this.props.user.get('sessionId')) {
  //       this.props.cookies.set('gamerscout-api-session', this.props.user.get('sessionId'));
  //     }

  //     if (!this.props.user.validated && !this.props.cookies.get('gs-notif')) {
  //       this.props.cookies.set('gs-notif', 1, { maxAge: 3600 });
  //       this.props.dispatch(
  //         pushNotification({
  //           record: NotificationRecord.getMockedNotif(MOCKED_NOTIFICATION.INVALID_ACCOUNT),
  //         }),
  //       );
  //     }
  //   }
  // }

  return (
    <>
      <AppRouter cookies={cookies} />
    </>
  );
};

export default withCookies(AppBootstrap);
