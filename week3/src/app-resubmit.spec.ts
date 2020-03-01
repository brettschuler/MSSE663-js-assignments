import { expect } from 'chai';
import 'mocha';
import { newJose, GenderTypes} from './app-resubmit';

describe('App class', () =>{
    it("should verify Jose's age is greater than 21", () => {
      expect(newJose.getAge()>21).to.be.true;
    });

    it("should output gender as male", () => {
        expect(newJose.getGender()).to.be.true(GenderTypes.M);
      });

    it("should confirm gender is not female", () => {
        expect(newJose.getGender()).to.be.true(GenderTypes.F);
      });  
})
