import { VerbStore } from '../verbStore';

jest.mock('../verbToBe');

describe('verbStore', () => {
  let store;
  beforeAll(() => {
    store = new VerbStore();
  });
  test('Should return verb to be by default', () => {
    const verb = store.getVerbData();
    expect(verb.name).toEqual('to be');
  });
  test('Should return verb to be for "tobe" verb key', () => {
    const verbToBe = store.getVerbData('tobe');
    expect(verbToBe.name).toEqual('to be');
  });
  test('Should return verb to have for "tohave" verb key', () => {
    const verbToBe = store.getVerbData('tohave');
    expect(verbToBe.name).toEqual('to have');
  });
})