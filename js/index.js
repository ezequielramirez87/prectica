const fullPage = new fullpage('#fullPage', {
    autoScrolling: true,
    fitToSection: false,
    fitToSectionDelay: 300,
    easing: 'easeInOutCubic',
    scrollingSpeed: 700,
    css3: true,
    easingcss3: 'ease-out',
    loopBottom: true,
    //Barra de navegación
	navigation: true,
	menu: '#menu',
	anchors: ['inicio', 'productos', 'galeria' , 'contacto'],
	navigationTooltips: ['Inicio', 'Productos', 'Galeria','Contacto'],
    showActiveTooltip: false,
    sectionsColor : ['#000', '#c2c2c2', '#000'],
    verticalCentered: true,
    afterLoad: function (origin, destination){
        if(destination.anchor=='contacto'){
            document.querySelector('footer h2').style.opacity=1;
        }
    }
} );
