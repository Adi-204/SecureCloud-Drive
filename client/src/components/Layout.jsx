import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { CloudArrowUpIcon, LockClosedIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto bg-gray-900/90 backdrop-blur-xl border-t border-gray-800/40">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="https://github.com/Adi-204/SecureCloud-Drive" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
        
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center md:justify-start">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-indigo-400">
                SecureCloud Drive
              </p>
            </div>
          </div>
          
          <p className="mt-2 text-center text-xs leading-5 text-gray-500 md:text-left">
            &copy; {currentYear} SecureCloud Drive. All rights reserved. Powered by Ethereum & IPFS.
          </p>
        </div>
        
        <div className="mt-8 md:order-3 md:mt-0">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            <a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-200">
              About
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-200">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const BackgroundEffects = () => (
  <div className="fixed inset-0 -z-10">
    {/* Grid pattern */}
    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
    
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900/10 to-gray-900"></div>
    
    {/* Animated blobs */}
    <div className="absolute left-[5%] top-[5%] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/10 opacity-20 blur-3xl animate-blob"></div>
    <div className="absolute right-[10%] top-[25%] h-[40rem] w-[40rem] translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/10 opacity-15 blur-3xl animate-blob animation-delay-2000"></div>
    <div className="absolute left-[50%] bottom-[10%] h-[35rem] w-[35rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-500/20 to-indigo-500/15 opacity-20 blur-3xl animate-blob animation-delay-4000"></div>
    
    {/* Light beam effect */}
    <div className="absolute -top-40 right-10 h-[40rem] w-[40rem] -rotate-12 bg-gradient-radial from-indigo-500/10 to-transparent opacity-30 blur-3xl"></div>
    
    {/* Dark spots */}
    <div className="absolute bottom-20 left-10 h-[40rem] w-[40rem] rounded-full bg-gray-950 opacity-30 blur-3xl"></div>
    
    {/* Noise texture */}
    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
  </div>
);

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Background */}
      <BackgroundEffects />
      
      {/* Main content */}
      <Navigation />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
