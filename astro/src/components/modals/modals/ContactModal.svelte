<script>
    import { closeModal } from "../modalStore.svelte.js";
    import CopyButton from "../../reusable-components/CopyButton.svelte";
</script>

<div class="modal-window">
    <div class="head">
        <h2>Contact us</h2>
        <button on:click={closeModal}>
            X
        </button>
    </div>
    <div class="body">
        <table>
            <tbody>
                <tr>
                    <th>Phone</th>
                    <td>
                        031 0300 300 <br>
                        <CopyButton text="031 0300 300">Copy</CopyButton>
                    </td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>
                        <a href="mailto:admin@ic-express.co.za">mailto:admin@ic-express.co.za</a> <br>
                        <CopyButton text="admin@ic-express.co.za">Copy</CopyButton>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<style>
    th, td {
        padding: 0.5rem;
    }

    th {
        padding-right: 1rem;
    }

    td {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>