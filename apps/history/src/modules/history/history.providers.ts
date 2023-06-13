import { HISTORY_REPOSITORY } from '../../core/constants';
import { History } from './entities/history.entity';

export const historyProviders = [
  {
    provide: HISTORY_REPOSITORY,
    useValue: History,
  },
];
