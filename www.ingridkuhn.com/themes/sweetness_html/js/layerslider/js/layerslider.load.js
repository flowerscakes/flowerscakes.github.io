$(document).ready(function () {
	"use strict";

	// Calling LayerSlider 
		
        $('#slider').layerSlider({
            responsive: true,
            responsiveUnder: 1280,
            layersContainer: 1280,
            skin: 'outline',
            hoverPrevNext: true,
            skinsPath: './js/layerslider/skins/',
            autoStart: true,
			autoPlayVideos : false
        });
		
 });