<script>
    import { modalStore } from '../modalStore.svelte.js'
    import ModalLayout from '../ModalLayout.svelte';
</script>


<ModalLayout heading={$modalStore.heading}>
    <p>{@html $modalStore.body || "Generic modal"}</p>
</ModalLayout>
