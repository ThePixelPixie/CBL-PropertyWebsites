<script>
    import ManhattanProject from './components/homepage/ManhattanProject.svelte';
    //import ShoppingBags from './components/homepage/ShoppingBags.svelte';
    import SectionHeader from './components/homepage/SectionHeader.svelte';
    //import DealsEventsScrollGrid from './components/DealsEventsScrollGrid.svelte';

    export let name = "Hamilton Place";
</script>

<h1 class="overflow-hidden" style="text-indent: -999em;">{name}</h1>

<ManhattanProject />

<!-- <ShoppingBags /> -->

<main class="w-screen h-auto pb-24">
    <SectionHeader />
</main>

<!-- <DealsEventsScrollGrid /> -->

<!-- <Instagram /> -->