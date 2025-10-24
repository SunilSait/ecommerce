import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = signal<Product[]>([
    {
      id: 1,
      name: 'Monkey D. Luffy',
      category: 'anime',
      price: 329,
      description: 'Future Pirate King - Luffy poster',
      imageUrl: 'https://i.ibb.co/vx3v1FbT/luffy.webp',
      rating: 4.8,
      inStock: true
    },
    {
      id: 2,
      name: 'Lionel Messi',
      category: 'sports',
      price: 399,
      description: 'The GOAT - Lionel Messi poster',
      imageUrl: 'https://i.ibb.co/0S2m7z0/messi.jpg',
      rating: 5.0,
      inStock: true
    },
    {
      id: 3,
      name: 'Stranger Things Season 5',
      category: 'movies',
      price: 449,
      description: 'Official Stranger Things Season 5 Netflix poster',
      imageUrl: 'https://i.ibb.co/Lhg0H2ZT/Stranger-Things-5-official-poster-netflix.jpg',
      rating: 4.9,
      inStock: true
    },
    {
      id: 4,
      name: 'Naruto Uzumaki',
      category: 'anime',
      price: 299,
      description: 'Legendary ninja Naruto poster',
      imageUrl: 'https://i.ibb.co/Jw9bmjm5/naruto.webp',
      rating: 4.8,
      inStock: true
    },
    {
      id: 5,
      name: 'Mountain Landscape',
      category: 'nature',
      price: 349,
      description: 'Breathtaking mountain vista poster',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      rating: 4.7,
      inStock: true
    },
    {
      id: 6,
      name: 'Cristiano Ronaldo',
      category: 'sports',
      price: 399,
      description: 'CR7 - Cristiano Ronaldo poster',
      imageUrl: 'https://i.ibb.co/HTzh5Jxr/CR7.jpg',
      rating: 5.0,
      inStock: true
    },
    {
      id: 7,
      name: 'Luffy Roger Style',
      category: 'anime',
      price: 329,
      description: 'Luffy channeling Gol D. Roger',
      imageUrl: 'https://i.ibb.co/Vc60QT7b/luffy-roger.webp',
      rating: 4.8,
      inStock: true
    },
    {
      id: 8,
      name: 'Spider-Man',
      category: 'movies',
      price: 429,
      description: 'Amazing Spider-Man poster',
      imageUrl: 'https://i.ibb.co/Xxmf7JYj/Spiderman-Poster.jpg',
      rating: 4.8,
      inStock: true
    },
    {
      id: 9,
      name: 'Ocean Sunset',
      category: 'nature',
      price: 329,
      description: 'Serene ocean sunset view poster',
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      rating: 4.8,
      inStock: true
    },
    {
      id: 10,
      name: 'Madara Uchiha',
      category: 'anime',
      price: 329,
      description: 'Legendary Uchiha clan leader poster',
      imageUrl: 'https://i.ibb.co/FbCDTj0z/madara.webp',
      rating: 4.9,
      inStock: true
    },
    {
      id: 11,
      name: 'Kylian Mbappe',
      category: 'sports',
      price: 379,
      description: 'Speed demon - Kylian Mbappe poster',
      imageUrl: 'https://i.ibb.co/r20Fxrxz/REAL-MADRID-POSTER-MBAPPE.jpg',
      rating: 4.8,
      inStock: true
    },
    {
      id: 12,
      name: 'Itachi Uchiha',
      category: 'anime',
      price: 349,
      description: 'The tragic hero - Itachi Uchiha',
      imageUrl: 'https://i.ibb.co/TDv9YqDJ/itachi.webp',
      rating: 5.0,
      inStock: true
    },
    {
      id: 13,
      name: 'Avengers',
      category: 'movies',
      price: 409,
      description: 'Epic Avengers Dooms Day movie poster',
      imageUrl: 'https://i.ibb.co/xKsgqXDd/download-9.jpg',
      rating: 4.7,
      inStock: true
    },
    {
      id: 14,
      name: 'Forest Trail',
      category: 'nature',
      price: 339,
      description: 'Peaceful forest pathway poster',
      imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
      rating: 4.6,
      inStock: true
    },
    {
      id: 15,
      name: 'Levi Ackerman',
      category: 'anime',
      price: 339,
      description: 'Humanity\'s strongest soldier poster',
      imageUrl: 'https://i.ibb.co/srYRqKs/levi.webp',
      rating: 4.9,
      inStock: true
    },
    {
      id: 16,
      name: 'MS Dhoni',
      category: 'sports',
      price: 389,
      description: 'Captain Cool - MS Dhoni poster',
      imageUrl: 'https://i.ibb.co/Y7HrRzxm/Ms-Dhoni.jpg',
      rating: 4.9,
      inStock: true
    },
    {
      id: 17,
      name: 'Death Note',
      category: 'anime',
      price: 359,
      description: 'Iconic Death Note series poster',
      imageUrl: 'https://i.ibb.co/27PwbSfg/death-note.webp',
      rating: 4.9,
      inStock: true
    },
    {
      id: 18,
      name: 'Harry Potter',
      category: 'movies',
      price: 399,
      description: 'Classic movie poster design',
      imageUrl: 'https://i.ibb.co/KcRD3978/download-10.jpg',
      rating: 4.6,
      inStock: true
    },
    {
      id: 19,
      name: 'Zenitsu Agatsuma',
      category: 'anime',
      price: 289,
      description: 'Thunder breathing master Zenitsu',
      imageUrl: 'https://i.ibb.co/DDV00fY2/zenitsu.webp',
      rating: 4.6,
      inStock: true
    },
    {
      id: 20,
      name: 'Neymar Jr',
      category: 'sports',
      price: 369,
      description: 'Brazilian magic - Neymar Jr poster',
      imageUrl: 'https://i.ibb.co/MDySy9m3/Neymar-poster-design.jpg',
      rating: 4.7,
      inStock: true
    },
    {
      id: 21,
      name: 'Roronoa Zoro',
      category: 'anime',
      price: 299,
      description: 'Epic Zoro poster - The Pirate Hunter',
      imageUrl: 'https://i.ibb.co/tps2LfDV/zoro.webp',
      rating: 4.9,
      inStock: true
    },
    {
      id: 22,
      name: 'Virat Kohli',
      category: 'sports',
      price: 389,
      description: 'King Kohli - Virat Kohli poster',
      imageUrl: 'https://i.ibb.co/Xxmf7JYj/Spiderman-Poster.jpg',
      rating: 4.9,
      inStock: true
    },
    {
      id: 23,
      name: 'Dragon Ball',
      category: 'anime',
      price: 349,
      description: 'Iconic Dragon Ball series poster',
      imageUrl: 'https://i.ibb.co/d0YzGw7D/dragon-ball.webp',
      rating: 4.9,
      inStock: true
    },
    {
      id: 24,
      name: 'Stranger Things Season 5',
      category: 'movies',
      price: 439,
      description: 'Stranger Things Season 5 official poster',
      imageUrl: 'https://i.ibb.co/Lhg0H2ZT/Stranger-Things-5-official-poster-netflix.jpg',
      rating: 4.8,
      inStock: true
    },
    {
      id: 25,
      name: 'Sosuke Aizen',
      category: 'anime',
      price: 319,
      description: 'Master manipulator Aizen poster',
      imageUrl: 'https://i.ibb.co/sdRS3r7w/aizen.webp',
      rating: 4.7,
      inStock: true
    },
    {
      id: 26,
      name: 'Eren Yeager',
      category: 'anime',
      price: 339,
      description: 'Attack Titan - Eren Yeager poster',
      imageUrl: 'https://i.ibb.co/ynKdG51B/eren.webp',
      rating: 4.7,
      inStock: true
    },
    {
      id: 27,
      name: 'Luffy Wano Arc',
      category: 'anime',
      price: 329,
      description: 'Monkey D. Luffy in Wano Country',
      imageUrl: 'https://i.ibb.co/ymhqj3cC/luffy-wano.webp',
      rating: 4.8,
      inStock: true
    },{
      id: 28,
      name: 'Satoru Gojo',
      category: 'anime',
      price: 349,
      description: 'The strongest sorcerer - Gojo Satoru',
      imageUrl: 'https://i.ibb.co/609zq4N4/gojo.webp',
      rating: 5.0,
      inStock: true
    }
    ,
    {
      id: 29,
      name: 'Northern Lights',
      category: 'nature',
      price: 359,
      description: 'Stunning aurora borealis display poster',
      imageUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
      rating: 4.9,
      inStock: true
    },
    {
      id: 30,
      name: 'Waterfall Paradise',
      category: 'nature',
      price: 349,
      description: 'Majestic waterfall in tropical paradise poster',
      imageUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80',
      rating: 4.8,
      inStock: true
    }
  ]);

  getProducts() {
    return this.products.asReadonly();
  }

  getProductById(id: number): Product | undefined {
    return this.products().find(p => p.id === id);
  }

  getProductsByCategory(category: string) {
    if (category === 'all') {
      return this.products();
    }
    return this.products().filter(p => p.category === category);
  }
}
