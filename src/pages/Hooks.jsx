import React from "react";
import {
  Link,
  Route,
  useHistory,
  useParams,
  useRouteMatch
} from "react-router-dom";

const Hook = () => {
  const { featureName } = useParams();
  const Item = React.lazy(() => import(`../containers/${featureName}`));

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Item />
    </React.Suspense>
  );
};

const Hooks = () => {
  const history = useHistory();
  const goBackFunction = () => history.goBack();
  const { url, path } = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/reactquery`}>React query</Link>
        </li>
        <li>
          <Link to={`${url}/usememo`}>useMemoHook</Link>
        </li>
      </ul>

      <button onClick={() => goBackFunction()}>Go back</button>

      <Route path={`${path}/:featureName`}>
        <Hook />
      </Route>
    </div>
  );
};

export default Hooks
