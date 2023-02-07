import type { PageServerLoad, Actions } from './$types'

export const load = (async ({ params, fetch }) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/todos/${params.id}`)
  if (!res.ok) {
    throw new Error("couldn't fetch data")
  }

  const todo = await res.json()
  return { todo }
}) satisfies PageServerLoad

export const actions = {
  default: async ({ params, request }) => {
    const data = await request.formData()
    const isCompleted = data.get('isCompleted') === 'on'

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/todos/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: +params.id, isCompleted }),
    })

    if (!res.ok) {
      throw new Error("couldn't put todo with id " + params.id + ". status code " + res.status)
    }

    return { success: true }
  }
} satisfies Actions
