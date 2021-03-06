(function( $ ) {

    $.fn.barjste = function(action, props = {}) {

      const colors = {
        '$yellow': 'linear-gradient(to top, rgba(255,218,0, 0.6) '+(props.height || '60%')+', transparent '+(props.height || '60%')+', transparent 100%)',
        '$blue': 'linear-gradient(to top, #03A9F4 '+(props.height || '60%')+', transparent '+(props.height || '60%')+', transparent 100%)',
        '$red': 'linear-gradient(to top, #EF5350 '+(props.height || '60%')+', transparent '+(props.height || '60%')+', transparent 100%)',
        '$green': 'linear-gradient(to top, #66BB6A '+(props.height || '60%')+', transparent '+(props.height || '60%')+', transparent 100%)',
        '$pink': 'linear-gradient(to top, #F06292 '+(props.height || '60%')+', transparent '+(props.height || '60%')+', transparent 100%)',
        '$white': 'linear-gradient(to top, #FAFAFA '+(props.height || '60%')+', transparent '+(props.height || '60%')+', transparent 100%)',
        '$black': 'linear-gradient(to top, #000 '+(props.height || '60%')+', transparent '+(props.height || '60%')+', transparent 100%)'
      }

      if (action == 'highlight') {

        if ($('.barjste--highlight')[0]) {

          if (props.color) {
            $('#barjste').html(
              '.barjste--highlight{background-image: ' + colors[props.color] || 'linear-gradient(to top, '+props.color+' '+(props.height || '60%')+', transparent '+(props.height || '60%')+', transparent 100%)'
            )
          }

        } else {

          $('html > head').append($('<style id="barjste" type="text/css">.barjste--highlight{background-image: '+(props.color ? colors[props.color] || 'linear-gradient(to top, '+props.color+' '+(props.height || '60%')+', transparent '+(props.height || '60%')+', transparent 100%)' : colors.$yellow)+'}</style>'));

        }

        this.wrapInner('<span class="barjste--highlight"></span>');

      }

      if (action == 'unhighlight') {

        this.each(function() {
          $(this).html($(this).contents().contents());
        })

      }

      if (action == 'redact') {

        if ($('.barjste--redact')[0]) {

          if (props.color) {

            $('#barjste-redact').html(

              '.barjste--redact{background-color: '+props.color+'}'

            )

          }

        } else {

          $('html > head').append($('<style id="barjste-redact" type="text/css">.barjste--redact{background-color: '+(props.color || '#000')+'}</style>'));

        }

        this.wrapInner('<span class="barjste--redact"></span>');

      }

      return this;

    };

}( jQuery ));
