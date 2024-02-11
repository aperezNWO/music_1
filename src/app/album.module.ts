//
export interface ISong {
    title    : string;
    duration : number; 
}
//
export interface Album {
    id       : number,
    artist   : string;
    imageUrl : string;
    date     : string[];
    songs    : ISong[];
}