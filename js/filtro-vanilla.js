(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var btnFil = document.querySelectorAll('.btn-fil');
    var i;

    for (i = 0; i < btnFil.length; i++) {
      btnFil[i].addEventListener('click', function(e) {
        e.preventDefault();
        var filtro = this.getAttribute("data-filter");

        if (filtro == "todos") {
          showAll();
        } else {
          hideNonFiltered(filtro);
          showFiltered(filtro);
        }
      });
    }

    var liElems = document.querySelectorAll('ul.fil li');

    for (i = 0; i < liElems.length; i++) {
      liElems[i].addEventListener('click', function() {
        this.classList.add('activeee');
        var siblings = getSiblings(this);

        for (i = 0; i < siblings.length; i++) {
          siblings[i].classList.remove('activeee');
        }
      });
    }
  });

  function showAll() {
    var boxCatElems = document.querySelectorAll('.box-cat');
    var i;

    for (i = 0; i < boxCatElems.length; i++) {
      boxCatElems[i].style.display = 'flex';
    }
  }

  function hideNonFiltered(filtro) {
    var boxCatElems = document.querySelectorAll('.box-cat:not(.' + filtro + ')');
    var i;

    for (i = 0; i < boxCatElems.length; i++) {
      boxCatElems[i].style.display = 'none';
    }
  }

  function showFiltered(filtro) {
    var boxCatElems = document.querySelectorAll('.box-cat.' + filtro);
    var i;

    for (i = 0; i < boxCatElems.length; i++) {
      boxCatElems[i].style.display = 'flex';
    }
  }

  function getSiblings(elem) {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;

    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== elem) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }

    return siblings;
  }
})();
