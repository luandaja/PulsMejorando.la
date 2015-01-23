var $form = $('#formulario'),
	$titulo=$('#titulo'),
	$url = $('#url'),
	$buttom = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();

if(localStorage.getItem('autosave')){
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval(guardarTitulo,1000)

function guardarTitulo(){
	sessionStorage.setItem('titulo',$titulo.val());
	sessionStorage.setItem('url',$url.val());

}

function mostrarFormulario(){
	$form.slideToggle();
	$list.slideToggle();
	return false;
}

function limpiarCampos(){
	$titulo.val() = "";
}

function agregarPost(){
	var url = $url.val(),
		titulo = $titulo.val(),
		$clon = $post.clone();
	
	$clon.find('.titulo_item a')
			.text(titulo)
			.attr('href',url);
	$clon.hide();
	$list.prepend($clon);
	$clon.fadeIn();
	mostrarFormulario();
	limpiarCampos();
	return false;
}

$buttom.click(mostrarFormulario);
$form.on('submit', agregarPost);