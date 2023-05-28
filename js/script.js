const accordion = document.querySelector('.accordion');
const accordionItems = document.querySelectorAll('.accordion-head');

accordion.addEventListener('click', function (e) {
  const el = e.target;

  if (!el.classList.contains('accordion-head')) return;

  accordionItems.forEach(item => {
    const accordionItem = item.closest('.accordion-item');
    accordionItem.classList.remove('active');
    accordionItem.querySelector('.accordion-body-wrapper').style.maxHeight =
      '0px';
  });

  const activeItem = el.closest('.accordion-item');
  activeItem.classList.add('active');
  activeItem.querySelector('.accordion-body-wrapper').style.maxHeight =
    activeItem.querySelector('.accordion-body-wrapper').scrollHeight + 'px';
});

accordionItems[1].click();
