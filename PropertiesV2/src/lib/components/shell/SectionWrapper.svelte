<script>
    import SVGBorderTop from './SVGBorderTop.svelte';
    import SVGBorderBottom from './SVGBorderBottom.svelte';
    export let index;
</script>

<section class="w-screen relative overflow-y-hidden h-auto">
    {#if (index + 1) % 2 === 0}
        <SVGBorderTop />
    {/if}
    <slot></slot>
    {#if (index + 1) % 2 === 0}
        <SVGBorderBottom />
    {/if}
</section>