<script>
    import { slide } from 'svelte/transition';
    let isOpen = false;

    function toggleAccordion() {
        isOpen = !isOpen;
    }
</script>

<style>
    .flex-2 {
        flex: 2;
    }
</style>

<div id="Hours" class="accordion p-0 w-full mx-auto">
    <button on:click={toggleAccordion} class="w-full flex text-center justify-between items-center px-4 py-2 rounded-full uppercase font-semibold text-white border-accent2 bg-accent2 focus:outline-none" class:shadow-lg={!isOpen}>
        Open Today <span>11:30am - 11pm</span>
        <i class="fas fa-chevron-down transform transition-transform duration-300 ml-3" class:rotate-180={isOpen}></i>
    </button>
    {#if isOpen}
        <div transition:slide={{ duration: 300 }} class="px-4 py-2 -mt-4 border border-t-0 shadow-lg text-center border-accent2">
            <ul id="HoursList" class="flex flex-col w-full md:w-1/2 my-0 mx-auto py-0 pt-5 pb-0 list-none">
                <li class="flex justify-evenly py-2 px-0 text-accent2 uppercase">
                    <span class="day flex-1 text-left font-bold">Mon</span>
                    <span class="time flex-2 flex justify-evenly font-bold"><span class="text-left">11:30am</span> - <span class="text-left">11pm</span></span>
                </li>
                <li class="flex justify-between py-2 px-0 uppercase">
                    <span class="day flex-1 text-left">Tue</span>
                    <span class="time flex-2 flex justify-evenly"><span class="text-left">11:30am</span> - <span class="text-left">11pm</span></span>
                </li>
                <li class="flex justify-between py-2 px-0 uppercase">
                    <span class="day flex-1 text-left">Wed</span>
                    <span class="time flex-2 flex justify-evenly"><span class="text-left">11:30am</span> - <span class="text-left">11pm</span></span>
                </li>
                <li class="flex justify-between py-2 px-0 uppercase">
                    <span class="day flex-1 text-left">Thu</span>
                    <span class="time flex-2 flex justify-evenly"><span class="text-left">11:30am</span> - <span class="text-left">11pm</span></span>
                </li>
                <li class="flex justify-between py-2 px-0 uppercase">
                    <span class="day flex-1 text-left">Fri</span>
                    <span class="time flex-2 flex justify-evenly"><span class="text-left">11:30am</span> - <span class="text-left">11pm</span></span>
                </li>
                <li class="flex justify-between py-2 px-0 uppercase">
                    <span class="day flex-1 text-left">Sat</span>
                    <span class="time flex-2 flex justify-evenly"><span class="text-left">11:30am</span> - <span class="text-left">11pm</span></span>
                </li>
                <li class="flex justify-between py-2 px-0 uppercase">
                    <span class="day flex-1 text-left">Sun</span>
                    <span class="time flex-2 flex justify-evenly"><span class="text-left">11:30am</span> - <span class="text-left">11pm</span></span>
                </li>
            </ul>
        </div>
    {/if}
</div>