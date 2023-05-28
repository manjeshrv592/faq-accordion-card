const accordions = document.querySelectorAll('.accordion-head');

accordions.forEach(accordion => {
  accordion.addEventListener('click', function (e) {
    const el = e.target;
    const accordionItem = el.closest('.accordion-item');
    const accordionBodyWrapper = accordionItem.querySelector(
      '.accordion-body-wrapper'
    );

    accordionItem.classList.toggle('active');

    if (accordionItem.classList.contains('active')) {
      accordionBodyWrapper.style.maxHeight =
        accordionBodyWrapper.scrollHeight + 'px';
    } else {
      accordionBodyWrapper.style.maxHeight = '0px';
    }
  });
});
