import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

export const mapResult = () => <T>(source: Observable<T>) =>
    source.pipe(map(response => response));
