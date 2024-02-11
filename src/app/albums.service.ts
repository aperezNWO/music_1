import { Injectable } from '@angular/core';
import { Album } from './album.module';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  albums: Album[] = [
    {
      id: 1,
      artist: 'Hillsong',
      imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb0348b5d0382fa856e5b3402a',
      date: ['December 13, 2009'],
      songs: [
        { "title": "Fearless", "duration": 241 },
        { "title": "Love Story", "duration": 235 },
        { "title": "Hey Stephen", "duration": 254 },
        { "title": "White Horse", "duration": 234 },
        { "title": "You Belong with Me", "duration": 233 },
        { "title": "Breathe", "duration": 263 },
        { "title": "Tell Me Why", "duration": 200 },
        { "title": "You're Not Sorry", "duration": 261 },
        { "title": "The Way I Loved You", "duration": 244 },
        { "title": "Forever & Always", "duration": 225 },
        { "title": "The Best Day", "duration": 245 },
        { "title": "Change", "duration": 280 }
      ]
    },
    {
      id: 2,
      artist: 'Oasis Ministery',
      imageUrl: '../assets/images/Oasis-Ministry.jpg',
      date: ['December 13, 2009'],
      songs: [
        { "title": "Fearless", "duration": 241 },
        { "title": "Love Story", "duration": 235 },
        { "title": "Hey Stephen", "duration": 254 },
        { "title": "White Horse", "duration": 234 },
        { "title": "You Belong with Me", "duration": 233 },
        { "title": "Breathe", "duration": 263 },
        { "title": "Tell Me Why", "duration": 200 },
        { "title": "You're Not Sorry", "duration": 261 },
        { "title": "The Way I Loved You", "duration": 244 },
        { "title": "Forever & Always", "duration": 225 },
        { "title": "The Best Day", "duration": 245 },
        { "title": "Change", "duration": 280 }
      ]
    },
    {
      id: 3,
      artist: 'Evan Craft',
      imageUrl: '../assets/images/Evan-Craft.jpg',
      date: ['Jun 20, 2009'],
      songs: [
        { "title": "Fearless", "duration": 241 },
        { "title": "Love Story", "duration": 235 },
        { "title": "Hey Stephen", "duration": 254 },
        { "title": "White Horse", "duration": 234 },
        { "title": "You Belong with Me", "duration": 233 },
        { "title": "Breathe", "duration": 263 },
        { "title": "Tell Me Why", "duration": 200 },
        { "title": "You're Not Sorry", "duration": 261 },
        { "title": "The Way I Loved You", "duration": 244 },
        { "title": "Forever & Always", "duration": 225 },
        { "title": "The Best Day", "duration": 245 },
        { "title": "Change", "duration": 280 }
      ]
    },
  ];

  constructor() { }

  getAlbums():Album[]
  {
      //
      return this.albums;
  }

  addAlbum(albumItem : Album)
  {
      this.albums.push(albumItem);
  }

  getLastId(): number {
    return this.albums[this.albums.length - 1].id + 1;
 }
}
