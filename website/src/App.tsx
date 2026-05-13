import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { AboutPage } from './pages/AboutPage'
import { CaseStudiesPage } from './pages/CaseStudiesPage'
import { ContactPage } from './pages/ContactPage'
import { CookiePolicyPage } from './pages/CookiePolicyPage'
import { DpaPage } from './pages/DpaPage'
import { HomePage } from './pages/HomePage'
import { ImpactPage } from './pages/ImpactPage'
import { PlatformPage } from './pages/PlatformPage'
import { ProductCapabilitiesPage } from './pages/ProductCapabilitiesPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { SolutionsPage } from './pages/SolutionsPage'
import { TermsPage } from './pages/TermsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/capabilities" element={<ProductCapabilitiesPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/dpa" element={<DpaPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
