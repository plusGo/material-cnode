import {CnodeAuthor} from './cnode-author.model';

export interface CnodeReply {
  author?: CnodeAuthor;
  content?: string;
  create_at?: number;
  id?: string;
  is_uped?: boolean;
  reply_id?: string;
  ups?: string[];

}
