import { Component, Input } from '@angular/core';
import { IconDefinition, IconName, IconProp, IconStyle } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public title = '';
  @Input() public subTitle = '';
  public iconClasses: IconProp = faInfoCircle;
}
