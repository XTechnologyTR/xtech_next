import { FaFacebook, FaTwitter,  FaInstagram, FaLinkedin } from 'react-icons/fa';

export default [
  {
    header: 'Kurumsal',
    items: [
      {
        path: '/',
        label: 'Feragatname',
      },
      {
        path: '/',
        label: 'Yasal Sorumluluk',
      },
      {
        path: '/',
        label: 'Bayilik Talebi ',
      },
      {
        path: '/',
        label: 'Ortaklık Programı',
      },
    ],
  },
  {
    header: 'Bilgilerimiz',
    items: [
      {
        path: '/',
        label: 'İade Politikasi ',
      },
      {
        path: '/',
        label: 'Gizlilik Politikası',
      },
      {
        path: '/',
        label: 'Şartlar ve Koşullar',
      },
      {
        path: '/',
        label: 'Site Haritası',
      },
    ],
  },
  {
    header: 'Sosyal Takip',
    items: [
      {
        path: '/',
        label: 'Facebook Takibi',
      },
      {
        path: '/',
        label: 'Whatsapp Takibi ',
      },
      {
        path: '/',
        label: 'Twitter Takibi',
      },
      {
        path: '/',
        label: 'İnstagram Takibi',
      },
    ],
  },
  {
    header: 'İletişim',
    items: [
      {
        path: 'https://facebook.com/xtakip',
        label: 'Facebook',
        name: 'facebook',
        icon: <FaFacebook />,
      },
      {
        path: 'https://twitter.com/xtechnology_co',
        label: 'Twitter',
        name: 'twitter',
        icon: <FaTwitter />,
      },
      {
        path: 'https://instagram.com/xtechnology.co',
        label: 'Instagram',
        name: 'instagram',
        icon: <FaInstagram />,
      },
      {
        path: 'https://linkedin.com/xtechnology_co',
        label: 'Linkedin',
        name: 'linkedin',
        icon: <FaLinkedin />,
      },
    ],
  },
];
