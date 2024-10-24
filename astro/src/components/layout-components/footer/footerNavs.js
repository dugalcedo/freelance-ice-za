// @ts-check

/** 
 * @typedef MenuItem
 * @property {string} text
 * @property {string | null} href
 * @property {Function} [fn] 
 */

/** @type MenuItem[] */
const mainNav = [
    {
        text: "Home",
        href: "/"
    },
    {
        text: "About us",
        href: "/about"
    },
    {
        text: "Services",
        href: "/services"
    },
    {
        text: "Tracking",
        href: "/tracking"
    },
    {
        text: "Shipping Tools",
        href: "/tools"
    },
    {
        text: "Support",
        href: "/support"
    },
    {
        text: "FAQs",
        href: "/faq"
    },
    {
        text: "Contact Us",
        href: "/contact"
    }
]

/** @type MenuItem[] */
const servicesNav = [
    {
        text: "Express Domestic Deliveries",
        href: "#"
    },
    {
        text: "Economy RoadFreight",
        href: "#"
    },
    {
        text: "CrossBorder RoadFreight",
        href: "#"
    },
    {
        text: "International AirFreight",
        href: "#"
    },
    {
        text: "International Courier",
        href: "#"
    },
    {
        text: "Valuable and Fragile Deliveries",
        href: "#"
    },
    {
        text: "Dedicated Drive-Away Deliveries",
        href: "#"
    },
    {
        text: "FCLs / LCLs",
        href: "#"
    }
]

/** @type MenuItem[] */
const toolsNav = [
    {
        text: "Packaging Guidelines",
        href: "#"
    },
    {
        text: "Customs Documents",
        href: "#"
    },
    {
        text: "Dangerous Goods / Lithium Batteries",
        href: "#"
    },
    {
        text: "Track a Shipment",
        href: "#"
    },
    {
        text: "Book a Shipment",
        href: "#"
    }
]

const socialsNav = [
    {
        icon: "facebook",
        href: "http://www.facebook.com/www.icexpress.co.za"
    },
    {
        icon: "whatsapp",
        href: "https://api.whatsapp.com/send?phone=27310300300&text=Hello%20I%20would%20like%20to%20chat"
    },
    {
        icon: "instagram",
        href: "https://www.instagram.com/icexpress.za/?hl=en"
    },
    {
        icon: "x-social",
        href: "https://twitter.com/ic_express"
    },
    {
        icon: "linkedin",
        href: "http://www.linkedin.com/company/icexpress?trk=top_nav_home"
    }
]

export {
    mainNav,
    servicesNav,
    toolsNav,
    socialsNav
}