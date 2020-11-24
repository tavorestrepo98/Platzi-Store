import { DeleteRepeatsPipe } from './delete-repeats.pipe';

xdescribe('DeleteRepeatsPipe', () => {
  it('create an instance', () => {
    const pipe = new DeleteRepeatsPipe();
    expect(pipe).toBeTruthy();
  });
});
