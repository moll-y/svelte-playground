<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let checked = data.todo.isCompleted;
</script>

<h1>Todo {data.todo.id}</h1>
<h2>Sentence: {data.todo.sentence}</h2>
<h3>Done: {data.todo.isCompleted}</h3>

<form method="POST">
	<input type="checkbox" name="isCompleted" bind:checked />
	<button>Submit</button>
</form>
