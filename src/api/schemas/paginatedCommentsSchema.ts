/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * MyApp API
 * OpenAPI spec version: 1.0.0
 */
import type { CommentSchema } from './commentSchema';

export interface PaginatedCommentsSchema {
  comments: CommentSchema[];
  page: number;
  size: number;
  total: number;
}
