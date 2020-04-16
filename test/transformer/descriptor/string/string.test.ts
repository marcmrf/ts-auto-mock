import { createMock, createMockWithRandomValues } from 'ts-auto-mock';

describe('string', () => {
  describe('for declared interface with string', () => {
    interface Interface {
      aString: string;
    }

    it('should set an empty string', () => {
      const properties: Interface = createMockWithRandomValues<Interface>();
      expect(properties.aString).toBe('');
    });
  });
});
