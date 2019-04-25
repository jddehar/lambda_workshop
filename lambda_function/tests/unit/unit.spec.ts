import { handler } from '../../app';
import { expect } from 'chai';
import 'mocha'
//import { isMainThread } from 'worker_threads';

describe('Workshop Function', () => {
    it('should output Hey Workshop!', () => {
      const result = handler().then( value =>
        expect(value.String).to.contains('Hey Workshop!')
      );
    });
  });