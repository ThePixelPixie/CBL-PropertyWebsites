<script>
    import GenericHeader from './components/GenericHero.svelte';
</script>

<svelte:head>
    <script type="text/javascript" id="mapplic-script" src="https://mapplic.com/mapplic.js"></script>
</svelte:head>

<GenericHeader />

<main role="document" class="overflow-hidden px-12 pt-12 pb-18">
    <div id="Map" class="m-auto w-full mx-auto min-h-96 h-auto overflow-hidden z-40">
        <mapplic-map data-json="https://mapplic.com/getMapData?id=vlcUgrQd4wCkjINjkkSC" id="my-mapplic-map"></mapplic-map>
    </div>
</main>