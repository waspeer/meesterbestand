import { EitherResponse, ValueObject, Result } from '@forestfire/core';

import * as Errors from './errors';

export interface ProjectPathProps {
  path: string;
}

type CreateResponse = EitherResponse<Errors.ErrorTypes, ProjectPath>;

/**
 * ProjectPath value object.
 */
export default class ProjectPath extends ValueObject<ProjectPathProps> {
  get value(): ProjectPathProps['path'] {
    return this.props.path;
  }

  /**
   * Creates a ProjectPath.
   *
   * Constructor is private to enfore model invariants.
   *
   * @param {ProjectPathProps} props
   */
  private constructor(props: ProjectPathProps) {
    super(props);
  }

  /**
   * Creates a ProjectPath.
   *
   * @param {ProjectPathProps} props
   */
  static create(props: ProjectPathProps): CreateResponse {
    const { path } = props;

    if (!ProjectPath.isValidProjectPath(path)) {
      return Result.fail(Errors.invalidPath(path));
    }

    const projectPath = new ProjectPath(props);
    return Result.ok(projectPath);
  }

  /**
   * Determines whether the passed string is a valid project path.
   *
   * @param {string} path
   */
  static isValidProjectPath(path: string): boolean {
    return /\sProject$/.test(path);
  }

  /**
   * Strips a project path to just 'ID NAME'.
   *
   * Returns null when passed path is invalid.
   *
   * @param {string} path
   */
  static removePathSegments(path: string): string | null {
    const matches = path.match(/\/([^/]+?)\sProject/);
    return matches ? matches[1].trim() : null;
  }
}
