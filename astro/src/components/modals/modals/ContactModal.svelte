<script>
    import ModalLayout from "../ModalLayout.svelte";
    import CopyButton from "../../reusable-components/CopyButton.svelte";
</script>


<ModalLayout heading="Contact Us">
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
</ModalLayout>
    

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