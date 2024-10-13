import { writable } from "svelte/store";

const modalStore = writable({
    openModalIds: []
});

const openModal = id => {
    console.log('opening')
    modalStore.update($ => {
        if ($.openModalIds.includes(id)) return $;
        $.openModalIds = [...$.openModalIds, id];
        return {...$};
    })
}

const closeModal = id => {
    modalStore.update($ => {
        const newIds = [...$.openModalIds];
        const index = newIds.findIndex(x => x === id);
        newIds.splice(index, 1);
        $.openModalIds = newIds;
        return {...$};
    })
}

export {
    modalStore,
    openModal,
    closeModal
}