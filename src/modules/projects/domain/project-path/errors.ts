import { DomainError } from '@forestfire/core';

/**
 * Types of errors that can occur
 */
export enum ErrorTypes {
  InvalidPath = 'INVALID_PATH',
}

/**
 * Creates the InvalidPath error
 */
export const invalidPath = DomainError.create(
  ErrorTypes.InvalidPath,
  (path: string) => `'${path}' is not a valid project path.`,
);
