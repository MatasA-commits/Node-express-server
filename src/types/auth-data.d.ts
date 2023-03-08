type AuthData = {
  email: UserEntity['email'],
  role: UserEntity['role'],
};

type DecodedAuthData = Data & { iat: number };
