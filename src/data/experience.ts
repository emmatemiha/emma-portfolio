export interface Experience {
    id: number
    date: string
    title: string
    company: string
    description: string
}

export const experiences: Experience[] = [
    {
        id: 1,
        date: "2024 - Present",
        title: "Lending Library Assistant",
        company: "University of Canterbury (CSSE Department)",
        description: "I coordinate a program which distributes electronic kits to schools across New Zealand to introduce programming to students. The responsibilities include order and inventory management, quality checking products, packing items for shipment and managing email communications."
    },
    {
        id: 2,
        date: "2024 - Present",
        title: "Sales Assistant",
        company: "Hype DC",
        description: "I deliver one-on-one customer care, providing tailored product recommendations and upselling to meet individual needs. I consistently meet and work toward KPI targets, contributing to overall store performance."
    },
    {
        id: 3,
        date: "2021 - 2024",
        title: "Pharmacy Assistant",
        company: "Chemist Warehouse",
        description: "Performed general retail duties while also stepping up to supervise store operations on weekends in the absence of a manager."
    },
]