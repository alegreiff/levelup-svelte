<script lang="ts">
    import type { Emprendimientos } from '$lib/interfaces/emprendimientos';
    import Test from '$lib/Test.svelte'
    import '$db/start'
    export let data;
    //const emprende:Emprendimientos[] = data.data;
    //const {ep_res}  = data;
    $: ({ep_res, emprende } = data) ;
</script>

<Test />
<!-- <ul>
    {#each emprende as  emp}
        <h2>{emp.nombre}</h2>
        <img src="{emp.img}" alt="{emp.nombre}">
        <p>{ emp.img  }</p>
        {@html emp.contenido}
    {/each}
</ul> -->

