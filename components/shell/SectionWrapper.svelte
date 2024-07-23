<script>
    import SVGBorderTop from './SVGBorderTop.svelte';
    import SVGBorderBottom from './SVGBorderBottom.svelte';
    export let index;
</script>

<section class="w-full relative">
    {#if (index + 1) % 2 === 0}
        <SVGBorderTop />
    {/if}
    <slot></slot>
    {#if (index + 1) % 2 === 0}
        <SVGBorderBottom />
    {/if}
</section>