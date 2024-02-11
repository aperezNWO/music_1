import { Component} from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../album.module';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent{
  //
  albums  : Album[] = [];
  //
  constructor(albumsService : AlbumsService)
  {
      //
      console.log("getting albums...");    
      //
      this.albums = albumsService.getAlbums();
  }

}





