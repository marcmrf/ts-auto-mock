import * as ts from 'typescript';
const VARIABLE_DECLARATION_PREFIX = "_s";
const VARIABLE_PARAMETER_SET_PREFIX = "_";
export function GetMockDeclarationName(name: ts.Identifier): ts.Identifier {
    return ts.createIdentifier(VARIABLE_DECLARATION_PREFIX + name.escapedText);
}

export function GetMockSetParameterName(name: ts.Identifier): ts.Identifier {
    return ts.createIdentifier(VARIABLE_PARAMETER_SET_PREFIX + name.escapedText);
}