import { writable } from "svelte/store";

const modalStore = writable({
    openModalIds: [],
    onConfirm: null,
    min: 0,
    max: 0,
    def: 0,
    heading: null,
    body: null
});

const openModal = (id, options) => {
    console.log('opening')
    modalStore.update($ => {

        // update ids
        if ($.openModalIds.includes(id)) return $;
        $.openModalIds = [...$.openModalIds, id];

        // if confirm fn
        if (options) {
            $.onConfirm = options.onConfirm;
            $.min = options.min || 0;
            $.max = options.max || 1e9;
            $.def = options.def || options.min || 0;
            $.heading = options.heading;
            $.body = options.body;
        };

        return {...$};
    })
}

const closeModal = (id) => {
    modalStore.update($ => {
        // update ids
        const newIds = [...$.openModalIds];
        const index = newIds.findIndex(x => x === id);
        newIds.splice(index, 1);
        $.openModalIds = newIds;
        return {...$};
    })

    setTimeout(() => {
        modalStore.update($ => {
            // reset
            $.onConfirm = null;
            $.heading = null;
            $.body = null;
            return {...$};
        })
    }, 1000);
}

const openGenericModal = (heading, body) => {
    openModal("generic", {
        heading,
        body
    })
}

export {
    modalStore,
    openModal,
    closeModal,
    openGenericModal
}