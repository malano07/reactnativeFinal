/*import { base_url } from "../database"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const shopApi = createApi({
    reducerPath:"shopApi",
    baseQuery:fetchBaseQuery({baseUrl:base_url}),
    endpoints:(builder)=> ({
        getProducts: builder.query({
            query: (category) => {
                console.log("🔗 Conectando a Firebase en:", `${base_url}products.json?orderBy="category"&equalTo="${category}"`);
                return `products.json?orderBy="category"&equalTo="${category}"`;
            },
            transformResponse: (response) => {
                console.log("📡 Respuesta de Firebase (productos):", response);
                return response;
            }
        }),
        getCategories: builder.query({
            query: () => {
                console.log("🔗 Consultando categorías en:", `${base_url}categories.json`);
                return "categories.json";
            },
            transformResponse: (response) => {
                console.log("📡 Respuesta de Firebase (categorías):", response);
                return response;
            }
        }),
    })
})

export const { useGetProductsQuery ,useGetCategoriesQuery } = shopApi; */

import { base_url } from "../database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (category) => {
                if (category) {
                    console.log("🔗 Conectando a Firebase en:", `${base_url}products.json?orderBy="category"&equalTo="${category}"`);
                    return `products.json?orderBy="category"&equalTo="${category}"`;
                } else {
                    console.log("🔗 Obteniendo todos los productos desde:", `${base_url}products.json`);
                    return `products.json`;
                }
            },
            transformResponse: (response) => {
                console.log("📡 Respuesta de Firebase (productos):", response);
                return response;
            }
        }),
        getCategories: builder.query({
            query: () => {
                console.log("🔗 Consultando categorías en:", `${base_url}categories.json`);
                return "categories.json";
            },
            transformResponse: (response) => {
                console.log("📡 Respuesta de Firebase (categorías):", response);
                return response;
            }
        }),
    })
});

export const { useGetProductsQuery, useGetCategoriesQuery } = shopApi;

