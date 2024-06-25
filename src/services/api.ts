import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/'
import { Pratos } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getPrato: builder.query<Pratos, string>({
      query: (id) => `restaurante/${id}`
    })
  })
})

export const { getPrato } = api

export default api
