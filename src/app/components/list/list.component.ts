import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Coffee } from '../../models/coffee';
import { Router } from '@angular/router';
import { GeolocationService } from '../../services/geolocation.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  coffeeList: [Coffee]

  constructor(private data: DataService, private router: Router,
    private geoSvc: GeolocationService) { }

  goDetails(coffee: Coffee){
    this.router.navigate(['/coffee', coffee._id]);
  }
  
  goMap(coffee: Coffee){
    location.href = this.geoSvc.getMapLink(coffee.location);
  }

  share(coffee: Coffee){
    if ('share' in navigator){
      navigator['share']({
        title: coffee.name,
        text: `I had this coffee at ${coffee.place} and it is yum!`,
        url: window.location.href
      }).then(() => console.log('shared'));
    }
  }

  ngOnInit() {
    this.data.getList(list => {
      this.coffeeList = list;
    })
  }

}
