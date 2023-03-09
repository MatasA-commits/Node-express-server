type AuthData = {
  email: UserEntity['email'],
};

type DecodedAuthData = Data & { iat?: number };
