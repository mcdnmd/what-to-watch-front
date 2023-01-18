import { Router } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';
import { BrowserHistory } from 'history';

type Props = {
  history: BrowserHistory;
  basename?: string;
  children?: React.ReactNode;
}

function HsitoryRouter(props: Props): JSX.Element {
  const { history, basename, children } = props;
  const [state, setState] = useState({ action: history.action, location: history.location });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}

export default HsitoryRouter;
