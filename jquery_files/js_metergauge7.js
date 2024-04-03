		
		$(document).ready(function(){
		   s7 = [0];
		   plot3 = $.jqplot('chart7',[s7],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: -90,
					   max: 90,
					   intervals:[-90, -60, -30, 0, 30, 60, 90],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666','#66cc66', '#93b75f']
				   }
			   }
		   });
		});
		function perform_meter7(){
		s7[0]=parseFloat(document.getElementById('PF').value);
		plot3 = $.jqplot('chart7',[s7],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: -90,
					   max: 90,
					   intervals:[-90, -60, -30, 0, 30, 60, 90],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666','#66cc66', '#93b75f']
				   }
			   }
		   });
		}