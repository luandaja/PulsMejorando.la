var $form = $('#formulario'),
	$titulo=$('#titulo'),
	$url = $('#url'),
	$buttom = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();

function mostrarFormulario(){
	$form.slideToggle();
	return false;
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
	return false;
}

$buttom.click(mostrarFormulario);
$form.on('submit', agregarPost);