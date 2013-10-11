//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();

	var scrollView = Ti.UI.createScrollView({
		scrollType : 'vertical',
		backgroundImage : '/web/kokone-iconos/barra.png',
		showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : true,
		left : '85%',
		width : '16%'
	});

	var image = Ti.UI.createImageView({
		image : '/web/kokone-iconos/profesora.png',
		bottom : '0%',
		right : '0%'
	});

	var imageSEP = Ti.UI.createImageView({
		image : '/web/kokone-iconos/Logo-SEP-peq.png',
		top : '1%',
		right : '1%'
	});

	var btnInicio = Titanium.UI.createButton({
		title : '',
		top : 80,
		height : 100,
		width : 80,

		backgroundImage : '/web/kokone-iconos/inicio-s.png'

	});

	var btnCalendar = Titanium.UI.createButton({
		title : '',
		top : 200,
		height : 100,
		width : 80,
		backgroundImage : '/web/kokone-iconos/calendario.png'

	});

	var btnRevision = Titanium.UI.createButton({
		title : '',
		top : 320,
		height : 100,
		width : 80,
		backgroundImage : '/web/kokone-iconos/revision.png'

	});

	var btnInforme = Titanium.UI.createButton({
		title : '',
		top : 440,
		height : 100,
		width : 80,
		backgroundImage : '/web/kokone-iconos/informe.png'

	});

	var webview = Titanium.UI.createWebView({
		top : 0,
		left : 0,
		width : '85%',
		url : 'http://kokone.inteliglobe-mex.com:8078/portal'
	});

	btnInicio.addEventListener('click', function(e) {
		Titanium.API.info("You clicked the button btnInicio");
		webview.setUrl("http://kokone.inteliglobe-mex.com:8078/portal");
		btnInicio.setBackgroundImage('/web/kokone-iconos/inicio-s.png');
		btnCalendar.setBackgroundImage('/web/kokone-iconos/calendario.png');
		btnRevision.setBackgroundImage('/web/kokone-iconos/revision.png');
		btnInforme.setBackgroundImage('/web/kokone-iconos/informe.png');

	});

	btnCalendar.addEventListener('click', function(e) {
		Titanium.API.info("You clicked the button btnCalendar");
		webview.setUrl("http://www.sep.gob.mx/");
		btnInicio.setBackgroundImage('/web/kokone-iconos/inicio.png');
		btnCalendar.setBackgroundImage('/web/kokone-iconos/calendario-s.png');
		btnRevision.setBackgroundImage('/web/kokone-iconos/revision.png');
		btnInforme.setBackgroundImage('/web/kokone-iconos/informe.png');

	});

	btnRevision.addEventListener('click', function(e) {
		Titanium.API.info("You clicked the button btnRevision");
		webview.setUrl("http://kokone.inteliglobe-mex.com/add/revision.html");
		btnInicio.setBackgroundImage('/web/kokone-iconos/inicio.png');
		btnCalendar.setBackgroundImage('/web/kokone-iconos/calendario.png');
		btnRevision.setBackgroundImage('/web/kokone-iconos/revision-s.png');
		btnInforme.setBackgroundImage('/web/kokone-iconos/informe.png');

	});

	btnInforme.addEventListener('click', function(e) {
		Titanium.API.info("You clicked the button btnInforme");
		webview.setUrl("http://docs.google.com/viewer?url=http://www.adobe.com/content/dam/Adobe/en/devnet/acrobat/pdfs/access.pdf");
		btnInicio.setBackgroundImage('/web/kokone-iconos/inicio.png');
		btnCalendar.setBackgroundImage('/web/kokone-iconos/calendario.png');
		btnRevision.setBackgroundImage('/web/kokone-iconos/revision.png');
		btnInforme.setBackgroundImage('/web/kokone-iconos/informe-s.png');
	});

	scrollView.add(btnInicio);
	scrollView.add(btnCalendar);
	scrollView.add(btnRevision);
	scrollView.add(btnInforme);

	self.add(scrollView);
	self.add(webview);
	self.add(image);
	self.add(imageSEP);

	Ti.Gesture.addEventListener('orientationchange', function(e) {
		Titanium.API.info('Orientation changed');
	});

	return self;
}

module.exports = FirstView;
