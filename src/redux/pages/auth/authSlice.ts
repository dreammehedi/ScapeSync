import { getUserToken } from "../../../utils/handleUserToken";
import { apiSlice } from "../../api/apiSlice";

type LoginPayload = {
  email: string;
  password: string;
  remember_me: boolean;
};

type RegisterPayload = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  terms: boolean;
};
export type UserData = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  email_verified_at: string | null;
  terms: boolean;
  role: string;
  reset_password_token?: string | null;
  reset_password_token_exp?: string | null;
  created_at: string;
  updated_at: string;
};

type LoginResponse = {
  status: boolean;
  message: string;
  token_type: string;
  token: string;
  data: UserData;
};

type RegisterResponse = {
  status: number;
  message: string;
  data: { otp: string; email: string };
};

type VerifyOtpPayload = {
  otp: string;
  email: string;
};

type VerifyOtpResponse = {
  status: boolean;
  message: string;
  token_type: string;
  token: string;
  data: UserData;
};

type RecentOtpResponse = {
  status: number;
  message: string;
  data: { otp: string };
};

type LogoutResponse = {
  status: number;
  message: string;
  data: [];
};

type GetUserResponse = {
  status: number;
  message: string;
  data: UserData;
};

export const authSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginPayload>({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation<RegisterResponse, RegisterPayload>({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: data,
      }),
    }),

    verifyOtp: builder.mutation<VerifyOtpResponse, VerifyOtpPayload>({
      query: (data) => ({
        url: "verify_otp",
        method: "POST",
        body: data,
      }),
    }),

    resendOtp: builder.mutation<RecentOtpResponse, { email: string }>({
      query: (data) => ({
        url: "resend_otp",
        method: "POST",
        body: data,
      }),
    }),

    forgotPassword: builder.mutation<
      { status: number; message: string; data: { otp: string } },
      { email: string }
    >({
      query: (data) => ({
        url: "forgot-password",
        method: "POST",
        body: data,
      }),
    }),

    resetPassword: builder.mutation<
      { status: number; message: string; data: [] },
      { password: string; password_confirmation: string; token: string }
    >({
      query: (data) => ({
        url: "reset-password",
        method: "POST",
        body: data,
      }),
    }),

    forgotVerifyOtp: builder.mutation<
      { status: number; message: string; data: { token: string } },
      { email: string; otp: string }
    >({
      query: (data) => ({
        url: "forgot-verify-otp",
        method: "POST",
        body: data,
      }),
    }),

    logout: builder.mutation<LogoutResponse, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
        headers: {},
      }),
    }),

    getUser: builder.query<UserData, void>({
      query: () => ({
        url: "user-detail",
        method: "GET",
        headers: {
          Authorization: `Bearer ${getUserToken()}`,
        },
      }),
      providesTags: ["User"],
      transformResponse: (response: GetUserResponse): UserData => ({
        ...response.data,
        email_verified_at: response.data.email_verified_at
          ? new Date(response.data.email_verified_at).toISOString()
          : null,
        created_at: new Date(response.data.created_at).toISOString(),
        updated_at: new Date(response.data.updated_at).toISOString(),
        reset_password_token_exp: response.data.reset_password_token_exp
          ? new Date(response.data.reset_password_token_exp).toISOString()
          : null,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyOtpMutation,
  useResendOtpMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useForgotVerifyOtpMutation,
  useResetPasswordMutation,
  useGetUserQuery,
} = authSlice;
