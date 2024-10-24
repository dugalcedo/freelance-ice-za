// @ts-check

/** 
 * @typedef MenuItem
 * @property {string} text
 * @property {string | null} href
 * @property {Function | null} fn 
 */

import { openModal } from "../../modals/modalStore.svelte.js";

/** @type MenuItem[] */
const headerMenu = [
    {
        text: "Home",
        href: "/",
        fn: null
    },
    {
        text: "Login",
        href: null,
        fn: () => {
            openModal("auth")
        }
    },
    {
        text: "Tracking",
        href: "/tracking",
        fn: null
    },
    {
        text: "Contact",
        href: "/contact",
        fn: null
    }
];

export default headerMenu;