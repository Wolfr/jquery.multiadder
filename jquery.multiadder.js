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

$(document).ready(function() {

  // Add a row to multi adder

  function addMultiAdderRow(thisMultiAdder)
  {
    var row = thisMultiAdder.find('.multi-adder-row-holder:hidden').html();
    if (thisMultiAdder.children('.multi-adder-row').length == 0) {
      // If there are no rows yet
      thisMultiAdder.find('>:first-child').after(row);
      thisMultiAdder.find('.multi-adder-row:first').find('input[type=text],textarea,select').filter(':visible:first').focus();
    } else {
      // If there are
      thisMultiAdder.children('.multi-adder-row:last').after(row);
      // This is bugged
      thisMultiAdder.find('.multi-adder-row:last').find('input[type=text],textarea,select').filter(':visible:first').focus();
    }
  }
  
  // Remove a row from multi adder
  // This is bugged
  function removeMultiAdderRow(thisMultiAdderRow)
  {
    thisMultiAdderRow.remove();
  }

  $('.multi-adder .multi-add').click(function(e) {
    e.preventDefault();

    var thisMultiAdder = $(this).parents('.multi-adder');

    var maxRows = thisMultiAdder.attr('data-maxrows');

    if (thisMultiAdder.find('.multi-adder-row').length < maxRows) {
      addMultiAdderRow(thisMultiAdder);
    } else {
      alert('Maximum reached.');
    }
  });

  // Delete a row from multiAdder
  $('.multi-adder .multi-adder-delete').click(function(e) {
      e.preventDefault();

      var thisMultiAdderRow = $(this).parents('.multi-adder-row');
      removeMultiAdderRow(thisMultiAdderRow);
    });

  // Optional jwerty support
  if (jwerty) {
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
  };
  
});