import React, { useState } from "react";

const Header = () => {
    // State to track the currently open dropdown
    const [openDropdown, setOpenDropdown] = useState(null);

    // Data structure to define the dropdown items
    const dropdowns = [
        {
            title: "Laparoscopy",
            items: ["Hernia", "Appendicitis", "Gallbladder stone"],
        },
        {
            title: "Urology",
            items: [
                "Circumcision",
                "Kidney stone",
                "Hydrocele",
                "Frenuloplasty",
                "Genitourinary fistula",
                "Kidney transplant",
                "Prostate enlargement",
            ],
        },
        {
            title: "Cosmetic",
            items: [
                "Gynecomastia",
                "Lipoma",
                "Mole Removal",
                "Hair Transplant",
                "Breast Lift",
                "Sebaceous Cyst",
                "Rhinoplasty",
                "Breast Augmentation",
                "Axillary Breast",
                "Tummy Tuck",
                "Breast Lump",
                "Breast Reduction",
                "Cleft Lip",
                "Hymenoplasty",
                "Vaginoplasty",
                "Labiaplasty",
            ],
        },
        {
            title: "Orthopedics",
            items: [
                "ACL tear",
                "Disc injury",
                "Joint replacement",
                "Knee Arthroscopy",
                "Rotator cuff repair",
                "Knee Replacement",
                "Carpal Tunnel Syndrome",
                "ACL Reconstruction",
                "Meniscus Tear Treatment",
                "Hip Replacement",
                "Spine Surgery",
                "Shoulder Dislocation",
                "Shoulder Replacement",
            ],
        },
        {
            title: "Ophthalmology",
            items: [
                "Cataract",
                "Lasik Surgery",
                "Retinal Detachment",
                "Glaucoma Treatment",
                "Squint Surgery",
                "Diabetic Retinopathy",
                "Vitrectomy",
            ],
        },
        {
            title: "Proctology",
            items: ["Piles", "Fissure", "Fistula", "Pilonidal Sinus"],
        },
        {
            title: "Vascular",
            items: ["Varicose Vein", "Varicocele", "Deep vein thrombosis (DVT)"],
        },
        {
            title: "ENT",
            items: [
                "Tympanoplasty",
                "Adenoidectomy",
                "Sinus Treatment",
                "Septoplasty",
                "Mastoidectomy",
                "FESS Surgery",
                "Thyroidectomy",
                "Tonsillectomy",
                "Stapedectomy",
                "Myringotomy",
            ],
        },
        {
            title: "Gynaecology",
            items: [
                "Uterine Fibroids",
                "MTP",
                "Uterus Removal",
                "Ovarian Cyst",
                "Bartholin Cyst",
                "Endometriosis",
                "Adenomyosis",
                "PCOS-PCOD",
            ],
        },
        {
            title: "Fertility",
            items: [
                "IVF Treatment",
                "IUI Treatment",
                "Female Infertility",
                "Male Infertility",
                "Egg Freezing",
            ],
        },
    ];

    return (
        <header>
            <div className="logo">
                <img
                    src="https://i.ibb.co/VmqM98r/Logo.jpg"
                    alt="Care Connect Logo"
                    className="logo-image"
                />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Location" />
                <button>Search</button>
            </div>
            <nav>
                <a href="#">About</a>
                <a href="#">Language</a>
                <a href="#">Book your consultation</a>
            </nav>
            <div className="menu">
                {dropdowns.map((dropdown, index) => (
                    <div
                        className="dropdown"
                        key={index}
                        onMouseEnter={() => setOpenDropdown(index)}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <a href="#" className="dropdown-toggle">
                            {dropdown.title}
                        </a>
                        {openDropdown === index && (
                            <ul className="dropdown-menu">
                                {dropdown.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <a href="#">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                ))}
            </div>
        </header>
    );
};

export default Header;
