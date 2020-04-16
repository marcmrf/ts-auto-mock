import { createMock, createMockWithRandomValues } from 'ts-auto-mock';

describe('string random', () => {
  describe('for declared interface with string', () => {
    interface Interface {
      aString: string;
    }

    it('should generate random values for strings', () => {
      const properties: Interface = createMockWithRandomValues<Interface>();
      expect(properties.aString).toMatch(/random_[A-Za-z0-9]+/);
    });

    it('should generate random values for strings when the mock was already created', () => {
      createMock<Interface>();
      const properties: Interface = createMockWithRandomValues<Interface>();
      expect(properties.aString).toMatch(/random_[A-Za-z0-9]+/);
    });

    it('should generate empty values for an interface already used with random values', () => {
      createMockWithRandomValues<Interface>();
      const properties: Interface = createMock<Interface>();
      expect(properties.aString).not.toMatch(/random_[A-Za-z0-9]+/);
    });
  });

  describe('for generics', () => {
    interface InterfaceWithGenerics<T> {
      aProperty: T;
      prop2: string;
    }
    it('should generate a random value', () => {
      const properties: InterfaceWithGenerics<string> = createMockWithRandomValues<InterfaceWithGenerics<string>>();
      expect(properties.aProperty).toMatch(/random_[A-Za-z0-9]+/);
      expect(properties.prop2).toMatch(/random_[A-Za-z0-9]+/);
    });
  });
});
