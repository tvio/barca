let akt
let iakt = -1
let last = $('.slides').last().index()
let first = $('.slides').first().index()
let prvni = true
$('.arrows').one('click', function () {
  let vcss = {
    animation: 'none',
    animationDelay: 0,
    animationPlayState: 'paused',
  }
  $('.slides').css(vcss)
})

$('.arrows').click(function (e) {
  akt = $('.slides').filter(function () {
    return $(this).css('opacity') == 1
  })
  $('.slides').css('opacity', 0)
  let sipka = $(e.target)
  console.log(sipka)
  iakt = akt.index()
  if (sipka.is('#next')) {
    console.log('klik next')
    if (iakt == last) {
      iakt = 0
    } else if (prvni) {
      iakt = iakt + 2
      prvni = false
    } else {
      iakt = iakt + 1
    }
  } else {
    console.log('klik prev')
    if (iakt == first) {
      iakt = last
    } else if (prvni) {
      iakt = -2
      prvni = false
    } else {
      iakt -= 1
    }
  }

  akt = $('.slides').eq(iakt)
  akt.css('opacity', 1)
  console.log('inAktKladiska>>' + iakt)
})
