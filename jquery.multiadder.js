/*
 * Pattern: Multi adder
 * A generic way to repeating part in an HTML file
 * 
 * E.g. you would use it to make a list you can add 5 items to (see demo)
 * 
 * REQUIRED add a maximum with data attribute:
 * <div class="multi-adder" data-maxrows="5">
 *
 * www.wolfslittlestore.be
 * Copyright 2013, Wolf's Little Store
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

(function($) {

  function addMultiAdderRow(thisMultiAdder)
  {
    var row = thisMultiAdder.find('.multi-adder-row-holder:hidden').html();
    if (thisMultiAdder.children('.multi-adder-row').length == 0) {
      // If there are no rows yet
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
  $('.multi-add').click(function(e) {
    e.preventDefault();

    // Set up our variables
    var thisMultiAdder = $(this).parents('.multi-adder'),
        maxRows = thisMultiAdder.attr('data-maxrows');

    if (thisMultiAdder.find('.multi-adder-row').length < maxRows) {
      addMultiAdderRow(thisMultiAdder);
    } else {
      alert('Maximum reached.');
    }
  });

  // Delete a row from multi adder
  // Is bugged
  $('.multi-adder-delete').on('click', function(e) {
      e.preventDefault();
      var thisMultiAdderRow = $(this).parents('.multi-adder-row');
      removeMultiAdderRow(thisMultiAdderRow);
    });

  // Optional jwerty support
  // Is bugged
  if (typeof JwertyCode == 'function') {
    alert('jwery');
    $('.multi-adder input').focus(function() {
      jwerty.key('enter', function () {
        addMultiAdderRow();
      });
    });
    $('.multi-adder .multi-adder-delete').focus(function() {
      jwerty.key('enter', function () {
        removeMultiAdderRow();
      });
    });
  }
  
  // To make this a real plugin?
  // $.fn.pluginName = function() {
  //   var method = arguments[0];
  //  
  //   if(methods[method]) {
  //     method = methods[method];
  //     arguments = Array.prototype.slice.call(arguments, 1);
  //   } else if( typeof(method) == 'object' || !method ) {
  //     method = methods.init;
  //   } else {
  //     $.error( 'Method ' +  method + ' does not exist on jQuery.pluginName' );
  //     return this;
  //   }
  //  
  //   return method.apply(this, arguments);
  //  
  // }
  
})(jQuery);