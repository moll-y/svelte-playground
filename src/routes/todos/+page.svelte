<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import type { PageData, ActionData } from './$types';
	import { enhance, deserialize } from '$app/forms';

	export let data: PageData;
	export let form: ActionData;

	let loading = false;
</script>

<h1>Todos</h1>

<form
	method="POST"
	action="?/create"
	class="border-2 border-yellow-600 p-6"
	use:enhance={({ form, data, action, cancel }) => {
		loading = true;
		return async ({ result, update }) => {
			loading = false;
			update();
		};
	}}
>
	<label for="sentence">
		<input type="text" name="sentence" class="border-2 border-red-600" /> Sentece
	</label>
	<button class="border-2 border-red-600" disabled={loading}>Submit</button>
</form>
{#if loading}
	<p>Loading...</p>
{/if}

{#if form?.success}
	<p>Form successfully submitted, the todo sentence is: {form.todo.sentence}</p>
{/if}

<ul class="border-2 border-red-600">
	{#each data.todos as { id, sentence, isCompleted } (id)}
		<li>
			<a href="/todos/{id}">
				{id} - {sentence} - {isCompleted}
			</a>
			<form use:enhance method="POST" action="?/delete&id={id}">
				<button>Delete</button>
			</form>
		</li>
	{:else}
		<p>The list is empty</p>
	{/each}
</ul>
