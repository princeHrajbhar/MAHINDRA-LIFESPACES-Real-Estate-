import AboutSection from '@/components/AboutSection'
import MahindraHero from '@/components/MahindraHero'
import FeaturesPage from '@/components/FeaturesPage'
import PricingPage from '@/components/PricingPage'
import AmenitiesPage from '@/components/AmenitiesPage'
import SpecificationsPage from '@/components/SpecificationsPage'
import LocationPage from '@/components/LocationPage'

const page = () => {
  return (
    <div>
      <MahindraHero/>
      <AboutSection/>
      <FeaturesPage/>
      <PricingPage/>
      <AmenitiesPage/>
      <SpecificationsPage/>
      <LocationPage/>
    </div>
  )
}

export default page
