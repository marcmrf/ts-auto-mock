import * as ts from 'typescript';
import { SyntaxKind } from 'typescript';
import { MockIdentifierShouldUseRandomValues } from '../../mockIdentifier/mockIdentifier';
import { ArrayHelper } from '../../array/array';

export function GetStringDescriptor(): ts.Expression {
  return ts.createConditional(
    MockIdentifierShouldUseRandomValues,
    ts.createToken(SyntaxKind.QuestionToken),
    ts.createStringLiteral(randomizer(10)),
    ts.createToken(SyntaxKind.ColonToken),
    ts.createStringLiteral('')
  );
}

const listOfCharacters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function randomizer(length: number): string {
  const charactersLength: number = listOfCharacters.length;
  return ArrayHelper.ArrayFromLength(length).reduce((result: string) => result += listOfCharacters.charAt(Math.floor(Math.random() * charactersLength)), 'random_');
}
