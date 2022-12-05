import { Minifier } from './entities/minifier.entity';
import { MINIFIER_REPOSITORY } from '../../core/constants';

export const minifierProviders = [
  {
    provide: MINIFIER_REPOSITORY,
    useValue: Minifier,
  },
];
