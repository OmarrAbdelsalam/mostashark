import OurServices from '@/src/components/Services';

export const metadata = {
  title: 'خدماتنا الزراعية - حلول مستدامة في الزراعة والري ',
  description: 'نوفر مجموعة واسعة من الخدمات الزراعية، بما في ذلك تركيب الحدائق وأنظمة الري الحديثة وحلول الاستشارات الزراعية.',
  keywords: 'خدمات زراعية, تركيب الحدائق, أنظمة الري, استشارات زراعية, زراعة, ري, استدامة, الزراعة العضوية, تسميد, مكافحة الآفات',
  author: 'مستشارك الزراعي',
  language: 'ar',
  openGraph: {
    title: 'خدماتنا الزراعية - حلول مستدامة في الزراعة والري | شركة ك002',
    description: 'نوفر مجموعة واسعة من الخدمات الزراعية، بما في ذلك تركيب الحدائق وأنظمة الري الحديثة وحلول الاستشارات الزراعية.',
    type: 'website',
  },
};

const Services = () => {
  return (
    <div dir="rtl">
      <OurServices />
    </div>
  );
};

export default Services;
