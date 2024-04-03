
		$(document).ready(function(){
		   s4 = [0];
		   plot3 = $.jqplot('chart4',[s4],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 150,
					   intervals:[0, 25, 75, 125, 150],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		});
		function perform_meter4(){
		s4[0]=parseFloat(document.getElementById('VR').value);
		plot3 = $.jqplot('chart4',[s4],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 150,
					   intervals:[0, 25, 75, 125, 150],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		}
