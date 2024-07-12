// Replaced by spree_counties gem
document.addEventListener("spree:load", function() {
  $('#country_based').click(() => {
    show_country();
  });

  $('#state_based').click(() => {
    show_state();
  });

  $('#county_based').click(() => {
    show_county();
  });

  const showBasedOnSelection = () => {    
    if ($('#country_based').is(':checked')) {
      show_country();
    } else if ($('#state_based').is(':checked')) {
      show_state();
    } else if ($('#county_based').is(':checked')) {
      show_county();
    } else {
      show_state();
      $('#state_based').click();
    }
  };

  const show_country = () => {    
    hideAllMembers();
    $('#country_members :input').prop('disabled', false);
    $('#country_members').show();
  };
  
  const show_state = () => {    
    hideAllMembers();
    $('#state_members :input').prop('disabled', false);
    $('#state_members').show();
  };
  
  const show_county = () => {    
    hideAllMembers();
    $('#county_members :input').prop('disabled', false);
    $('#county_members').show();
  };
  
  const hideAllMembers = () => {
    $('#country_members :input').prop('disabled', true);
    $('#country_members').hide();
  
    $('#state_members :input').prop('disabled', true);
    $('#state_members').hide();
  
    $('#county_members :input').prop('disabled', true);
    $('#county_members').hide();
  
    $('#zone_members :input').prop('disabled', true);
    $('#zone_members').hide();
  };

  showBasedOnSelection();
});