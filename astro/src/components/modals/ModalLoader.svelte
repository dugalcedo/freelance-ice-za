<script>
    import { fade } from 'svelte/transition';
    import TermsAndConditionsModal from './modals/TermsAndConditionsModal.svelte';
    import DeclarationOfWeightsModal from './modals/DeclarationOfWeightsModal.svelte';
    import GenericModal from './modals/GenericModal.svelte';
    import NumberModal from './modals/NumberModal.svelte';
    import ContactModal from './modals/ContactModal.svelte';
    import { modalStore, closeModal } from './modalStore.svelte.js';

    // array of strings
    export let modalIds = [];

    const allModals = {
        termsAndConditions: TermsAndConditionsModal,
        declarationOfWeights: DeclarationOfWeightsModal,
        generic: GenericModal,
        number: NumberModal,
        contact: ContactModal
    }

</script>

{#each Object.entries(allModals) as [id, modal], i (modal)}
    {#if modalIds.includes(id)}
        {#if $modalStore.openModalIds.includes(id)}
            <div 
                transition:fade
                class="modal-backdrop" 
                style="z-index: {10000+i};" 
                tabindex="-1"
                role="button"
                on:click|self={() => closeModal(id)}
                on:keypress|self={() => closeModal(id)}
            >
                <svelte:component this={modal} />
            </div>
        {/if}
    {/if}
{/each}