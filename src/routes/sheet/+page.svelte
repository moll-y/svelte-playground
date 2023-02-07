<script lang="ts">
	const values = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
		27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
		13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
		37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
		61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
		85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
		14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
		38, 39, 40, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
		24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
		48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
		72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
		96, 97
	];

	let start = 0;
	let end = 10;

	let viewport = [];
	$: viewport = values.slice(start, end);

	let top = 0;
	$: top = `${end}px`;

	function handleWheel(event) {
		if (event.deltaY < 0) {
			if (start === 0) {
				console.log("can't go futher up");
				return;
			}

			start -= 1;
			end -= 1;
		} else {
			if (end === values.length) {
				console.log("can't go futher down");
				return;
			}

			start += 1;
			end += 1;
		}
	}
</script>

<h1>Sheet</h1>

<div class="absolute w-full border-2 border-red-600">
	<ul
		on:wheel|preventDefault={handleWheel}
		class="text-3xl font-bold underline border-2 border-green-600"
	>
		{#each viewport as v}
			<li>{v}</li>
		{/each}
	</ul>

	<!-- Scroll -->
	<div class="absolute right-0 top-0 bottom-0 w-6 border-2 border-blue-600">
		<div class="absolute w-full h-6 bg-black" style:top />
	</div>
</div>
