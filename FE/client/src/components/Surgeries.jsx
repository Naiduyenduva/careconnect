import React from 'react'


const Surgeries = () => {

    const surgeryItems = [{
        image : "https://i.ibb.co/Lh5MwdM/hernia-2.jpg",
        btnname : "Hernia"
    },
    {
        image : "https://i.ibb.co/p0ghCv6/Gall-Stone.jpg",
        btnname : "GallStone"
    },
    {
        image : "https://i.ibb.co/TRVzHbm/circum.png",
        btnname : "Circumcision"
    },
    {
        image : "https://i.ibb.co/BKYwJCH/kidney-stone-1.png",
        btnname : "Kidney Stone"
    },
    {
        image : "https://i.ibb.co/3hsNm1G/Gyn.jpg",
        btnname : "Gynecomastia"
    },
    {
        image : "https://i.ibb.co/h8Y899p/Mole-removal.png",
        btnname : "Mole Removal"
    },
    {
        image : "images/lipoma.jpg",
        btnname : "Lipoma"
    },
    {
        image : "https://i.ibb.co/12Td8J4/liposuction-1.png",
        btnname : "Liposuction"
    },
    {
        image : "https://i.ibb.co/58L2Bwv/spine-1.png",
        btnname : "Spine"
    },
    {
        image : "https://i.ibb.co/xjw92PH/hip-3.png",
        btnname : "Hip Replacement"
    },
    {
        image : "https://i.ibb.co/F5gw6vh/catract.jpg",
        btnname : "Cataract"
    },
    {
        image : "https://i.ibb.co/dtz5dT5/lasik.png",
        btnname : "Lasik"
    },
    {
        image : "images/piles.jpg",
        btnname : "Piles"
    },
    {
        image : "images/fissure.jpg",
        btnname : "Fissure"
    },
    {
        image : "images/fistula.jpg",
        btnname : "Fistula"
    },
    {
        image : "https://i.ibb.co/sV2XGwH/VV.jpg",
        btnname : "Varicose vein"
    },
    {
        image : "https://i.ibb.co/9n619pP/varicocele.png",
        btnname : "Varicocele"
    },
    {
        image : "https://i.ibb.co/6bRRcf6/Septoplasty.png",
        btnname : "Septoplasty"
    },
    {
        image : "https://i.ibb.co/gDLWTcr/join-rep.png",
        btnname : "Joint Replacement"
    },
    {
        image : "https://i.ibb.co/HX0Gd9R/Kidney-trans.png",
        btnname : "Kidney Transplant"
    },
    {
        image : "https://i.ibb.co/D9bPPgC/Dental-1.png",
        btnname : "Dental Implant"
    },
    {
        image : "https://i.ibb.co/hXTr7z8/Hydrocele.png",
        btnname : "Hydrocelectomy"
    },
    {
        image : "https://i.ibb.co/Ny05t51/b-lump-1.png",
        btnname : "Breast Lump"
    },
    {
        image : "https://i.ibb.co/WgJVWwM/breast-cancer-1.png",
        btnname : "Mastectomy"
    },
    {
        image : "https://i.ibb.co/yq6JRd4/prostate-cancer.png",
        btnname : "Prostate Cancer"
    },
    {
        image : "https://i.ibb.co/PCLssmY/Heart-1.png",
        btnname : "Heart Transplant"
    },
    {
        image : "https://i.ibb.co/JvvCztM/liver-transplant.jpg",
        btnname : "Liver Transplant"
    },
    {
        image : "https://i.ibb.co/LdyyhVZ/brain-1.png",
        btnname : "Brain Tumor"
    },
    {
        image: "https://i.ibb.co/Tmh8Q3v/IVF-1.png",
        btnname: "IVF"
    },
    {
        image : "https://i.ibb.co/5LBJt8S/knee-1.png",
        btnname : "Knee Replacement"
    }
]

  return (
    <>
        <div>
            <div className='surgeries-container'>
                <h2>Receive expert care for over 50 advanced surgeries</h2>
                <div className='surgeries-box'>
                    <div className='surgeries-grid'>
                        {
                            surgeryItems.map((item,index) => (
                                <div className='surgery-item' key={index}>
                                    <img src={item.image} alt={item.btnname} />
                                    <button className='surgery-btn'>{item.btnname}</button>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Surgeries