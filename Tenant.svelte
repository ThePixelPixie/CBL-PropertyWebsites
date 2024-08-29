<script>
    import TenantHero from './components/tenants/TenantHero.svelte';
    import TenantSpecs from './components/tenants/TenantSpecs.svelte';
    //import TenantMore from './components/tenants/TenantMore.svelte';
    import TenantDeals from './components/tenants/TenantDeals.svelte';
    import TenantAlsoLike from './components/tenants/TenantAlsoLike.svelte';

    import SectionWrapper from './components/shell/SectionWrapper.svelte';

    let sections = [
        TenantSpecs,
        //TenantMore,
        TenantDeals
    ]
</script>

<TenantHero />

<main role="document" class="w-screen overflow-x-hidden pb-9">

    {#each sections as Section, index}
    <SectionWrapper {index}>
        <Section />
    </SectionWrapper>
    {/each}
    <TenantAlsoLike />

</main>