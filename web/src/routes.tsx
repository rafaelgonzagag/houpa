import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Management } from './pages/Management';
import { Product } from './pages/Product';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/gerenciar-vitrines" component={Management} />
      <Route path="/cadastrar-produto" component={Product} />
    </Switch>
  );
};

export default Routes;