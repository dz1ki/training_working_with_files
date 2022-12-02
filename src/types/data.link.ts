import { UserMiddlewaresDTO } from "./common";

export type ResultSaveImage = {
  asset_id?: string;
  public_id?: string;
  version?: number;
  version_id?: string;
  signature?: string;
  width?: number;
  height?: number;
  format?: string;
  resource_type?: string;
  created_at?: Date;
  tags?: [];
  bytes?: number;
  type?: string;
  etag?: string;
  placeholder?: boolean;
  url?: string;
  secure_url?: string;
  folder?: string;
  access_mode?: string;
  original_filename?: string;
  api_key?: string;
};

export type AddImageDTO = {
  user: UserMiddlewaresDTO;
  body: {
    fileName: string;
  };
  files: [
    {
      fieldname: string;
      originalname: string;
      encoding: string;
      mimetype: string;
      buffer: Buffer;
    }
  ];
};

export type FindAllImageDTO = {
  user: UserMiddlewaresDTO;
};
