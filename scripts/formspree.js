function removeAlert() {
  const alertNode = document.querySelector('.alert');
  setTimeout(() => {
    alertNode.remove();
  }, 5000);
}

const $contactForm = $('.contact-form');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/efjonsson@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
		},
		success: function(data) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--success">Message sent!</div>');
      removeAlert();
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Oops, there was an error.</div>');
      removeAlert();
		}
	});
});
