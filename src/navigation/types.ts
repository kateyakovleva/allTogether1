export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

export type AuthStackParamList = {
  AuthChoice: undefined;
  Login: undefined;
  Register: undefined;
  EmailVerification: { email: string; isReset?: boolean };
  CreatePassword: { email: string };
  ResetPassword: undefined;
  ResetEmailVerification: { email: string };
  ResetCreatePassword: { email: string };
  ResetConfirmPassword: { email: string };
};

export type MainTabParamList = {
  Home: undefined;
  Categories: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  CategoryDetails: { category: any };
  EventDetails: { event: any };
};

export type ProfileStackParamList = {
  ProfileScreen: undefined;
  EditProfile: undefined;
  ChangePassword: undefined;
  CreateEvent: undefined;
  Calendar: undefined;
}; 