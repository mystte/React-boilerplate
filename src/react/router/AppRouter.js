import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import Loading from '../components/views/loading/Loading';
import { getHomeUrl } from '../config/routes';
import FourOFour from '../components/container/fourofour/FourOFour';

const Home = React.lazy(() => import('../components/container/home/Home'));
const AppRouter = ({ cookies }) => {
  const routesConfig = [
    {
      path: getHomeUrl(),
      component: Home,
    },
  ];

  const renderedRoutes = routesConfig.map(route => (
    <Route
      cookies={cookies}
      key={`route${route.path}`}
      path={route.path}
      exact
      component={route.component}
    />
  ));

  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Suspense fallback={<Loading />}>
          <Switch>
            {renderedRoutes}
            <Route component={FourOFour} />
          </Switch>
        </Suspense>
      </QueryParamProvider>
    </Router>
  );
};

AppRouter.propTypes = {
  cookies: PropTypes.object,
};

AppRouter.defaultProps = {
  cookies: null,
};

export default AppRouter;
