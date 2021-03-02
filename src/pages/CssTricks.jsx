import React from "react";
import {
  Link,
  Route,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const CssTrick = () => {
  const { featureName } = useParams();
  const Item = React.lazy(() => import(`../containers/${featureName}`));

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Item />
    </React.Suspense>
  );
};

const CssTricks = () => {
  const history = useHistory();
  const goBackFunction = () => history.goBack();
  const { url, path } = useRouteMatch();
  console.log(url, path);
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/glassmorphform`}>GlassmorhForm</Link>
        </li>
        <li>
          <Link to={`${url}/themetoggler`}>ThemeToggler</Link>
        </li>
      </ul>

      <button onClick={() => goBackFunction()}>Go back</button>

      <Route path={`${path}/:featureName`}>
        <CssTrick />
      </Route>
    </div>
  );
};

export default CssTricks;
