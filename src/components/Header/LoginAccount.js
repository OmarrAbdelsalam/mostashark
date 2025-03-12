'use client';

import { useState, useEffect } from 'react';
import { checkSession, logout } from '@/src/utils/auth';
import { useRouter } from "@/src/i18n/routing";
import Avatar from './Avatar';
import MenuItem from './MenuItem';
import Image from 'next/image';
import { Link } from '@/src/i18n/routing';
import profileImg from '@/public/profile-imgr.png';
import { MenuIcon, XIcon, ChevronDownIcon, ChevronUpIcon, FileTextIcon, VideoIcon, HelpCircleIcon, SendIcon, Radio } from 'lucide-react';

const LoginAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [submenuOpen, setSubmenuOpen] = useState('');
  const router = useRouter();

  useEffect(() => {
    const verifySession = async () => {
      const sessionData = await checkSession();
      setIsLoggedIn(!!sessionData);
      if (sessionData) {
        setUser(sessionData.session);
      }
    };

    if (typeof window !== 'undefined') {
      verifySession();
    }
  }, []);

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      const handleOutsideClick = (event) => {
        if (!event.target.closest('.menu-container')) {
          setIsOpen(false);
        }
      };
      window.addEventListener('click', handleOutsideClick);

      return () => {
        window.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      logout();
      setIsLoggedIn(false);
      setUser(null);
      router.push('/login');
      setIsOpen(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleNavigation = (path) => {
    router.push(path);
    setIsOpen(false);
  };

  const toggleSubmenu = (menu) => {
    setSubmenuOpen(submenuOpen === menu ? '' : menu);
  };

  return (
    <div className="relative ml-6 menu-container">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="p-3 md:py-2 md:px-3 bg-white flex flex-row items-center gap-2 rounded-full cursor-pointer shadow-md transition"
        >
          <MenuIcon />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {/* القائمة المنسدلة للهواتف */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isOpen ? 'bg-gray-800 bg-opacity-75' : 'opacity-0 pointer-events-none'}`} onClick={toggleOpen}>
        <div
          className={`absolute right-0 top-0 h-full w-64 text-gray-500 bg-white shadow-md overflow-y-auto transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col p-4 h-full">
            <div className="absolute top-4 left-4">
              <div onClick={toggleOpen} className="p-2 mt-2 bg-primary text-white rounded-full cursor-pointer shadow-md transition">
                <XIcon className="h-5 w-5" />
              </div>
            </div>
            <Link href="/"> 
              <MenuItem label="الرئيسية" />
            </Link>
            <Link href="/services"> 
              <MenuItem label="خدماتنا" />
            </Link>
            {isLoggedIn && (
              <Link href="/my-profile">
                <MenuItem label="ملفي الشخصي" />
              </Link>
            )}
            {isLoggedIn && (
              <Link href="/my-bookings">
                <MenuItem label="حجوزاتي" />
              </Link>
            )}
            <div onClick={() => toggleSubmenu('content')} className="cursor-pointer flex justify-between items-center">
              <MenuItem label="المحتوى الزراعي" />
              {submenuOpen === 'content' ? <ChevronUpIcon className="text-primary" /> : <ChevronDownIcon className="text-primary" />}
            </div>
            {submenuOpen === 'content' && (
              <div className="ml-4 transition-all text-gray-800 duration-300 ease-in-out">
                <Link href="/blogs">
                  <MenuItem label="المقالات الزراعية" icon={<FileTextIcon className="text-primary ml-2" />} />
                </Link>
                <Link href="/videos">
                  <MenuItem label="الفيديوهات" icon={<VideoIcon className="text-primary ml-2" />} />
                </Link>
                <Link href="/">
                  <MenuItem label="المقالات الحيوانية" icon={<Radio className="text-primary ml-2" />} />
                </Link>
                <Link href="/">
                  <MenuItem label="التجارب الزراعية" icon={<HelpCircleIcon className="text-primary ml-2" />} />
                </Link>
                <Link href="/">
                  <MenuItem label="اسألنا" icon={<SendIcon className="text-primary ml-2" />} />
                </Link>
              </div>
            )}
            <Link href="/booking">
              <MenuItem onClick={() => handleNavigation('/booking')} label="احجز استشارة" />
            </Link>
            <Link href="/aboutUs">
              <MenuItem label="من نحن" />
            </Link>
            {isLoggedIn ? (
              <MenuItem onClick={handleLogout} label="تسجيل الخروج" />
            ) : (
              <>
                <Link href="/login">
                  <MenuItem label="تسجيل الدخول" />
                </Link>
                <Link href="/register">
                  <MenuItem label="إنشاء حساب" />
                </Link>
              </>
            )}
            <div className="mt-auto flex flex-col items-center mb-8"></div>
          </div>
        </div>
      </div>
      {/* القائمة المنسدلة لأجهزة سطح المكتب */}
      <div className={`hidden lg:flex flex-col cursor-pointer absolute rounded-xl shadow-md w-[40vw] md:w-[200%] bg-white overflow-hidden right-0 top-16 text-sm transition-transform duration-300 transform ${isOpen ? 'scale-100' : 'scale-0'}`}>
        {isLoggedIn ? (
          <>
            <Link href="/my-profile">
              <MenuItem label="ملفي الشخصي" />
            </Link>
            <Link href="/my-bookings">
              <MenuItem label="حجوزاتي" />
            </Link>
            <MenuItem onClick={handleLogout} label="تسجيل الخروج" />
          </>
        ) : (
          <>
            <Link href="/login">
              <MenuItem label="تسجيل الدخول" />
            </Link>
            <Link href="/register">
              <MenuItem label="إنشاء حساب" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginAccount;
