import * as ts from 'typescript';

export type InterfaceOrClassDeclaration = ts.InterfaceDeclaration | ts.ClassDeclaration;
export class Scope {
  private _shouldSetRandomValues: boolean = false;
  constructor(currentMockKey?: string) {
    this._currentMockKey = currentMockKey;
  }

  private readonly _currentMockKey: string;

  public get currentMockKey(): string {
    return this._currentMockKey;
  }

  public set shouldSetRandomValues(_shouldSetRandomValues: boolean) {
    this._shouldSetRandomValues = _shouldSetRandomValues;
  }

  public get shouldSetRandomValues(): boolean {
    return this._shouldSetRandomValues;
  }
}
