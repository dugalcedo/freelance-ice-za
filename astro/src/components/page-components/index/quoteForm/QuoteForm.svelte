<script>
    import QuoteFormPackages from './QuoteFormPackages.svelte'
    import QuoteFormHead from './QuoteFormHead.svelte'
    import QuoteFormTop from './QuoteFormTop.svelte'
    import QuoteFormBottom from './QuoteFormBottom.svelte'
    import { openModal, openGenericModal } from '../../../modals/modalStore.svelte.js'
    import { isPreview } from '../../../../assets/util/index.js'

    const shippingTypes = [
        'Business',
        'Residential',
        'Farm/Game reserve',
        'Freightguard',
        'Mine/Powerstation',
        'Chainstore/Dc',
        'Embassy'
    ]

    const defaultPackage = () => {
        return {
            length: "",
            width: "",
            height: "",
            weight: "",
            qty: 1,
            type: "Flyer"
        }
    }

    const getFormData = () => {
        return {
            isInternational,
            isImport,
            from,
            to,
            fromCountry,
            toCountry,
            senderType,
            recipientType,
            packages,
            insuranceRequired,
            descriptionOfGoods,
            valueOfGoods,
            currency,
            acceptsTerms,
            acceptsDeclaration
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = getFormData();
        
        if (isPreview()) {
            console.log(formData);
            openGenericModal(
                "This window only appears in the site preview.",
                `
                    Here is the formData collected:
                    <pre>
${JSON.stringify(formData, null, 2)}
                    </pre>
                `
            )
        } else {

        }
    }

    // state
    let isInternational = false;
    let isImport = false;
    let from = "";
    let to = "";
    let fromCountry = "";
    let toCountry = "";
    let senderType = "Business";
    let recipientType = "Business";
    let packages = [defaultPackage()];
    let insuranceRequired = false;
    let descriptionOfGoods = "";
    let valueOfGoods = "";
    let currency = "ZAR";
    let acceptsTerms = false;
    let acceptsDeclaration = false;
    
    function addPackage() {
        packages = [
            ...packages,
            defaultPackage()
        ]
    }

    function removePackage(i) {
        const newPackages = [...packages];
        newPackages.splice(i, 1);
        packages = newPackages;
    }


</script>

<form on:submit|preventDefault={handleSubmit}>
    <QuoteFormHead bind:isInternational={isInternational} />
    <QuoteFormTop
        isInternational={isInternational}
        shippingTypes={shippingTypes}
        bind:isImport={isImport}
        bind:from={from}
        bind:to={to}
        bind:fromCountry={fromCountry}
        bind:toCountry={toCountry}
        bind:senderType={senderType}
        bind:recipientType={recipientType}
    />
    <QuoteFormPackages
        bind:packages={packages}
        {addPackage}
        {removePackage}
    />
    <QuoteFormBottom
        bind:insuranceRequired={insuranceRequired}
        bind:descriptionOfGoods={descriptionOfGoods}
        bind:valueOfGoods={valueOfGoods}
        bind:currency={currency}
        bind:acceptsTerms={acceptsTerms}
        bind:acceptsDeclaration={acceptsDeclaration}
    />
    <div class="backgrounds">
        <!-- <img src="/images/world-outline.jpg" alt="map of world" class:hidden={!isInternational}> -->
        <!-- <img src="/images/south-africa-outline.jpg" alt="map of south africa" class:hidden={isInternational}> -->
    </div>
</form>

<style>
    form {
        width: 700px;
        max-width: 100%;
        background-color: #ebebeb;
        color: var(--slate);
        /* padding: 1rem; */
        position: relative;
        border-radius: 1rem .5rem 1rem .5rem;
        border: 5px solid var(--gray);
        border-bottom: 15px solid var(--accent2);
        /* outline: 2px solid var(--accent); */
    }

    form > *:not(.backgrounds) {
        position: relative;
        z-index: 2;
    }


    

    .backgrounds {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }


</style>