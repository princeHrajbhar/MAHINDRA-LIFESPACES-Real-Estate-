import AboutSection from '@/components/AboutSection'
import MahindraHero from '@/components/MahindraHero'
import FeaturesPage from '@/components/FeaturesPage'
import PricingPage from '@/components/PricingPage'
import AmenitiesPage from '@/components/AmenitiesPage'
import SpecificationsPage from '@/components/SpecificationsPage'
import LocationPage from '@/components/LocationPage'
import FloorPlansPage from '@/components/FloorPlansPage'
import GalleryPage from '@/components/GalleryPage'
import VisitFormPage from '@/components/VisitFormPage'
import AboutWithFeaturesPage from '@/components/AboutWithFeaturesPage'

const page = () => {
  return (
    <div>
      <MahindraHero/>
      {/* <AboutSection/>
      <FeaturesPage/> */}
      <AboutWithFeaturesPage/>
      <PricingPage/>
      <AmenitiesPage/>
      <FloorPlansPage/>
      <GalleryPage/>
      <SpecificationsPage/>
      <VisitFormPage/>
      <LocationPage/>
    </div>
  )
}

export default page
