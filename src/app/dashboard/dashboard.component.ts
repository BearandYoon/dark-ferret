import { Component } from '@angular/core';

import * as shape from 'd3-shape';
import * as d3 from 'd3';
import { colorSets } from '@swimlane/ngx-charts/release/utils/color-sets';
import { single, multi, bubble, generateData, generateGraph, colors } from '../core';

const monthName = new Intl.DateTimeFormat('en-us', { month: 'short' });
const weekdayName = new Intl.DateTimeFormat('en-us', { weekday: 'short' });

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  single: any[];
  multi: any[];
  dateData: any[];
  dateDataWithRange: any[];
  graph: { links: any[], nodes: any[] };
  range = false;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  tooltipDisabled = false;
  showYAxisLabel = false;
  showGridLines = true;
  innerPadding = 0;
  barPadding = 8;
  groupPadding = 16;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;

  // line interpolation
  curve = shape.curveBasis;

  colorScheme = {
    domain: colors
  };
  schemeType = 'ordinal';
  rangeFillOpacity = 0.15;

  // line, area
  autoScale = true;
  timeline = false;

  allPosts = [{
    name: 'All Posts',
    value: 2814,
    percentage: 50,
    color: '#4f6f18'
  }];
  twitterPosts = [{
    name: 'Twitter Posts',
    value: 1350,
    percentage: 35,
    color: '#3e5574'
  }];
  facebookPosts = [{
    name: 'Facebook Posts',
    value: 430,
    percentage: 13,
    color: '#44569c'
  }];
  instagramPosts = [{
    name: 'Instagram Posts',
    value: 1034,
    percentage: 40,
    color: '#c03395'
  }];

  lat = -34.397;
  lng = 150.644;
  latA = -34.754764;
  lngA = 149.736246;
  zoom = 8;

  constructor() {
    Object.assign(this, {
      single,
      multi
    });

    this.dateData = generateData(2, false);
    this.dateDataWithRange = generateData(2, true);
  }

  get dateDataWithOrWithoutRange() {
    if (this.range) {
      return this.dateDataWithRange;
    } else {
      return this.dateData;
    }

  }

  select(data) {
    console.log('Item clicked', data);
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }
}
