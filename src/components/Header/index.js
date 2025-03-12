'use client';

import { useEffect, useState, useRef, useTransition } from 'react';
import Logo from './logo';
import { Link } from '@/src/i18n/routing';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { ChevronDownIcon, FileTextIcon, VideoIcon, HelpCircleIcon, SendIcon, Radio, Globe } from 'lucide-react';

import LoginAccount from './LoginAccount';

const Header = () => {
  const [activeItem, setActiveItem] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState('');
  const [currentPath, setCurrentPath] = useState(''); 
  const router = useRouter();
  const dropdownRef = useRef(null);
  const [isPending, startTransition] = useTransition();
  const locale = useLocale(); 
  const [language, setLanguage] = useState(locale === 'ar' || locale === 'en' ? locale : 'en'); 

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
      setActiveItem(window.location.pathname); 
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(''); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleDropdown = (label) => {
    setDropdownVisible(dropdownVisible === label ? '' : label);
  };

  const onLocaleChange = (nextLocale) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|ar)/, '');
    startTransition(() => {
      router.replace(`/${nextLocale}${newPath}`);
    });
    setLanguage(nextLocale);
  };

  const toggleLanguage = () => {
    const nextLocale = language === 'en' ? 'ar' : 'en';
    onLocaleChange(nextLocale);
  };

  return (
    <header id="header">
      <div
        id="headerr"
        dir="rtl"
        style={{ backgroundColor: '#f7f7f7' }}
        className="w-full shadow-lg md:h-24 py-2 md:py-0 md:px-10 flex items-center justify-around fixed lg:top-0 top-0 left-0 right-0 z-50"
      >
        <div className="flex items-center">
          <div className="mx-5 md:mx-0 mb-[2px]">
            <LoginAccount />
          </div>
          <nav className="hidden lg:flex justify-center text-primary items-center gap-8">
            <ul className="flex gap-2 items-center" ref={dropdownRef}>
              <li className="relative cursor-pointer">
                <Link href="/">
                  <div className="tajawal-medium text-[16px] font-ta px-3 rounded-xl transition duration-300 hover:bg-neutral-200 py-3 flex items-center">
                    الرئيسية
                  </div>
                </Link>
              </li>
              <li className="relative cursor-pointer">
                <Link href="/services">
                  <div className="tajawal-medium text-[16px] font-ta px-3 rounded-xl transition duration-300 hover:bg-neutral-200 py-3 flex items-center">
                    خدماتنا
                  </div>
                </Link>
              </li>
              <li className="relative cursor-pointer">
                <div onClick={() => handleDropdown('medicalContent')}>
                  <div className="tajawal-medium text-[16px] font-ta px-3 rounded-xl transition duration-300 hover:bg-neutral-200 py-3 flex items-center">
                    المحتوى الزراعي
                    <ChevronDownIcon className="mt-[2px]" />
                  </div>
                </div>
                {dropdownVisible === 'medicalContent' && (
                  <ul className="absolute bg-white shadow-md rounded mt-1 w-[120%]">
                    <li onClick={() => setDropdownVisible('')}>
                      <Link href="/blogs">
                        <div className="tajawal-regular text-black font-ta px-3 py-3 hover:bg-neutral-200 transition duration-300 flex items-center gap-2">
                          <FileTextIcon className="text-primary ml-2" />
                          المقالات الزراعية
                        </div>
                      </Link>
                    </li>
                    <li onClick={() => setDropdownVisible('')}>
                      <Link href="/videos">
                        <div className="tajawal-regular text-black font-ta px-3 py-3 hover:bg-neutral-200 transition duration-300 flex items-center gap-2">
                          <VideoIcon className="text-primary ml-2" />
                          الفيديوهات
                        </div>
                      </Link>
                    </li>
                    <li onClick={() => setDropdownVisible('')}>
                      <Link href="/">
                        <div className="tajawal-regular text-black font-ta px-3 py-3 hover:bg-neutral-200 transition duration-300 flex items-center gap-2">
                          <Radio className="text-primary ml-2" />
                          المقالات الحيوانية
                        </div>
                      </Link>
                    </li>
                    <li onClick={() => setDropdownVisible('')}>
                      <Link href="/">
                        <div className="tajawal-regular text-black font-ta px-3 py-3 hover:bg-neutral-200 transition duration-300 flex items-center gap-2">
                          <HelpCircleIcon className="text-primary ml-2" />
                          التجارب الزراعية 
                        </div>
                      </Link>
                    </li>
                    <li onClick={() => setDropdownVisible('')}>
                      <Link href="/">
                        <div className="tajawal-regular text-black font-ta px-3 py-3 hover:bg-neutral-200 transition duration-300 flex items-center gap-2">
                          <SendIcon className="text-primary ml-2" />
                          اسالنا
                        </div>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative cursor-pointer">
                <Link href="/booking">
                  <div className="tajawal-medium text-[16px] font-ta px-3 rounded-xl transition duration-300 hover:bg-neutral-200 py-3 flex items-center">
                    احجز استشارة
                  </div>
                </Link>
              </li>
              <li className="relative cursor-pointer">
                <Link href="/aboutUs">
                  <div className="tajawal-medium text-[16px] font-ta px-3 rounded-xl transition duration-300 hover:bg-neutral-200 py-3 flex items-center">
                    من نحن
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mx-5 md:mx-0 flex items-center md:gap-4 gap-2">
          {/* <button onClick={toggleLanguage} className="tajawal-light mt-1 md:mt-0 flex items-center gap-1 md:gap-2 md:text-gray-500">
            <span className="text-black hidden md:block">{language === 'en' ? 'English' : 'العربية'}</span>
            <span className="text-black rounded-full md:hidden text-sm">{language === 'en' ? 'EN' : 'AR'}</span>
            <Globe className="hidden md:block" size={18} />
            <span className="md:text-xl"> | </span>
          </button> */}
          
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Header;
