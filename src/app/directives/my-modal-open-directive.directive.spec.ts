import { MyModalOpenDirective } from './my-modal-open.directive';
import {MyModalService} from '../services/my-modal/my-modal.service';

describe('MyModalOpenDirectiveDirective', () => {
  it('should create an instance', () => {
    const directive = new MyModalOpenDirective(new MyModalService);
    expect(directive).toBeTruthy();
  });
});
