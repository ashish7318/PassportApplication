import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Steps } from './components/Steps';
import { Notices } from './components/Notices';
import { Footer } from './components/Footer';
import { FillForm } from './components/FillForm';
import { Confirmation } from './components/Confirmation';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="font-sans flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Steps />
                    <Notices />
                  </>
                }
              />
              
              <Route path="/fill-form" element={<FillForm show={true} />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
