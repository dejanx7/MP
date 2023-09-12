import { Component, OnInit, inject } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private storageService = inject(StorageService);
  private searchService = inject(SearchService);

  logList: any[];
  logString: any;




  ngOnInit(): void {

    const userId = this.storageService.getUser().id;

    this.searchService.getUserLog(userId).subscribe({

      next: (data) => {
        this.logList = data,
        console.log("log list is ", this.logList);

  

      }
    })

  }

  deleteLog(logId: string){

    this.searchService.deleteUserLog(logId).subscribe({
      next: (data) => (console.log(data))
    })

    console.log("id for this log is " , logId)
    window.location.reload();
    
  }

}
