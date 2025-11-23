import { CarModel, Category, ContactInfo } from './types';

export const CONTACT_INFO: ContactInfo = {
  dealerName: "Tunas Toyota Cimahi",
  address: "Jl. Cilember No. 276, Cimahi",
  whatsapp: "628516176246", // Formatted for API link
  hours: "Senin - Sabtu: 08.00 - 18.00"
};

export const CAR_DATA: CarModel[] = [
  // Featured
  {
    id: 'veloz-hybrid',
    name: 'Toyota New Veloz Hybrid',
    category: Category.MPV,
    description: 'Kombinasi sempurna efisiensi dan performa untuk keluarga modern.',
    isFeatured: true,
    imageUrl: 'https://akcdn.detik.net.id/visual/2025/11/21/toyota-veloz-hybrid-diluncurkan-di-gjaw-2025-1763696183233_169.jpeg?w=480&q=90'
  },
  // Sedan
  { id: 'altis', name: 'Corolla Altis', category: Category.SEDAN, imageUrl: 'https://static.carmudi.co.id/LDox2FqaNXzUjb3sOtHeq-ByxTU=/900x405/https://trenotomotif.com/ncs/images/TOYOTA/All%20New%20Corolla%20Altis%202019/Toyota_All_New_Corolla_Altis.jpg' },
  { id: 'vios', name: 'Vios', category: Category.SEDAN, imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/38/1798/toyota-vios-front-angle-low-view-360231.jpg' },
  { id: 'camry', name: 'Camry', category: Category.SEDAN, imageUrl: 'https://static.carmudi.co.id/ToT8W3_e-rfl3ZMeNFluloNWFW4=/900x405/https://trenotomotif.com/ncs/images/TOYOTA/New-Camry-2021/New-Toyota-Camry.jpg' },
  
  // SUV
  { id: 'agya', name: 'Agya', category: Category.SUV, imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/38/1732/toyota-agya-front-angle-low-view-828712.jpg' },
  { id: 'raize', name: 'Raize', category: Category.SUV, imageUrl: 'https://static.carmudi.co.id/dwB25J3dNyvdDIP63IurrVsG8aY=/900x405/https://trenotomotif.com/ncs/images/TOYOTA/Raize-2021/raize-thumbnail.jpg' },
  { id: 'yaris', name: 'Yaris', category: Category.SUV, imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/38/3044/toyota-gr-yaris-front-angle-low-view-983770.jpg' },
  { id: 'yaris-cross', name: 'Yaris Cross', category: Category.SUV, imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/38/2763/toyota-yaris-cross-front-angle-low-view-420771.jpg' },

  // MPV
  { id: 'veloz', name: 'Veloz', category: Category.MPV, imageUrl: 'https://www.harapanrakyat.com/wp-content/uploads/2025/11/Toyota-Veloz-Hybrid-Resmi-Debut-di-Indonesia.jpg' },
  { id: 'calya', name: 'Calya', category: Category.MPV, imageUrl: 'https://assets.radarpekalongan.id/main/2025/01/Toyota-Calya-2025-1200x675.webp' },
  { id: 'avanza', name: 'Avanza', category: Category.MPV, imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/38/1654/toyota-avanza-front-angle-low-view-844132.jpg' },
  { id: 'rush', name: 'Rush', category: Category.MPV, imageUrl: 'https://imgcdn.oto.com/medium/gallery/exterior/38/1900/toyota-rush-78134.jpg' },
  { id: 'innova-zenix', name: 'Innova Zenix', category: Category.MPV, imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/38/2685/toyota-innova-zenix-front-angle-low-view-880505.jpg' },
  { id: 'fortuner', name: 'Fortuner', category: Category.MPV, imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/38/894/toyota-fortuner-front-angle-low-view-580768.jpg' },
  { id: 'voxy', name: 'Voxy', category: Category.MPV, imageUrl: 'https://static.carmudi.co.id/KyFVAhk8tAkFtlfflxjH3kBStuk=/900x405/https://trenotomotif.com/ncs/images/TOYOTA/All-New-Voxy-2022/all-new-voxy-2022-thumbnail.jpg' },
  { id: 'alphard', name: 'Alphard', category: Category.MPV, imageUrl: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcIVDwAghkRx25Nb254t9VKdtcJuy4zv_7hJpdOkllmH8FBBk4H4Mim_Ii8aqXTjv2BPGaL_KMJ7tQI7eZh7C2mbE5BXvkU5IZNBqTKN5mfyXk_1oKQVwQ26AUGlULB7YM1bo_HWA?key=gi7yORBGzDg3msS6os8dttXQ' },
  { id: 'velfire', name: 'Velfire', category: Category.MPV, imageUrl: 'https://img.autocarindia.com/ExtraImages/20250423060700_Hyundai%20hybrid%20powertrain%20%20_1_.jpg?w=700&c=1' },
  { id: 'landcruiser', name: 'Landcruiser', category: Category.MPV, imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/38/1349/toyota-land-cruiser-front-angle-low-view-515376.jpg' },

  // Niaga
  { id: 'hi-ace', name: 'Hi Ace', category: Category.NIAGA, imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/38/801/toyota-hiace-front-angle-low-view-454261.jpg' },
  { id: 'hilux', name: 'Hilux', category: Category.NIAGA, imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/38/387/toyota-hilux-headlight-916291.jpg' },
  { id: 'hilux-rangga', name: 'Hilux Rangga', category: Category.NIAGA, imageUrl: 'https://imgcdnblog.carmudi.com.ph/wp-content/uploads/2024/10/15211417/Toyota-Hilux-Rangga-2-500x333.jpeg' },

  // Sport
  { id: 'gr86', name: 'GR 86', category: Category.SPORT, imageUrl: 'https://d3amihv3gny8d3.cloudfront.net/TeamToyota/research/2025/gr86/images/mlp-img-perf.jpg' },
  { id: 'supra', name: 'Supra A90', category: Category.SPORT, imageUrl: 'https://img.autofun.co.id/file/56fd6fc2987f44189d5da01cbc4134a4.jpg' },
];
