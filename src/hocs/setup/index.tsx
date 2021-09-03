import { withProviders } from 'hocs/withProviders';

export const setup = (Component: React.FC): React.FC => withProviders(Component);
