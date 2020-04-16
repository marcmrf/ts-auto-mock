import { createMock, createMockWithRandomValues } from 'ts-auto-mock';

/*
 USE THIS FILE ONLY FOR TESTING NEW IMPLEMENTATION
 1) build the module you need
 2) run test:playground to see if it pass
 3) run build:playground to see the output generated

 */


describe('create-mock-with-random-values', () => {
  interface A {
    // eslint-disable-next-line @typescript-eslint/prefer-function-type
    (): string;
  }

  interface B {
    // eslint-disable-next-line @typescript-eslint/prefer-function-type
    (): number;
  }

  interface C {
    prop: A & B;
  }


  it('should give the default value ', () => {
    // @ts-ignore
    const mock: string = createMock<string>();
    // @ts-ignore
    const mock2: number = createMock<number>();
    expect(mock).toBe('');
    // @ts-ignore
    expect(mock2).toBe(0);
  });
});

