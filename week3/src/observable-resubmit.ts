// Source code here
import {of} from 'rxjs';

const source = of([15,19,23,35,67,45]);

const mapper = (array: number[]) => array.map(number => String(number));

export const mappedSrce = source.pipe(map((array: number[]) =>(array)));

mappedSrce.subscribe(array=> console.log(array));