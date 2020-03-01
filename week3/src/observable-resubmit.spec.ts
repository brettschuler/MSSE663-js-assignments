import { expect } from 'chai';
import 'mocha';
import { mappedSrce} from './observable.spec';

describe('Observable stream',() => {
    it("should output the ['15','19','23','35','67','45']", () => {
    const expected = ['15','19','23','35','67','45'];
    mappedSrce.subscribe(numbers => {
        expect(numbers)to.eql(expected);
     });
   });
});