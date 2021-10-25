import { Switch } from 'react-router-dom';
import Route from './Route';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Management } from '../pages/Management';
import { Product } from '../pages/Product';

export const Routes: React.FC = () => (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/gerenciar-vitrines" component={Management} isPrivate/>
      <Route path="/cadastrar-produto" component={Product} isPrivate />
      <Route path="/login" component={Login} />
    </Switch>
);

