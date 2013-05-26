(function( $ ) {
  $.fn.multiAdder = function(options) {
  
    // Plugin settings
    // No options yet
    var settings = $.extend( {
      placeholder         : 'value'
    }, options);

    function addMultiAdderRow(thisMultiAdder)
    {
      var row = thisMultiAdder.find('.multi-adder-row-holder:hidden').html();
      console.log(row);

      // If there are no rows yet
      if (thisMultiAdder.children('.multi-adder-row').length === 0) {
        thisMultiAdder.find('>:first-child').after(row);
        thisMultiAdder
          .find('.multi-adder-row:first')
          .find('input, textarea, select')
          .filter(':visible:first')
          .focus();
      } else {
        // If there are rows add row after the last one
        thisMultiAdder
          .children('.multi-adder-row:last').after(row);

        var lastRow = thisMultiAdder.find('> .multi-adder-row:last');
      
        lastRow
          .find('input, textarea, select')
          .filter(':visible:first')
          .focus();
      }
    }
  
    function removeMultiAdderRow(thisMultiAdderRow)
    {
      thisMultiAdderRow.remove();
    }

    // Add a row to multi adder
    $('.multi-adder').on('click', '.multi-add', function(e){
      e.preventDefault();

      // Set up our variables
      var thisMultiAdder = $(this).parents('.multi-adder');

      // Only set up our maxRows var if the attribute exists
      var maxRows = thisMultiAdder.attr('data-maxrows') || 0;

      // Stop adding rows if max rows value is reached
      if (maxRows) {
        if (thisMultiAdder.find('.multi-adder-row').length < maxRows) {
          addMultiAdderRow(thisMultiAdder);
        } else {
          alert('Maximum reached.');
        }
      } else {
        // Else just add the row
        addMultiAdderRow(thisMultiAdder);
      }
    });

    // Delete a row from multi adder
    $('.multi-adder').on('click', '.multi-adder-delete', function(e){
      e.preventDefault();
      var thisMultiAdderRow = $(this).parents('.multi-adder-row');
      removeMultiAdderRow(thisMultiAdderRow);
    });

  };
})(jQuery);
