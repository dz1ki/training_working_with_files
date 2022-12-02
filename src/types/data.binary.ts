import { UserMiddlewaresDTO } from "./common";

export type GenerateDataDto = {
  body: { fileName: string; imageName: string; userEmail: string };
};

export type ListDocDTO = {
  user: UserMiddlewaresDTO;
};

export type FindOneDocDTO = {
  user: UserMiddlewaresDTO;
  query: {
    fileName: string;
  };
};
