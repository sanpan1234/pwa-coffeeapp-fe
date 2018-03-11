import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffee } from '../../models/coffee';
import { GeolocationService } from '../../services/geolocation.service';
import { TastingRating } from '../../models/tasting-rating';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  coffee: Coffee;
  tastingEnabled: boolean = false;
  types = ['Espresso', 'Ristretto', 'Americano', 'Cappuccino', 'Frappe'];

  constructor(private route: ActivatedRoute, private geolocation: GeolocationService,
    private router: Router, private dataservice: DataService) { }
  routerSubscription: any;

  tastingRatingChanged(checked: boolean) {
    if (checked) {
      this.coffee.tastingRating = new TastingRating();
    } else {
      this.coffee.tastingRating = null;
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  save() {
    this.dataservice.save(this.coffee, result => {
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit() {
    this.coffee = new Coffee();
    this.routerSubscription = this.route.params.subscribe(params => {
      console.log(params['id']);
      if (params['id']) {
        this.dataservice.get(params['id'], response => {
          this.coffee = response;
          if (this.coffee.tastingRating &&
            JSON.stringify(this.coffee.tastingRating) !== '{}')
            this.tastingEnabled = true;
        });
      }
    });
    this.geolocation.requestLocation(location => {
      this.coffee.location.latitude = location.latitude;
      this.coffee.location.longitude = location.longitude;
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
