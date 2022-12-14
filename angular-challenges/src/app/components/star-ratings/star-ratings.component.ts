import { Component, Input } from '@angular/core';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss']
})
export class StarRatingsComponent {
  @Input() public rating = 5;
  faStart = faStar;
  faStarHalf = faStarHalf;
  farStar = farStar;
  public get fullStars(): number[] {
    const totalFullStars = Math.floor(this.rating);
    return Array(totalFullStars).fill(0);
  }

  public get hasHalfStar(): boolean {
    const highestRating = 5;
    const hasHalfStar = (this.rating - Math.floor(this.rating) >= 0.5) && this.rating !== highestRating;
    return hasHalfStar;
  }

  public get emptyStars(): number[] {
    const highestRating = 5;
    const totalEmptyStars = Math.floor(highestRating - this.rating);
    return Array(totalEmptyStars).fill(0);
  }
}
