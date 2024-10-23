<script>
    import EventEntryHero from '/components/EventEntryHero.svelte';
    import EventsSpecs from '/components/dealsevents/EventSpecs.svelte';
    import RelatedEvents from '/components/dealsevents/RelatedDeals.svelte';
</script>

<EventEntryHero />

<main role="document" class="deal-entry p-0">
    <EventsSpecs />

    <RelatedEvents />
</main>