import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5geodata_usaLow from "@amcharts/amcharts5-geodata/usaLow";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {
  // private root!: am5.Root;

  constructor(@Inject(PLATFORM_ID) private platformId: any, private zone: NgZone) { }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      let root = am5.Root.new("chartdiv");
console.log(root)

      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([
        am5themes_Animated.new(root)
      ]);


      // Create the map chart
      // https://www.amcharts.com/docs/v5/charts/map-chart/
      let chart = root.container.children.push(am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "translateY",
        projection: am5map.geoAlbersUsa()
      }));
      console.log(chart)


      // Create main polygon series for countries
      // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
      let polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_usaLow,
        exclude: ["AQ"]
      }));
      console.log(polygonSeries._mainDataItems)

      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        toggleKey: "active",
        interactive: true
      });

      polygonSeries.mapPolygons.template.states.create("hover", {
        fill: root.interfaceColors.get("primaryButtonHover")
      });

      polygonSeries.mapPolygons.template.states.create("active", {
        fill: root.interfaceColors.get("primaryButtonActive")
      });

      // Set clicking on "water" to zoom out
      // chart.chartContainer.get("background").events.on("click", function() {
      //   chart.goHome();
      // })

      // Add zoom control
      // https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
      let zoomControl = chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
      let homeButton = zoomControl.children.moveValue(am5.Button.new(root, {
        paddingTop: 10,
        paddingBottom: 10,
        icon:
          am5.Graphics.new(root, {
            svgPath: "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8",
            fill: am5.color(0xffffff)
          })
      }), 0)

      homeButton.events.on("click", function () {
        chart.goHome();
      })

      // Make stuff animate on load
      chart.appear(1000, 100);

    });
  }
}
