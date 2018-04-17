import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';

export const mapResult = () => <T>(source: Observable<T>) =>
    source.pipe(map(response => response));
