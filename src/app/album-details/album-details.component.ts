import { Component, OnInit } from '@angular/core';
import { ActivatedRoute    } from '@angular/router';
import { Album             } from '../album.module';
import { AlbumsService     } from '../albums.service';
//
@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
//
export class AlbumDetailsComponent implements OnInit {
  //     
  albumDetails: Album | undefined;
  //
  constructor(private route: ActivatedRoute, private _albumService: AlbumsService) 
  {
      //
  }
  //
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 12) - 1;
    console.log('getting in to the album detail', id)
    this.albumDetails = this._albumService?.getAlbums()[id];
  };
}
