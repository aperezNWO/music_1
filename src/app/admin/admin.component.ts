import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlbumsService } from '../albums.service';
import { Album } from '../album.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  albumForm!: FormGroup
  albums: any;
  loading: any;
  musicAlbum: any;
  //
  constructor(private albumService: AlbumsService) {

  }
  //
  ngOnInit(): void {
    this.createForm()

  }

createForm() {
  this.albumForm = new FormGroup({
    title: new FormControl('',[Validators.required]),
    artist: new FormControl('',[Validators.required]),
    date: new FormControl('',[Validators.required]),
    imageURL: new FormControl('',[Validators.required]),
  });
  


}
onSubmit() {
    console.log('form entry')
    let lastId     : number  = this.albumService.getLastId();
    let P_title    : string  = this.albumForm.value["title"]    || "";
    let P_artist   : string  = this.albumForm.value["artist"]   || "";      
    let P_date     : string  = this.albumForm.value["date"]     || "";
    let P_imageURL : string  = this.albumForm.value["imageURL"] || "";      
    //
    console.log("P_title:"    , P_title);
    console.log("P_artist:"   , P_artist);
    console.log("P_date:"     , P_date);
    console.log("P_imageURL:" , P_imageURL);
    //
    let albumItem : Album = {
      id       : lastId,
      artist   : P_artist,
      imageUrl : P_imageURL,
      date     : [P_date],
      songs    : []
    };
    //
    //albumItem.artist = artist
    //
    this.albumService.addAlbum(albumItem);
  }
}
