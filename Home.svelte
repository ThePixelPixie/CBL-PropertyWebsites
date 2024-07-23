<script>
    import ManhattanProject from './components/homepage/ManhattanProject.svelte';
    import BrandBrouhaha from './components/homepage/BrandBrouhaha.svelte';
    import TripleDoubleCircle from './components/homepage/TripleDouble-circle.svelte';
    import ShoppingBags from './components/homepage/ShoppingBags.svelte';

    import SectionWrapper from './components/shell/SectionWrapper.svelte';

    let sections = [
        TripleDoubleCircle,
        BrandBrouhaha,
    ]

    export let name = "Hamilton Place";
</script>

<h1 style="text-indent: -999em;">{name}</h1>

<ManhattanProject />

<main class="overflow-x-hidden">
    {#each sections as Section, index}
    <SectionWrapper {index}>
        <Section />
    </SectionWrapper>
    {/each}

    <ShoppingBags />
</main>