<script>
    import DealEntryHero from '$lib/components/DealEntryHero.svelte';
    import DealSpecs from '$lib/components/dealsevents/DealSpecs.svelte';
    import RelatedDeals from '$lib/components/dealsevents/RelatedDeals.svelte';
</script>

<DealEntryHero />

<main role="document" class="deal-entry p-0">
    <DealSpecs />

    <RelatedDeals />
</main>