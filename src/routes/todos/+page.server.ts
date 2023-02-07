import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types'

export const load = (async ({ fetch }) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/todos`)
  if (!res.ok) {
    throw new Error("could'nt fetch data")
  }

  const todos = await res.json()
  return { todos }
}) satisfies PageServerLoad

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    const sentence = data.get('sentence')

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/todos`, {
      method: "POST",
      body: JSON.stringify({ sentence }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!res.ok) {
      throw new Error("couldn't post todo with sentence " + sentence)
    }


    return { success: true, todo: { sentence } }
  },
  delete: async ({ url }) => {
    const id = url.searchParams.get('id')

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error("couldn't delete todo with id " + id)
    }
  }
} satisfies Actions
