import { Component, OnInit, inject } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test-user',
  templateUrl: './test-user.component.html',
  styleUrls: ['./test-user.component.css']
})
export class TestUserComponent implements OnInit {

private testService = inject(TestService);

content : any;


  ngOnInit(): void {
    
    this.testService.getUserContent().subscribe({

      next: (data) => {
        console.log(data)
        this.content = data;
      }

    })
  }

  

}
