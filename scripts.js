

$(".col-3").click(function () {
    var idChiffre =  +($(this).attr('id')) ;
    var idblanc = +($('.blanc').attr('id')) ;
   console.log(typeof idChiffre);
   console.log(idChiffre);

   if ((idChiffre + 1) === idblanc || (idChiffre - 1) === idblanc || (idChiffre + 4) === idblanc || (idChiffre - 4) === idblanc ) {
      console.log('coucou')
      // modifier la div blanc
      $('.blanc').text($(this).text())
      $('.blanc').removeClass('blanc').addClass('col-3 chiffre');
      // modifier la div chiffre
      $(this).removeClass('chiffre').addClass('blanc');
      $(this).empty()
   }
})


