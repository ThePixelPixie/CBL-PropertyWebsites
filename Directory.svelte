<script>
    import IntHeader from './components/IntHeader.svelte';
</script>

<IntHeader />

<main role="document" class="overflow-x-hidden p-12">
    <div id="Map" class="m-auto w-full mx-auto min-h-96 h-auto overflow-hidden z-40">
        <mapplic-map data-json="https://mapplic.com/getMapData?id=Rz9FWUANTnM2DFsSHD7R" id="my-mapplic-map"></mapplic-map>
        <script type="text/javascript" id="mapplic-script" src="https://mapplic.com/mapplic.js"></script>
    </div>
</main>