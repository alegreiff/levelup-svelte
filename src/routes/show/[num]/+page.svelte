<script lang="ts">

export let data;
$: ({ episode, user } = data)
</script>
<h1>{ user.name  }</h1>
<h1>{episode.title}</h1>
{@html episode.html}