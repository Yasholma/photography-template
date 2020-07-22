
// Preloader
$(window).on('load', () => {
  $('#preloader').fadeOut(500)
})

$(function () {
  // Smooth Scrolling
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault()

      const hash = this.hash

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
      )
    }
  })
})

/* =================================================== 
                    Portfolio
   ================================================== */

$(window).on('load', () => {
  // Initialize Isotope
  $('#isotope-container').isotope({})

  // filtering on button click
  $('#isotope-filters').on('click', 'button', function () {
    // get data-filter value
    const filterValue = $(this).attr('data-filter')

    // filter portfolio items
    $('#isotope-container').isotope({
      filter: filterValue,
    })

    // active button
    $('#isotope-filters').find('.active').removeClass('active')
    $(this).addClass('active')
  })
})

/* =================================================== 
                    Magnifier
   ================================================== */
$(function () {
  $('#portfolio-wrapper').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
    },
  })
})

/* =================================================== 
                    AOS
   ================================================== */
AOS.init()
