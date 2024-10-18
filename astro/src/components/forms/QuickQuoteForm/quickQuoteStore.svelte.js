import { writable } from 'svelte/store';

const newPackage = () => {
    return {
        type: "Flyer",
        length: 40,
        width: 30,
        height: 1,
        weight: 1,
        qty: 1
    }
}

const defaultFormData = () => {
    return {
        isInternational: false,
        isImport: true,
        fromCountry: "",
        fromTown: "",
        fromType: "Business",
        toCountry: "",
        toTown: "",
        toType: "Business",
        insuranceRequired: false,
        description: "",
        value: 0,
        packages: [newPackage()],
        acceptsTerms: false,
        acceptsDeclaration: false
    }
}

const formData = writable(defaultFormData());

const addPackage = () => {
    formData.update($ => {
        $.packages.push(newPackage());
        return $;
    })
}

const removePackage = (i) => {
    formData.update($ => {
        if ($.packages.length > 1) $.packages.splice(i, 1);
        return $;
    })
}

const editPackage = (i, key, value) => {
    formData.update($ => {
        const pkgs = [...$.packages];
        pkgs[i][key] = value;
        $.packages = pkgs;
        return $;
    })
}

const changePackageQty = (i, by) => {
    formData.update($ => {
        const pkgs = [...$.packages];
        const pkg = pkgs[i];
        let qty = pkg.qty + by;
        if (qty <= 0) return $;
        pkgs[i].qty += by;
        $.packages = pkgs;
        return $;
    })
}

const resetForm = () => {
    formData.update(() => {
        return defaultFormData();
    })
}

const collectionTypes = [
    "Business",
    "Residential",
    "Farm/Game reserve",
    "Freightguard",
    "Mine/Powerstation",
    "Chainstore/Dc",
    "Embassy"
]

const packageTypes = [
    "Flyer",
    "Box",
    "Crate",
    "Pallet"
]

export {
    formData,
    addPackage,
    removePackage,
    editPackage,
    changePackageQty,
    resetForm,
    collectionTypes,
    packageTypes
}