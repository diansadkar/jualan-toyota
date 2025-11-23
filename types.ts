export enum Category {
  SEDAN = 'Sedan',
  SUV = 'SUV',
  MPV = 'MPV',
  NIAGA = 'Niaga',
  SPORT = 'Sport'
}

export interface CarModel {
  id: string;
  name: string;
  category: Category;
  description?: string;
  isFeatured?: boolean;
  imageUrl: string;
}

export interface ContactInfo {
  dealerName: string;
  address: string;
  whatsapp: string;
  hours: string;
}

export interface MessageForm {
  name: string;
  phone: string;
  modelInterest: string;
  message: string;
}