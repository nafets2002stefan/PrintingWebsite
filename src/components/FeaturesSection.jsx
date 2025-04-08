import React from 'react'
import { FaForward,FaUserCheck, FaBoxOpen, FaCogs, FaHeart, FaBalanceScaleLeft, FaPaintBrush , FaShippingFast } from "react-icons/fa";

const features = [
    {
      icon: <FaForward/>, 
      title: "Viteză înaltă de producție",
      description: (
        <>
        Listă electronică a ordinii comenzilor <br/> Prelucrarea automatizată a comenzii <br/> Realizarea produselor - de la 30 de minute
        </>)
    },
    {
      icon: <FaUserCheck/>,
      title: "Echipă profesionistă", 
      description: (
        <>
        Primim sarcina și vă oferim soluția <br/> Executarea comenzilor la timp <br/> Realizarea oricărei idei
        </>)    
    },
    {
      icon: <FaBoxOpen/>,
      title: "Carton de legătorie",
      description: (
        <>
        Producem cutii de înaltă calitate din carton de legătorie
        </>)  
    },
    {
      icon: <FaCogs/>,
      title: "Productie proprie",
      description: (
        <>
        Lucrări diferite de post-press <br/> Realizarea a oricărei idei <br/> Utilaj modern
        </>) 
    },
    {
      icon: <FaHeart/>,
      title: "Atmosferă prietenoasă",
      description: (
        <>
        Atmosferă de lucru veselă și pozitivă <br/> Showroom pentru inspirația dvs. <br/> Pisica preferată Monya
        </>) 
      },
    {
      icon: <FaBalanceScaleLeft/>,
      title: "Prețul și calitatea",
      description: (
        <>
        Garanția calității produselor de 100% <br/> Cele mai favorabile condiții de plată <br/> Produse de clasa „Premium”
        </>) 
    },
    {
      icon: <FaPaintBrush/>,
      title: "Elaborarea design-ului",
      description: (
        <>
        Soluții originale și particularizate <br/> Crearea construcțiilor complexe <br/> Design atractiv și efectiv
        </>) 
      },
      {
      icon: <FaShippingFast/>,
      title: "Livrare",
      description: (
        <>
        Economisirea resurselor dvs.<br/> Livrarea oricăror produse în raza mun. Chișinău <br/> Operativitate
        </>) 
      }
  ]


const FeaturesSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16'>
        {/* Heading Texts */}
        <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4 text-white'>TIPOGRAFIA PERFECTĂ</h2>
            <p className='text-l default-link-color'>Tipografia Pergament este o companie de familie fondată în anul 1999.</p>
            <p className='text-l default-link-color'>Producem ambalaje din carton, materiale publicitare imprimate și ediții periodice de orice complexitate</p>
        </div>

        {/* Features boxs */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {features.map((feature, index) => (
                <div key={index} className='flex flex-col items-center p-6 pb-0 text-center'>
                    <div className='w-24 h-24 rounded-full mb-6 flex items-center justify-center border-3 text-[#807f7d] hover:bg-[#ffe400] hover:text-black transition-all duration-200'>
                        <div className='text-4xl'>{feature.icon}</div>
                    </div>
                    <h3 className='text-2xl font-medium mb-3 text-white'>{feature.title}</h3>
                    <p className='default-link-color text-center'>{feature.description}</p>
                </div>
            ))}
        </div>

    </section>
  )
}

export default FeaturesSection