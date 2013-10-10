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
		width : '15%'
	});
	var btnInicio = Titanium.UI.createButton({
		title : '',
		top : 10,
		height : 34,
		width : 44,
		backgroundImage : '/web/kokone-iconos/inicio.png'

	});

	var btnCalendar = Titanium.UI.createButton({
		title : '',
		top : 54,
		height : 34,
		width : 44,
		backgroundImage : '/web/kokone-iconos/calendario.png'

	});

	var btnRevision = Titanium.UI.createButton({
		title : '',
		top : 98,
		height : 34,
		width : 44,
		backgroundImage : '/web/kokone-iconos/revision.png'

	});

	var btnInforme = Titanium.UI.createButton({
		title : '',
		top : 142,
		height : 34,
		width : 44,
		backgroundImage : '/web/kokone-iconos/informe.png'

	});

	var webview = Titanium.UI.createWebView({
		top : 0,
		left : 0,
		width : '85%',
		url : 'http://www.google.com'
	});

	btnInicio.addEventListener('click', function(e) {
		Titanium.API.info("You clicked the button btnInicio");
		webview.setUrl("http://www.cacei.org/");

	});

	btnCalendar.addEventListener('click', function(e) {
		Titanium.API.info("You clicked the button btnCalendar");
		webview.setUrl("http://www.sep.gob.mx/");

	});

	btnRevision.addEventListener('click', function(e) {
		Titanium.API.info("You clicked the button btnRevision");
		webview.setUrl("http://www.inteliglobe.com/");

	});

	btnInforme.addEventListener('click', function(e) {
		Titanium.API.info("You clicked the button btnInforme");
		webview.setUrl("http://www.cacei.org/");

	});

	scrollView.add(btnInicio);
	scrollView.add(btnCalendar);
	scrollView.add(btnRevision);
	scrollView.add(btnInforme);

	self.add(scrollView);

	self.add(webview);

	return self;
}

module.exports = FirstView;
