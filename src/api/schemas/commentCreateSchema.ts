/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * MyApp API
 * OpenAPI spec version: 1.0.0
 */
import type { CommentCreateSchemaParentId } from './commentCreateSchemaParentId';

export interface CommentCreateSchema {
  content: string;
  /** ID of the parent comment if it's a reply */
  parent_id?: CommentCreateSchemaParentId;
}
