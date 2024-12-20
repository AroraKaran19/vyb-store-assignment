import React from 'react'
import InfluencerCarousel from './InfluencerCarousel'

const InfluencerSection = () => {
  
  const influencers = [
    {
      name: "Samira",
      imgUrl: "/Home/InfluencerSection/1.jpg",
      redirectUrl: ""
    },
    {
      name: "Jay",
      imgUrl: "/Home/InfluencerSection/2.jpg",
      redirectUrl: ""
    },
    {
      name: "Samira",
      imgUrl: "/Home/InfluencerSection/3.jpg",
      redirectUrl: ""
    },
    {
      name: "Samira",
      imgUrl: "/Home/InfluencerSection/4.jpg",
      redirectUrl: ""
    }
  ]

  return (
    <>
      <section id='out-influencers' className="influencer-section w-full flex flex-col">
        <div className="influencer-section_heading w-full text-center text-[#00DC82]">Our Influencers</div>
        <div className="influencers-list flex px-5">
          <InfluencerCarousel influencerData={influencers} />
        </div>
      </section>
    </>
  )
}

export default InfluencerSection