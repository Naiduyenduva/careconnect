

const surgeryItems = [
    {
        id: 1,
        image : "https://i.ibb.co/Lh5MwdM/hernia-2.jpg",
        btnname : "Hernia",
        description: "Did you know that nearly 12% of adults in India suffer from hernia, one of the most prevalent medical conditions in the country? At CareConnect, we are committed to making hernia treatment stress-free and accessible. With advanced surgical techniques, experienced specialists, hassle-free insurance support, and personalized care, we ensure you get the best treatment without breaking the bank. Explore how Mykare Health can guide you through your journey to recovery with ease and confidence. Read on to learn more about hernia and why we are the trusted choice for affordable healthcare.",
        advantages: ["Quick 40-Minute Procedure","Minimally Invasive Keyhole Surgery","Comprehensive Insurance Assistance","Zero-Cost EMI Options","Pick-Up & Drop Services"]
    },
    {
        id: 2,
        image : "https://i.ibb.co/p0ghCv6/Gall-Stone.jpg",
        btnname : "GallStone",
        description: "",
        advantages: []
    },
    {
        id: 3,
        image : "https://i.ibb.co/TRVzHbm/circum.png",
        btnname : "Circumcision",
        description: "In recent years, evolving studies and changing cultural perspectives have led to a renewed focus on the practice of circumcision. At CareConnect, we are committed to offering a seamless experience for laser circumcision surgery, combining advanced technology with personalized care. Our expert surgeons ensure a safe, quick, and comfortable procedure at top-notch facilities, all at budget-friendly rates. Choose CareConnect for a modern, patient-first approach to circumcision surgery.",
        advantages: ["Quick 15-Minute Procedure","Stitch-Free Process","Minimal Discomfort","Pick-Up & Drop Services","Full Insurance Assistance"]
    },
    {
        id: 4,
        image : "https://i.ibb.co/BKYwJCH/kidney-stone-1.png",
        btnname : "Kidney Stone",
        description: "Kidney stones, or renal calculi, are among the most common and painful health issues faced by many individuals. Studies show that nearly 50% of Indians are at risk of developing kidney stones annually. At CareConnect, we prioritize your health by offering seamless medical support. From connecting you with top kidney stone specialists to managing your treatment needs, we ensure quality care at an affordable price. Let CareConnect guide you toward a pain-free recovery.",
        advantages: ["Quick 40-Minute Treatment","Minimally Invasive Laparoscopic Surgery","Pick-Up & Drop Services","Comprehensive Insurance Assistance","Zero-Cost EMI Options"]
    },
    {
        id: 5,
        image : "https://i.ibb.co/3hsNm1G/Gyn.jpg",
        btnname : "Gynecomastia",
        description: "Gynecomastia, a condition where breast tissue swells and enlarges, can sometimes be triggered by certain illnesses or medications, leading to physical and emotional discomfort. If this condition is affecting your self-esteem, breast reduction surgery could be the solution. Cosmetic surgery is designed to enhance your appearance and confidence. At CareConnect, our experienced cosmetic surgeons are dedicated to providing a smooth, stress-free experience, ensuring that you feel comfortable and cared for throughout the entire procedure. Let us help you achieve the results you desire.",
        advantages: ["Quick 45-Minute Procedure","Cutting-Edge Liposuction Technology","Minimal Discomfort","Zero-Cost EMI Options","Complimentary Pick-Up & Drop Services"]
    },
    {
        id: 6,
        image : "https://i.ibb.co/h8Y899p/Mole-removal.png",
        btnname : "Mole Removal",
        description: "Moles are common skin marks caused by pigment-producing cells, and they can vary in appearance, ranging from smooth to rough, flat to raised, and sometimes even with hair. Typically dark brown or black, moles can change over time, often due to shifts in hormone levels. If you're considering mole removal, CareConnect offers a quick, painless, one-day laser procedure. Our team of skilled doctors takes the time to understand your unique needs and concerns, creating a customized treatment plan to ensure the best results. Let us help you achieve smooth, clear skin with expert care.",
        advantages: ["Quick 30-Minute Procedure","Advanced Laser Treatment","Same-Day Discharge","Zero-Cost EMI Options","Minimal Incisions for Better Healing"]
    },
    {
        id: 7,
        image : "https://shorturl.at/QTqK9",
        btnname : "Lipoma",
        description: "A lipoma is a benign fatty growth that forms slowly beneath the skin, often in the muscle layer. These soft, doughy lumps are usually painless and move easily under gentle pressure. While they are commonly found in individuals around middle age, some people may develop multiple lipomas. If you're concerned about a lipoma, consulting a specialist is crucial. At CareConnect, our team of experienced cosmetology professionals will assess your condition and recommend the most suitable surgical approach tailored to your needs, ensuring a safe and effective treatment plan.",
        advantages: ["Quick 30-Minute Procedure","State-of-the-Art Liposuction Technology","Minimal Discomfort","Complimentary Pick-Up & Drop Services","Zero-Cost EMI Options"]
    },
    {
        id: 8,
        image : "https://i.ibb.co/12Td8J4/liposuction-1.png",
        btnname : "Liposuction",
        description: "",
        advantages: []
    },
    {
        id: 9,
        image : "https://i.ibb.co/58L2Bwv/spine-1.png",
        btnname : "Spine",
        description: "",
        advantages: []
    },
    {
        id: 10,
        image : "https://i.ibb.co/xjw92PH/hip-3.png",
        btnname : "Hip Replacement",
        description: "",
        advantages: []
    },
    {
        id: 11,
        image : "https://i.ibb.co/F5gw6vh/catract.jpg",
        btnname : "Cataract",
        description: "Cataracts (motiyabind) can gradually affect your vision, often starting with little to no symptoms but worsening over time. While surgery is the most effective solution, it is crucial to seek treatment before vision is severely impaired. At CareConnect, our expert ophthalmologists perform cataract surgery using advanced, minimally invasive Femtosecond-Laser-Assisted Cataract Surgery (FLACS) to ensure the highest precision and a quicker recovery. Trust CareConnect for personalized care and state-of-the-art technology, all at an affordable cost, to restore your vision and improve your quality of life.",
        advantages: ["Quick 30-Minute Procedure","Discharge on the Same Day","Comprehensive Insurance Assistance","Zero-Cost EMI Options","Pick-Up & Drop Services"]
    },
    {
        id: 12,
        image : "https://i.ibb.co/dtz5dT5/lasik.png",
        btnname : "Lasik",
        description: "If you're tired of relying on glasses or contact lenses, LASIK surgery could be the perfect solution to improve your vision. Whether you're dealing with myopia, hypermetropia, or astigmatism, LASIK is a highly effective procedure that can correct these conditions. At CareConnect, our experienced ophthalmologists can restore your eyesight in just 30 minutes, providing you with a hassle-free and affordable treatment option. Say goodbye to visual aids and enjoy clearer vision with CareConnect's expert LASIK services.",
        advantages: ["Quick 30-Minute Procedure","Discharge on the Same Day","Comprehensive Insurance Assistance","Zero-Cost EMI Options","Pick-Up & Drop Services"]
    },
    {
        id: 13,
        image : "https://shorturl.at/QTqK9",
        btnname : "Piles",
        description: "Piles, or hemorrhoids, occur when veins in the rectum and anal canal become swollen and inflamed, leading to discomfort and pain. At CareConnect, we offer laser piles treatment, a safe and effective day-care surgery that allows patients to return home the same day. If you're dealing with piles, our expert proctologists are here to provide the right treatment to prevent the condition from progressing. Reach out to CareConnect for prompt and professional care, ensuring a smooth and speedy recovery.",
        advantages: ["Advanced Laser Treatment","Minimal Discomfort","Quick 30-Minute Procedure","Comprehensive Insurance Assistance","Complimentary Pick-Up & Drop Services"]
    },
    {
        id: 14,
        image : "https://shorturl.at/QTqK9",
        btnname : "Fissure",
        description: "An anal fissure is a small tear in the lining of the anal canal, and while it can affect anyone, it is most common in adults and older individuals. CareConnect specializes in laser fissure surgery, offering a minimally invasive solution for faster healing and less discomfort. Our team of experienced fissure specialists is committed to providing you with top-quality care, supported by dedicated medical coordinators who are available 24/7 to assist you throughout the process. Trust CareConnect for effective, hassle-free treatment and personalized care.",
        advantages: ["Advanced Laser Treatment","Minimal Discomfort","Quick 30-Minute Procedure","Comprehensive Insurance Assistance","Complimentary Pick-Up & Drop Services"]
    },
    {
        id: 15,
        image : "https://shorturl.at/QTqK9",
        btnname : "Fistula",
        description: "A fistula is an abnormal connection that forms between two distinct body parts. In the case of an anal fistula, an infected tunnel forms between the anus (the muscular opening at the end of the digestive tract) and the skin. This condition can be effectively treated with laser surgery, allowing patients to return home the same day. At CareConnect, our expert proctologists specialize in treating anal fistulas with precision and care, helping prevent further complications. Reach out to us for prompt, professional treatment to address your condition and restore your health.",
        advantages: ["Advanced Laser Treatment","Minimal Discomfort","Quick 30-Minute Procedure","Comprehensive Insurance Assistance","Complimentary Pick-Up & Drop Services"]
    },
    {
        id: 16,
        image : "https://i.ibb.co/sV2XGwH/VV.jpg",
        btnname : "Varicose vein",
        description : "Varicose veins are a widespread condition that commonly affects individuals in their later years, causing swelling and discomfort in the legs and feet. Thankfully, with CareConnect, you now have access to state-of-the-art treatments for varicose veins, provided by skilled surgeons. We offer comprehensive insurance support, personalized care, and affordable pricing, ensuring the best possible outcomes for you. Discover more about varicose veins, how to receive effective treatment, and why CareConnect should be your trusted partner in healthcare. Let us help you take the first step toward healthier, pain-free legs.",
        advantages : ["Quick 45-Minute Procedure", "Advanced Laser Treatment","Stitch-Free Process","Comprehensive Insurance Assistance","Pickup & Drop Services"]
    },
    {
        id: 17,
        image : "https://i.ibb.co/9n619pP/varicocele.png",
        btnname : "Varicocele",
        description: "Varicocele, the swelling and twisting of veins within the scrotum, is a common condition that affects 10-15% of men in India. If you're looking for effective treatment for varicocele, CareConnect offers expert care with experienced surgeons, personalized treatment plans, and comprehensive insurance support—all at affordable prices. We are dedicated to providing you with the highest standard of care to address your condition and improve your well-being. Trust CareConnect as your healthcare partner for varicocele treatment.",
        advantages: ["Quick 60-Minute Procedure","Minimally Invasive Keyhole Surgery", "Comprehensive Insurance Assistance","Zero-Cost EMI Options", "Pick-Up & Drop Services"]
    },
    {
        id: 18,
        image : "https://i.ibb.co/6bRRcf6/Septoplasty.png",
        btnname : "Septoplasty",
        description: "",
        advantages: []
    },
    {
        id: 19,
        image : "https://i.ibb.co/gDLWTcr/join-rep.png",
        btnname : "Joint Replacement",
        description: "",
        advantages: []
    },
    {
        id: 20,
        image : "https://i.ibb.co/HX0Gd9R/Kidney-trans.png",
        btnname : "Kidney Transplant",
        description: "",
        advantages: []
    },
    {
        id: 21,
        image : "https://i.ibb.co/D9bPPgC/Dental-1.png",
        btnname : "Dental Implant",
        description: "",
        advantages: []
    },
    {
        id: 22,
        image : "https://i.ibb.co/hXTr7z8/Hydrocele.png",
        btnname : "Hydrocelectomy",
        description: "",
        advantages: []
    },
    {
        id: 23,
        image : "https://i.ibb.co/Ny05t51/b-lump-1.png",
        btnname : "Breast Lump",
        description: "",
        advantages: []
    },
    {
        id: 24,
        image : "https://i.ibb.co/WgJVWwM/breast-cancer-1.png",
        btnname : "Mastectomy",
        description: "",
        advantages: []
    },
    {
        id: 25,
        image : "https://i.ibb.co/yq6JRd4/prostate-cancer.png",
        btnname : "Prostate Cancer",
        description: "",
        advantages: []
    },
    {
        id: 26,
        image : "https://i.ibb.co/PCLssmY/Heart-1.png",
        btnname : "Heart Transplant",
        description: "",
        advantages: []
    },
    {
        id: 27,
        image : "https://i.ibb.co/JvvCztM/liver-transplant.jpg",
        btnname : "Liver Transplant",
        description: "",
        advantages: []
    },
    {
        id: 28,
        image : "https://i.ibb.co/LdyyhVZ/brain-1.png",
        btnname : "Brain Tumor",
        description: "",
        advantages: []
    },
    {
        id: 29,
        image: "https://i.ibb.co/Tmh8Q3v/IVF-1.png",
        btnname: "IVF",
        description: "",
        advantages: []
    },
    {
        id: 30,
        image : "https://i.ibb.co/5LBJt8S/knee-1.png",
        btnname : "Knee Replacement",
        description: "",
        advantages: []
    }
]

export default surgeryItems;