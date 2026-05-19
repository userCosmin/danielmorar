export interface Destination {
  id: string
  name: string
  region: string
  description: string
  image: string
  articleCount: number
}

export const destinations: Destination[] = [
  {
    id: "retezat",
    name: "Munții Retezat",
    region: "Carpații Meridionali",
    description: "Cel mai înalt masiv din România, cu vârfuri ce depășesc 2500m și peste 20 de lacuri glaciare",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    articleCount: 45
  },
  {
    id: "apuseni",
    name: "Munții Apuseni",
    region: "Carpații Occidentali",
    description: "Castelele de piatră calcaroasă și peșterile spectaculoase ale Transilvaniei",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    articleCount: 32
  },
  {
    id: "fagaras",
    name: "Munții Făgăraș",
    region: "Carpații Meridionali",
    description: "Creasta principală a României, cu Vârful Moldoveanu ajungând la 2544m",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    articleCount: 28
  },
  {
    id: "bucegi",
    name: "Munții Bucegi",
    region: "Carpații Meridionali",
    description: "Platoul Bucegi, Babele și Sfinxul - forme sculptate de natură în inima munților",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
    articleCount: 36
  },
  {
    id: "maramures",
    name: "Maramureș",
    region: "Carpații Orientali",
    description: "Satele maramureșene și drummingul carpatic în extremitatea de nord a României",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    articleCount: 18
  },
  {
    id: "vrancea",
    name: "Munții Vrancei",
    region: "Carpații Orientali",
    description: "Zona seismică cea mai activă din România, cu vârfuri și cascade spectaculoase",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    articleCount: 12
  }
]