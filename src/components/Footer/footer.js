import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaSnapchatGhost, FaTwitter } from 'react-icons/fa';
import { Link } from '@/src/i18n/routing';
import Image from "next/image";
import { useTranslations } from 'next-intl';
import profileImg from '@/public/profile-imgr.svg';

const Footer = () => {
    const t = useTranslations('Footer'); 
    const currentYear = new Date().getFullYear();

    return (
        <div className="px-5 pt-16 lg:pt-0 lg:px-44 ">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-24 justify-between">
                <div>
                    <h1 className="tajawal-bold text-xl md:text-lg">{t('bookDoctor')}</h1>
                    <div>
                        <div className="flex tajawal-medium gap-2 pt-4 flex-col md:text-base text-sm">
                            <Link href="/" className="hover:text-accent transition-all duration-200">{t('specialist1')}</Link>
                            <Link href="/" className="hover:text-accent transition-all duration-200">{t('specialist2')}</Link>
                            <Link href="/" className="hover:text-accent transition-all duration-200">{t('specialist3')}</Link>
                            <Link href="/" className="hover:text-accent transition-all duration-200">{t('moreSpecialists')}</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="tajawal-bold text-xl md:text-lg ">{t('followUs')}</h1>
                    <div>
                        <div className="grid grid-cols-3 gap-2 pt-4 transition-all duration-200">
                            <Link href="/">
                                <FaFacebookF className="bg-accent w-8 h-8 p-1 hover:scale-125 transition-all ease duration-200 text-white" />
                            </Link>
                            <Link href="/">
                                <FaInstagram className="bg-accent w-8 h-8 p-1 hover:scale-125 transition-all ease duration-200 text-white" />
                            </Link>
                            <Link href="/">
                                <FaYoutube className="bg-accent w-8 h-8 p-1 hover:scale-125 transition-all ease duration-200 text-white" />
                            </Link>
                            <Link href="/">
                                <FaTiktok className="bg-accent w-8 h-8 p-1 hover:scale-125 transition-all ease duration-200 text-white" />
                            </Link>
                            <Link href="/">
                                <FaSnapchatGhost className="bg-accent w-8 h-8 p-1 hover:scale-125 transition-all ease duration-200 text-white" />
                            </Link>
                            <Link href="/">
                                <FaTwitter className="bg-accent w-8 h-8 p-1 hover:scale-125 transition-all ease duration-200 text-white" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="tajawal-bold text-xl md:text-lg">{t('ourServices')}</h1>
                    <div>
                        <div className="flex tajawal-medium gap-2 pt-4 flex-col text-sm md:text-base">
                            <Link href="/" className="hover:text-accent transition-all duration-200">{t('medicalArticles')}</Link>
                            <Link href="/" className="hover:text-accent transition-all duration-200">{t('medicalVideos')}</Link>
                            <Link href="/" className="hover:text-accent transition-all duration-200">{t('podcast')}</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="tajawal-bold md:text-xl text-lg">{t('aboutUs')}</h1>
                    <div>
                        <div className="flex tajawal-medium gap-2 pt-4 flex-col text-sm md:text-base">
                            <Link href="/" className="hover:text-accent transition-all duration-200">{t('whoWeAre')}</Link>
                            <Link href="/" className="hover:text-accent transition-all duration-200">{t('termsOfUse')}</Link>
                            <div className="hover:text-accent transition-all duration-200">{t('contactUs')}</div>
                            <div>
                                <a 
                                    href="/" 
                                    className="text-accent transition-all duration-200 block"
                                >
                                    {t('email')}
                                </a>
                                <a 
                                    href="/" 
                                    className="text-accent mt-2 transition-all duration-200 block"
                                >
                                    {t('whatsapp')}
                                </a>
                            </div>
                            <Image className="md:w-[130px] hidden lg:hidden md:block mt-2" alt="Doctor" src={profileImg} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-8 relative font-medium pb-8 px-8 flex flex-col md:flex-row items-center justify-center">
                <span className="text-center text-sm md:text-base">
                    &copy;{currentYear} mostashark. All rights reserved.
                </span>
            </div>
        </div>
    );
}

export default Footer;
