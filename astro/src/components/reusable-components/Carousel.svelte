<script>
    import { onMount } from 'svelte'

    // width: default width of carousel
    export let width = "100%"
    // ar: aspect ratio of the carousel to 1
    export let ar = 3
    export let height = undefined;
    // display: 
    export let display = "block";
    // speed: ms transition
    export let speed = 1750;
    // auto: ms auto slide
    export let auto = null;

    // state
    let mounting = true;
    let interval;

    const handleCarousel = (car, i) => {
        // state
        const items = car.querySelectorAll(`:scope .carousel-items > *`)
        const [leftBtn, rightBtn] = car.querySelectorAll(`:scope .carousel-controls button`)
        let index = 0;
        let stagedItems = [];
        let shifting = false;

        // utilities
        const show = item => item.style.display = "block";
        const hide = item => item.style.display = "none";

        // 
        function deriveStagedItems() {
            stagedItems = [
                items[(index - 1) >= 0 ? (index - 1) : (items.length - 1)],
                items[index],
                items[(index + 1) < items.length ? (index + 1) : 0]
            ]
        }
        function positionItems() {
            deriveStagedItems()
            const [left, middle, right] = stagedItems;
            // console.log('index', index)
            // console.log(`left, middle, right`, left, middle, right)
            items.forEach(item => {
                // hide items
                if (!stagedItems.includes(item)) {
                    hide(item)
                } else {
                    show(item)
                }
            })

            // position others
            left.style.translate = `-100% 0`;
            middle.style.translate = `0 0`;
            right.style.translate = `100% 0`;
        }
        function shift(toRight) {
            if (shifting) return;
            shifting = true;
            const middle = stagedItems[1];
            const next = stagedItems[toRight ? 2 : 0];
            const hidden = stagedItems[toRight ? 0 : 2];
            hide(hidden);
            middle.style.translate = `${toRight ? -100 : 100}% 0`
            next.style.translate = `0 0`
            const n = index + (toRight ? 1 : -1); 
            shiftIndex(n < 0 ? (items.length-1) : n >= items.length ? 0 : n);
        }
        function shiftIndex(newIndex) {
            index = newIndex;
            setTimeout(() => {
                positionItems()
                shifting = false;
            }, speed);
        }
        function resetClickInterval() {
            clearInterval(interval);
            if (typeof auto === "number" && auto >= speed) {                
                interval = setInterval(() => {
                    rightBtn.click();
                }, auto);
            }
        }


        // MOUNT
        // make all items carousel-items
        items.forEach(item => {
            item.classList.add('carousel-item')
            item.style.transition = `all ${speed}ms`;
        })

        positionItems();

        // add button listeners
        rightBtn.addEventListener("click", () => {
            shift(true)
            resetClickInterval()
        })
        leftBtn.addEventListener("click", () => {
            shift(false)
            resetClickInterval()
        })

        // auto
        resetClickInterval();

        mounting = false;
    }
</script>

<div 
    use:handleCarousel
    class="carousel"
    style="
        width: {width};
        {height ? `
            height: ${height};
        `:`
            aspect-ratio: ${ar}/1;
        `}
        display: {mounting ? "none" : display};
    "
>
    <div class="carousel-items">
        <slot />
    </div>
    <div class="carousel-controls">
        <button class="arrow-btn">
            <img src="/images/icons/arr-left.svg" alt="">
        </button>
        <button class="arrow-btn">
            <img src="/images/icons/arr-right.svg" alt="">
        </button>
    </div>
</div>

<style>
    .carousel {
        position: relative;
    }

    .carousel-items {
        height: 100%;
        width: 100%;
        overflow: hidden;
        position: relative;
        z-index: 1;
    }

    :global(.carousel-item) {
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0px;
        translate: 0 0;
    }


    .carousel-controls {
        position: absolute;
        z-index: 2;
        top: 50%;
        width: 100%;
        translate: 0 -50%;
        display: flex;
        justify-content: space-between;
        padding: 0 2rem;
    }

    .carousel-controls button {
        background: none;
        border: 0;
        padding: 1.5rem;
        aspect-ratio: 1;
        border-radius: 50%;
        transition: all 125ms;
    }

    .carousel-controls button:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }

</style>