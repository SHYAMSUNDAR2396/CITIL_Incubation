
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/animations/PageTransition";
import FuturisticBackground from "./components/animations/FuturisticBackground";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ProgramsPage from "./pages/ProgramsPage";
import StartupsPage from "./pages/StartupsPage";
import EventsPage from "./pages/EventsPage";
import MentorsPage from "./pages/MentorsPage";
import ContactPage from "./pages/ContactPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import FacilityDetailPage from "./pages/FacilityDetailPage";
import CorporatePartnershipPage from "./pages/CorporatePartnershipPage";
import UseCasesPage from "./pages/UseCasesPage";
import InvestorsPage from "./pages/InvestorsPage";
import StartupIncubationPage from "./pages/StartupIncubationPage";
import AdminPage from "./pages/AdminPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/programs" element={<PageTransition><ProgramsPage /></PageTransition>} />
        <Route path="/startups" element={<PageTransition><StartupsPage /></PageTransition>} />
        <Route path="/events" element={<PageTransition><EventsPage /></PageTransition>} />
        <Route path="/mentors" element={<PageTransition><MentorsPage /></PageTransition>} />
        <Route path="/facilities" element={<PageTransition><FacilitiesPage /></PageTransition>} />
        <Route path="/facilities/:id" element={<PageTransition><FacilityDetailPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/corporate-partnership" element={<PageTransition><CorporatePartnershipPage /></PageTransition>} />
        <Route path="/use-cases" element={<PageTransition><UseCasesPage /></PageTransition>} />
        <Route path="/investors" element={<PageTransition><InvestorsPage /></PageTransition>} />
        <Route path="/admin" element={<PageTransition><AdminPage /></PageTransition>} />
        <Route path="/startup-incubation" element={<PageTransition><StartupIncubationPage /></PageTransition>} />
        
        {/* Add any additional custom routes here */}
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FuturisticBackground />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
