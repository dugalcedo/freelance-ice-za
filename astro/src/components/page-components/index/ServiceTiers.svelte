<script>
    import { tiers } from './serviceTiers.js'
</script>

<section id="service-tiers">
    {#each tiers as t}
        <div class="service-tier">
            <h3>{t.title} &rarr;</h3>
            <p>
                <small>From</small>
                <span>R{t.from}</span>
            </p>
            <div>
                <ul>
                    {#each t.features as f}
                        <li>{@html f}</li>
                    {/each}
                </ul>
            </div>
            <a href="#">
                <button>
                    Get now &rarr;
                </button>
            </a>
        </div>
    {/each}
</section>