<script>
    import ManhattanProject from '$lib/components/homepage/ManhattanProject.svelte';
    import SectionHeader from '$lib/components/homepage/SectionHeader.svelte';

    export let name = "Hamilton Place";
</script>

<h1 class="overflow-hidden sr-only" style="text-indent: -999em;">{name}</h1>

<ManhattanProject />

<SectionHeader />