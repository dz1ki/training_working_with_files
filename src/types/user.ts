export type ReqUserDTO = {
  email: string;
  id: number;
};

export type RegistrationDTO = {
  body: {
    firstName: string;
    lastName: string;
    userEmail: string;
    password: string;
  };
};

export type AuthorizationDTO = {
  body: {
    email: string;
    password: string;
  };
};

export type DeleteUserDto = {
  user: ReqUserDTO;
};

export type oneUserDTO = {
  user: ReqUserDTO;
};

export type UpdateUserDTO = {
  user: ReqUserDTO;
  body: {
    firstName?: string;
    lastName?: string;
    newUserEmail?: string;
    password?: string;
  };
};
