import localFont from 'next/font/local'

export const crimsonPro = localFont({
  src: [
    {
      path: '../../public/fonts/CrimsonPro/CrimsonPro-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CrimsonPro/CrimsonPro-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../public/fonts/CrimsonPro/CrimsonPro-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CrimsonPro/CrimsonPro-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/CrimsonPro/CrimsonPro-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CrimsonPro/CrimsonPro-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/CrimsonPro/CrimsonPro-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CrimsonPro/CrimsonPro-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/CrimsonPro/CrimsonPro-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CrimsonPro/CrimsonPro-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/CrimsonPro/CrimsonPro-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CrimsonPro/CrimsonPro-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    }
  ],
  variable: '--font-crimson'
});

export const utopia = localFont({
  src: [
    {
      path: '../../public/fonts/UtopiaStd/UtopiaStd-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/UtopiaStd/UtopiaStd-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/UtopiaStd/UtopiaStd-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/UtopiaStd/UtopiaStd-SemiboldIt.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/UtopiaStd/UtopiaStd-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/UtopiaStd/UtopiaStd-Boldit.otf',
      weight: '700',
      style: 'italic',
    }
  ],
  variable: '--font-utopia'
});