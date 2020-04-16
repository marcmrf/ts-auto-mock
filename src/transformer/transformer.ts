import * as ts from 'typescript';
import { TsAutoMockOptions } from '../options/options';
import { CustomFunction } from './matcher/matcher';
import { getMock, getMockForList, getMockWithRandomValues, storeRegisterMock } from './mock/mock';
import { baseTransformer } from './base/base';

const customFunctions: CustomFunction[] = [
  {
    sourceDts: 'create-mock.d.ts',
    sourceUrl: '../create-mock.d.ts',
  },
  {
    sourceDts: 'create-mock-list.d.ts',
    sourceUrl: '../create-mock-list.d.ts',
  },
  {
    sourceDts: 'register-mock.d.ts',
    sourceUrl: '../register-mock.d.ts',
  },
  {
    sourceDts: 'create-mock-with-random-values.d.ts',
    sourceUrl: '../create-mock-with-random-values.d.ts',
  },
];

const transformer:
(program: ts.Program, options?: TsAutoMockOptions) => ts.TransformerFactory<ts.SourceFile> =
    baseTransformer(visitNode, customFunctions);

export { transformer };

function visitNode(node: ts.CallExpression, declaration: ts.FunctionDeclaration): ts.Node {
  const nodeToMock: ts.TypeNode = node.typeArguments[0];

  if (isCreateMock(declaration)) {
    return getMock(nodeToMock, node);
  }

  if (isCreateMockWithRandomValues(declaration)) {
    return getMockWithRandomValues(nodeToMock, node);
  }

  if (isCreateMockList(declaration)) {
    return getMockForList(nodeToMock, node);
  }

  if (isRegisterMock(declaration)) {
    return storeRegisterMock(nodeToMock, node);
  }

  return node;
}

function isCreateMock(declaration: ts.FunctionDeclaration): boolean {
  return declaration.name && declaration.name.getText() === 'createMock';
}

function isCreateMockList(declaration: ts.FunctionDeclaration): boolean {
  return declaration.name && declaration.name.getText() === 'createMockList';
}

function isRegisterMock(declaration: ts.FunctionDeclaration): boolean {
  return declaration.name && declaration.name.getText() === 'registerMock';
}

function isCreateMockWithRandomValues(declaration: ts.FunctionDeclaration): boolean {
  return declaration?.name?.getText() === 'createMockWithRandomValues';
}
