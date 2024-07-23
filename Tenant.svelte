<script>
    import TenantHeader from './components/tenants/TenantHeader.svelte';
    import TenantSpecs from './components/tenants/TenantSpecs.svelte';
    import TenantMore from './components/tenants/TenantMore.svelte';
    import TenantAlsoLike from './components/tenants/TenantAlsoLike.svelte';

    import SectionWrapper from './components/shell/SectionWrapper.svelte';

    let sections = [
        TenantSpecs,
        TenantMore,
    ]
</script>

<TenantHeader />

<main role="document" class="overflow-x-hidden">

    {#each sections as Section, index}
    <SectionWrapper {index}>
        <Section />
    </SectionWrapper>
    {/each}
    <TenantAlsoLike />

</main>