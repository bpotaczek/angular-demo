import { RouterEffects } from './navigation.effects';
import { AuthEffects } from './auth.effects';

export const effects: any[] = [
    RouterEffects,
    AuthEffects
];

export * from './navigation.effects';
export * from './auth.effects';
