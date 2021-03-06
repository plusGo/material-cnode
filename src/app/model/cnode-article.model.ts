import {CnodeAuthor} from './cnode-author.model';

export interface CnodeArticle {
  author?: CnodeAuthor;
  author_id?: string;
  content?: string;
  create_at?: number;
  good?: boolean;
  id?: string;
  is_collect?: boolean;
  last_reply_at?: number;
  reply_count?: number;
  title?: string;
  tab?: string;
  top?: string;
  visit_count?: number;
}
