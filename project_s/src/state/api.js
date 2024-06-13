import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api =createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL}),
    reducerPath: "main", //Name of this particular slide...
    tagTypes: [],
    //All these terms are from REDUX toolkit query...
    endpoints: (build) => ({
        postAiText: build.mutation({
            query: (payload) => ({
                url: "openai/text",
                method: "POST",
                body: payload,
            }),
        }),
        postAiCode: build.mutation({
            query: (payload) => ({
                url: "openai/code",
                method: "POST",
                body: payload,
            }),
        }),
        postAiAssist: build.mutation({
            query: (payload) => ({
                url: "openai/assist",
                method: "POST",
                body: payload,
            }),
        }),
        postLogin: build.mutation({
            query: (payload) => ({
                url: "login",
                method: "POST",
                body: payload,
            }),
        }),
        postSignUp: build.mutation({
            query: (payload) => ({
                url: "signup",
                method: "POST",
                body: payload,
            }),
        }),
    }),
});

export const { usePostAiTextMutation ,usePostAiCodeMutation, usePostAiAssistMutation, usePostLoginMutation, usePostSignUpMutation } = api;