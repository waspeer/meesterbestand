import { Result } from '@forestfire/core';

import pathFixture from '#test/fixtures/project-path';

import * as ProjectPathErrors from './errors';
import ProjectPath from './project-path';

describe('ProjectPath', () => {
  describe('constructor', () => {
    it('should construct when provided with valid props', () => {
      const props = pathFixture();
      const result = ProjectPath.create(props);

      expect(Result.isResult(result)).toBe(true);
      expect(result.isSuccess()).toBe(true);
      expect(result.value).toBeInstanceOf(ProjectPath);
      expect(result.value.value).toBe(props.path);
    });

    it('should return a failed result when provided with invalid path', () => {
      const props = pathFixture('invalid-path');
      const result = ProjectPath.create(props);

      expect(Result.isResult(result)).toBe(true);
      expect(result.isFailure() && result.error.type).toBe(
        ProjectPathErrors.ErrorTypes.InvalidPath,
      );
    });
  });

  describe('.isValidProjectPath', () => {
    it('should return true when passed a valid project path', () => {
      expect(ProjectPath.isValidProjectPath(pathFixture().path)).toBe(true);
    });

    it('should return false when passed an invalid project path', () => {
      expect(ProjectPath.isValidProjectPath('bla.logic :(')).toBe(false);
    });
  });

  describe('.removePathSegments', () => {
    it('should strip path to ID NAME', () => {
      const idName = 'b009 ruhr';
      const path = `~/Wanz/projects/${idName} Project`;

      expect(ProjectPath.removePathSegments(path)).toBe(idName);
    });

    it('should return null when path is invalid', () => {
      expect(ProjectPath.removePathSegments('bla')).toBeNull();
    });
  });
});
