import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UploadService {

  constructor(private db: AngularFireDatabase) { }

  update(photoId, productID){
    return this.db.object('/photos/' + photoId).update({Product: productID});
  }

}
