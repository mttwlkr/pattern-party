$('.tab-title').on('click', toggleTabs)
$('.nav-bar-title-wrapper').on('click', toggleNavBar)

function toggleTabs() {
  const tabNumber = $(this).attr('id');

  $('.tab-title').each(function(index, title) {
    if ($(title).attr('id') === tabNumber) {
      if ($( window ).width() < 700) {
        $(title).toggleClass('active-title')
        toggleSpan(title)
      } else {
        $(title).addClass('active-title')        
      }
    } else {
      $(title).removeClass('active-title')
    }
  })
  
  $('.tab-body').each(function(index, body) {
    if ($(body).attr('id') === tabNumber) {
      if ($( window ).width() < 700) {
        $(body).toggleClass('active-body')
      } else {
        $(body).addClass('active-body') 
      }
    } else {
      $(body).removeClass('active-body')
    }
  })
}

function toggleSpan(tab) {
  const tabNumber = $(tab).attr('id');

  $('.tab-title').each(function(index, title) {
    if ($(title).attr('id') === tabNumber) {
      if ($(title).hasClass('active-title')) {
        $(title).children('span').text('-')
      } else {
        $(title).children('span').text('+')
      }
    } else {
      $(title).children('span').text('+')
    }
  })
}

function toggleNavBar() {
  $('.nav-bar-main').toggleClass('nav-bar-active')
}


