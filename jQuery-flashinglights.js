/*
 * Flashing Lights
 *
 * Created by Linus Johansson
 * http://www.redlinus.com
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 */

(function($) {
	$.fn.flashingLights = function(options) {
		myOptions = $.extend({ 
			rows: 10,
			columns: 10,
			rounded: "100%",
			lampHeight: "5px",
			lampWidth: "10px",
			onRatio: 0.1,
			offRatio: 0.7,
			refreshRate: 75,
			onColour: "white",
			offColour: "black",
			blurRadious: 15,
			}, options );
			console.log(myOptions.rows);
			var lampMap = '<div id="lampMap">';
			for (var i=0; i<myOptions.rows; i++) {
				lampMap += '<div class="row" id="tr'+ i +  '">';
				for (var t=0; t<myOptions.columns; t++) {
					lampMap += '<div id="lamp" class="td' + t +  ' off"">&nbsp;</div>';
				}
				lampMap += '</div>';
			}
			lampMap += '</div>';
			
			jQuery(this).append(lampMap);
			
			function activateLamps(){
				for (var y=0; y<myOptions.rows; y++) {
					for (var z=0; z<(myOptions.columns*myOptions.onRatio); z++) {
						var targetLamp = Math.floor(Math.random()*myOptions.columns);
						$('#tr'+ y + ' .td' + targetLamp).removeClass('off');
						$('#tr'+ y + ' .td' + targetLamp).addClass('on');
					}
				}
			}
			function killLamps(){
				for (var y=0; y<myOptions.rows; y++) {
					for (var z=0; z<(myOptions.columns*myOptions.offRatio); z++) {
						var targetLamp = Math.floor(Math.random()*myOptions.columns);
						$('#tr'+ y + ' .td' + targetLamp).removeClass('on');
						$('#tr'+ y + ' .td' + targetLamp).addClass('off');
					}
				}
			};
			
			setInterval(activateLamps, myOptions.refreshRate);
			setInterval(killLamps, myOptions.refreshRate);
			// this.append("<style> #lampMap .on {background-color:"+myOptions.onColour+";	-webkit-box-shadow: 0px 0px "+myOptions.blurRadious+"px "+myOptions.blurRadious+"px "+myOptions.onColour+";-moz-box-shadow: 0px 0px "+myOptions.blurRadious+"px "+myOptions.blurRadious+" "+myOptions.onColour+";box-shadow: 0px 0px "+myOptions.blurRadious+"px "+myOptions.blurRadious+"px "+myOptions.onColour+";}#lampMap .off {background-color:"+myOptions.offColour+";}</style>");
			this.prepend(`
			<style>	
		#lampMap {
			width: 100%;
			height: 100%;
			display:flex;
			display: -webkit-flex;
			align-content: space-evenly;
			flex-wrap: wrap;
		}

		#lampMap div {
			background-color: transparent; 
			-webkit-transition: all .25s ease-in-out; 
			-moz-transition: all .25s ease-in-out; 
			-o-transition: all .25s ease-in-out; 
			-webkit-transition: all .25s ease-in-out; 
			transition: all .25s ease-in-out;
		}


		#lampMap *{
			margin:0px;
			padding:0px;
		}
		#lampMap .row{
			width:100%;
			display:flex;
			display: -webkit-flex;
			justify-content: space-evenly;
		}
		#lampMap #lamp{
			border-radius: `+myOptions.rounding+`;
			width:`+myOptions.lampWidth+`;
			height:`+myOptions.lampHeight+`;
		}
		#lamps{
			display:flex;
			display: -webkit-flex;
			justify-content: center;
		}

		#lampMap .on {
			background-color:`+myOptions.onColour+`;
			-webkit-box-shadow: 0px 0px `+myOptions.blurRadious+`px `+myOptions.blurRadious+`px `+myOptions.onColour+`;
			-moz-box-shadow: 0px 0px `+myOptions.blurRadious+`px `+myOptions.blurRadious+`px `+myOptions.onColour+`;
			box-shadow: 0px 0px `+myOptions.blurRadious+`px `+myOptions.blurRadious+`px `+myOptions.onColour+`;
		}
		#lampMap .off {
			background-color:`+myOptions.offColour+`;
		}
		</style>`
		);
	};
})(jQuery);
