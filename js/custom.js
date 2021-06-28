(function() {

  // loader function
  $(window).load(function() {
    // fades out when the page is fully loaded
    $('.loader').delay(2000).fadeOut(500);
  });
  // loader ENDS

  // fullpage custom js starts
  var myFullpage = new fullpage('#fullpage', {
    licenseKey: null,
    controlArrows: false,
    scrollOverflow: true // to scroll inside of sections & slides
  });
  // fullpage custom js ENDS

  fullpage_api.setScrollingSpeed(2000); // setting scrolling speed to 2s
  fullpage_api.setAllowScrolling(false); // setting auto scrolling to false

  // defined variables
  var browseAccomodations = document.querySelector('#browseAccomodations');
  var goBackOne = document.querySelector('#goBackOne');
  var goBackTwo = document.querySelector('#goBackTwo');
  var goBackThree = document.querySelector('#goBackThree');
  var goBackFour = document.querySelector('#goBackFour');
  var goBackFive = document.querySelector('#goBackFive');
  var getStayData = document.querySelector('#getStayData');
  var getGuests = document.querySelector('#guestsQty');
  var getMeals = document.querySelector('#meals');
  var getErrorMessage = document.querySelector('#errorMessage');
  var getPropertyOne = document.querySelector('#propertyOne');
  var getPropertyOneImg = document.querySelector('#propertyOneImg');
  var getPropertyOneName = document.querySelector('#propertyOneName');
  var getPropertyTwo = document.querySelector('#propertyTwo');
  var getPropertyTwoImg = document.querySelector('#propertyTwoImg');
  var getPropertyTwoName = document.querySelector('#propertyTwoName');
  var getPropertyThree = document.querySelector('#propertyThree');
  var getPropertyThreeImg = document.querySelector('#propertyThreeImg');
  var getPropertyThreeName = document.querySelector('#propertyThreeName');
  var getPropertyFour = document.querySelector('#propertyFour');
  var getPropertyFourImg = document.querySelector('#propertyFourImg');
  var getPropertyFourName = document.querySelector('#propertyFourName');
  var getPropertyFive = document.querySelector('#propertyFive');
  var getPropertyFiveImg = document.querySelector('#propertyFiveImg');
  var getPropertyFiveName = document.querySelector('#propertyFiveName');
  var getPropertySix = document.querySelector('#propertySix');
  var getPropertySixImg = document.querySelector('#propertySixImg');
  var getPropertySixName = document.querySelector('#propertySixName');
  var getPropertyName = document.querySelector('.propertyName');
  var getPropertyImage = document.querySelector('#propertyImage');
  var getPropertyDescription = document.querySelector('#propertyDescription');
  var getPropertyContact = document.querySelector('#propertyContact');
  var getPropertyEmail = document.querySelector('#propertyEmail');
  var getPropertyAddress = document.querySelector('#propertyAddress');
  var getPropertyPrices = document.querySelector('.propertyPrice');
  var bookAccomodation = document.querySelector('#bookAccomodation');
  var bookedPName = document.querySelector('#bookedPropertyName');
  var bookedPPrice = document.querySelector('#bookedPropertyPrice');
  var bookedNights = document.querySelector('#bookedPropertyNights');
  var bgImg = document.querySelector('#bookingPage');
  var confirmBooking = document.querySelector('#confirmBooking');
  var bookingDone = document.querySelector('#bookingDone');
  var custFName = document.querySelector('#fname');
  var custLName = document.querySelector('#lname');
  var fullname = document.querySelector('#fullname');
  var startOver = document.querySelector('#startOver');

  browseAccomodations.onclick = function() {
    fullpage_api.moveSectionDown();
  };

  goBackOne.onclick = function() {
    fullpage_api.moveSectionUp();
  };

  goBackTwo.onclick = function() {
    fullpage_api.moveSectionUp();
  };

  goBackThree.onclick = function() {
    fullpage_api.moveSectionUp();
  };

  goBackFour.onclick = function() {
    fullpage_api.moveSectionUp();
  };

  goBackFive.onclick = function() {
    fullpage_api.moveSlideLeft();
  };

  confirmBooking.onclick = function() {
    fullpage_api.moveSlideRight();
  };

  startOver.onclick = function() {
    location.reload();
  };

  // parsley custom js starts
  var form = $('#parent').parsley();

  // find #getStayData in #parent and set up a click function on it
  $('#parent').find('#getStayData').click(function() {
    // Validate the form on click
    form.validate();
  });

  // only runs when form is successfully validated
  form.subscribe('parsley:form:success', function(e) {

    // anime js starts
    anime({
      targets: '.card',
      translateY: -500,
      delay: anime.stagger(500, {
        from: 'center'
      }),
      duration: 2000,
      loop: false
    });
    // anime js ENDS

    // getting number of nights from date picker
    window.getNights = document.querySelector('.datepicker__info-text--selected-days span');

    // setting values of meal inputs from data.js
    getMeals[1].value = mealData.noMeals;
    getMeals[2].value = mealData.breakfastOnly;
    getMeals[3].value = mealData.lunchOnly;
    getMeals[4].value = mealData.dinnerOnly;
    getMeals[5].value = mealData.allMeals;

    // displays selection of nights and adults
    document.querySelectorAll('.info').textContent = 'Your selection is for ' + parseInt(getNights.innerHTML) + ' nights and ' + getGuests.value + ' people.';

    // displays meal total considering number of nights and adults
    document.querySelectorAll('.mealPrice').textContent = 'Your meal total is ' + (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value)) + ' NZD.';

    // conditional for hostel requirements
    if (((parseInt(getNights.innerHTML) >= accomodationData.hostel.minRequirement) && (parseInt(getNights.innerHTML) <= accomodationData.hostel.maxRequirement)) && (getGuests.value == accomodationData.hostel.maxCapacity)) {

      fullpage_api.moveSectionDown();

      // conditional for hotel & hostel
      if (((parseInt(getNights.innerHTML) <= accomodationData.hotel.maxRequirement)) && (getGuests.value < accomodationData.hotel.maxCapacity)) {

        // change card porperties based on selection
        getPropertyFourImg.src = accomodationData.hotel.images[0];
        getPropertyFourName.textContent = accomodationData.hotel.name[0];
        getPropertyFiveImg.src = accomodationData.hotel.images[1];
        getPropertyFiveName.textContent = accomodationData.hotel.name[1];
        getPropertySixImg.src = accomodationData.hotel.images[2];
        getPropertySixName.textContent = accomodationData.hotel.name[2];
        document.querySelector('.bottom').style.display = "block";

        // click function for property four
        getPropertyFour.onclick = function() {
          fullpage_api.moveSectionDown();
          hotelOne();

          bookAccomodation.onclick = function() {
            fullpage_api.moveSectionDown();
            hotelOne();
          };
        };
        // click ENDS

        // click function for property five
        getPropertyFive.onclick = function() {
          fullpage_api.moveSectionDown();
          hotelTwo();

          bookAccomodation.onclick = function() {
            fullpage_api.moveSectionDown();
            hotelTwo();
          };
        };
        // click ENDS

        // click function for property six
        getPropertySix.onclick = function() {
          fullpage_api.moveSectionDown();
          hotelThree();

          bookAccomodation.onclick = function() {
            fullpage_api.moveSectionDown();
            hotelThree();
          };
        };
        // click ENDS
      } else {
        document.querySelector('.bottom').style.display = "none";
      }

      // change card porperties based on selection
      getPropertyOneImg.src = accomodationData.hostel.images[0];
      getPropertyOneName.textContent = accomodationData.hostel.name[0];
      getPropertyTwoImg.src = accomodationData.hostel.images[1];
      getPropertyTwoName.textContent = accomodationData.hostel.name[1];
      getPropertyThreeImg.src = accomodationData.hostel.images[2];
      getPropertyThreeName.textContent = accomodationData.hostel.name[2];

      // click function for property one
      getPropertyOne.onclick = function() {
        fullpage_api.moveSectionDown();
        hostelOne();

        bookAccomodation.onclick = function() {
          fullpage_api.moveSectionDown();
          hostelOne();
        };
      };
      // click ENDS

      // click function for property two
      getPropertyTwo.onclick = function() {
        fullpage_api.moveSectionDown();
        hostelTwo();

        bookAccomodation.onclick = function() {
          fullpage_api.moveSectionDown();
          hostelTwo();
        };
      };
      // click ENDS

      // click function for property three
      getPropertyThree.onclick = function() {
        fullpage_api.moveSectionDown();
        hostelThree();

        bookAccomodation.onclick = function() {
          fullpage_api.moveSectionDown();
          hostelThree();
        };
      };
      // click ENDS
    }

    // conditional for hotel requirements
    else if (((parseInt(getNights.innerHTML) >= accomodationData.hotel.minRequirement) && (parseInt(getNights.innerHTML) <= accomodationData.hotel.maxRequirement)) && (getGuests.value == accomodationData.hotel.maxCapacity)) {

      fullpage_api.moveSectionDown();

      // change card properties based on selection
      getPropertyOneImg.src = accomodationData.hotel.images[0];
      getPropertyOneName.textContent = accomodationData.hotel.name[0];
      getPropertyTwoImg.src = accomodationData.hotel.images[1];
      getPropertyTwoName.textContent = accomodationData.hotel.name[1];
      getPropertyThreeImg.src = accomodationData.hotel.images[2];
      getPropertyThreeName.textContent = accomodationData.hotel.name[2];

      // click function for property one
      getPropertyOne.onclick = function() {
        fullpage_api.moveSectionDown();
        hotelOne();

        bookAccomodation.onclick = function() {
          fullpage_api.moveSectionDown();
          hotelOne();
        };
      };
      // click ENDS

      // click function for property two
      getPropertyTwo.onclick = function() {
        fullpage_api.moveSectionDown();
        hotelTwo();

        bookAccomodation.onclick = function() {
          fullpage_api.moveSectionDown();
          hotelTwo();
        };
      };
      // click ENDS

      // click function for property three
      getPropertyThree.onclick = function() {
        fullpage_api.moveSectionDown();
        hotelThree();

        bookAccomodation.onclick = function() {
          fullpage_api.moveSectionDown();
          hotelThree();
        };
      };
      // click ENDS

      // conditional for hotel & motel
      if (((parseInt(getNights.innerHTML) >= accomodationData.motel.minRequirement) && (parseInt(getNights.innerHTML) <= accomodationData.hotel.maxRequirement)) && (getGuests.value == accomodationData.hotel.maxCapacity)) {

        // change card porperties based on selection
        getPropertyFourImg.src = accomodationData.motel.images[0];
        getPropertyFourName.textContent = accomodationData.motel.name[0];
        getPropertyFiveImg.src = accomodationData.motel.images[1];
        getPropertyFiveName.textContent = accomodationData.motel.name[1];
        getPropertySixImg.src = accomodationData.motel.images[2];
        getPropertySixName.textContent = accomodationData.motel.name[2];
        document.querySelector('.bottom').style.display = "block";

        // click function for property four
        getPropertyFour.onclick = function() {
          fullpage_api.moveSectionDown();
          motelOne();

          bookAccomodation.onclick = function() {
            fullpage_api.moveSectionDown();
            motelOne();
          };
        };
        // click ENDS

        // click function for property five
        getPropertyFive.onclick = function() {
          fullpage_api.moveSectionDown();
          motelTwo();

          bookAccomodation.onclick = function() {
            fullpage_api.moveSectionDown();
            motelTwo();
          };
        };
        // click ENDS

        // click function for property six
        getPropertySix.onclick = function() {
          fullpage_api.moveSectionDown();
          motelThree();

          bookAccomodation.onclick = function() {
            fullpage_api.moveSectionDown();
            motelThree();
          };
        };
        // click ENDS
      } else {
        document.querySelector('#availableAccomodations .bottom').style.display = "none";
      }
    }

    // conditional for motel requirements
    else if (((parseInt(getNights.innerHTML) >= accomodationData.motel.minRequirement) && (parseInt(getNights.innerHTML) <= accomodationData.motel.maxRequirement)) && (getGuests.value <= accomodationData.motel.maxCapacity)) {

      fullpage_api.moveSectionDown();

      // conditional for motel + house
      if (getGuests.value <= accomodationData.house.maxCapacity) {

        // change card porperties based on selection
        getPropertyFourImg.src = accomodationData.house.images[0];
        getPropertyFourName.textContent = accomodationData.house.name[0];
        getPropertyFiveImg.src = accomodationData.house.images[1];
        getPropertyFiveName.textContent = accomodationData.house.name[1];
        getPropertySixImg.src = accomodationData.house.images[2];
        getPropertySixName.textContent = accomodationData.house.name[2];
        document.querySelector('.bottom').style.display = "block";

        // click function for property four
        getPropertyFour.onclick = function() {
          fullpage_api.moveSectionDown();
          houseOne();

          bookAccomodation.onclick = function() {
            fullpage_api.moveSectionDown();
            houseOne();
          };
        };
        // click ENDS

        // click function for property five
        getPropertyFive.onclick = function() {
          fullpage_api.moveSectionDown();
          houseTwo();

          bookAccomodation.onclick = function() {
            fullpage_api.moveSectionDown();
            houseTwo();
          };
        };
        // click ENDS

        // click function for property six
        getPropertySix.onclick = function() {
          fullpage_api.moveSectionDown();
          houseThree();

          bookAccomodation.onclick = function() {
            fullpage_api.moveSectionDown();
            houseThree();
          };
        };
        // click ENDS
      } else {
        document.querySelector('#availableAccomodations .bottom').style.display = "none";
      }

      // change card properties based on selection
      getPropertyOneImg.src = accomodationData.motel.images[0];
      getPropertyOneName.textContent = accomodationData.motel.name[0];
      getPropertyTwoImg.src = accomodationData.motel.images[1];
      getPropertyTwoName.textContent = accomodationData.motel.name[1];
      getPropertyThreeImg.src = accomodationData.motel.images[2];
      getPropertyThreeName.textContent = accomodationData.motel.name[2];

      // click function for property one
      getPropertyOne.onclick = function() {
        fullpage_api.moveSectionDown();
        motelOne();

        bookAccomodation.onclick = function() {
          fullpage_api.moveSectionDown();
          motelOne();
        };
      };
      // click ENDS

      // click function for property two
      getPropertyTwo.onclick = function() {
        fullpage_api.moveSectionDown();
        motelTwo();

        bookAccomodation.onclick = function() {
          fullpage_api.moveSectionDown();
          motelTwo();
        };
      };
      // click ENDS

      // click function for property three
      getPropertyThree.onclick = function() {
        fullpage_api.moveSectionDown();
        motelThree();

        bookAccomodation.onclick = function() {
          fullpage_api.moveSectionDown();
          motelThree();
        };
      };
      // click ENDS
    }

    // conditional for house requirements
    else if (((parseInt(getNights.innerHTML) >= accomodationData.house.minRequirement) && (parseInt(getNights.innerHTML) <= accomodationData.house.maxRequirement)) && (getGuests.value <= accomodationData.house.maxCapacity)) {

      fullpage_api.moveSectionDown();

      // conditional for house + hotel
      if (parseInt(getNights.innerHTML) <= accomodationData.hotel.maxRequirement && getGuests.value <= accomodationData.hotel.maxCapacity) {

        // change card porperties based on selection
        getPropertyFourImg.src = accomodationData.hotel.images[0];
        getPropertyFourName.textContent = accomodationData.hotel.name[0];
        getPropertyFiveImg.src = accomodationData.hotel.images[1];
        getPropertyFiveName.textContent = accomodationData.hotel.name[1];
        getPropertySixImg.src = accomodationData.hotel.images[2];
        getPropertySixName.textContent = accomodationData.hotel.name[2];
        document.querySelector('.bottom').style.display = "block";

        // click function for property four
        getPropertyFour.onclick = function() {
          fullpage_api.moveSectionDown();
          hotelOne();

          bookAccomodation.onclick = function() {
            fullpage_api.moveSectionDown();
            hotelOne();
          };
        };
        // click ENDS

        // click function for property five
        getPropertyFive.onclick = function() {
          fullpage_api.moveSectionDown();
          hotelTwo();

          bookAccomodation.onclick = function() {
            fullpage_api.moveSectionDown();
            hotelTwo();
          };
        };
        // click ENDS

        // click function for property six
        getPropertySix.onclick = function() {
          fullpage_api.moveSectionDown();
          hotelThree();

          bookAccomodation.onclick = function() {
            fullpage_api.moveSectionDown();
            hotelThree();
          };
        };
        // click ENDS
      } else {
        document.querySelector('#availableAccomodations .bottom').style.display = "none";
      }

      // change card properties based on selection
      getPropertyOneImg.src = accomodationData.house.images[0];
      getPropertyOneName.textContent = accomodationData.house.name[0];
      getPropertyTwoImg.src = accomodationData.house.images[1];
      getPropertyTwoName.textContent = accomodationData.house.name[1];
      getPropertyThreeImg.src = accomodationData.house.images[2];
      getPropertyThreeName.textContent = accomodationData.house.name[2];

      // click function for property one
      getPropertyOne.onclick = function() {
        fullpage_api.moveSectionDown();
        houseOne();

        bookAccomodation.onclick = function() {
          fullpage_api.moveSectionDown();
          houseOne();
        };
      };
      // click ENDS

      // click function for property two
      getPropertyTwo.onclick = function() {
        fullpage_api.moveSectionDown();
        houseTwo();

        bookAccomodation.onclick = function() {
          fullpage_api.moveSectionDown();
          houseTwo();
        };
      };
      // click ENDS

      // click function for property three
      getPropertyThree.onclick = function() {
        fullpage_api.moveSectionDown();
        houseThree();

        bookAccomodation.onclick = function() {
          fullpage_api.moveSectionDown();
          houseThree();
        };
      };
      // click ENDS
    }

    // conditional for requirements not met
    else {
      getErrorMessage.textContent = 'Unfortunately we do not have accomodations available for your selected inputs. Please try again with new inputs.';
    }

    // parsley vaidation for contact form
    var contactForm = $('#contactForm').parsley();

    // find #getStayData in #parent and set up a click function on it
    $('#contactForm').find('#bookingDone').click(function() {
      // Validate the form on click
      contactForm.validate();
    });

    // only runs when form is successfully validated
    contactForm.subscribe('parsley:form:success', function(e) {
      fullpage_api.moveSectionDown();
      fullname.textContent = custFName.value + ' ' + custLName.value;
    });
    // parsley vaidation for contact form ENDS

    // function for changing data for hotel one
    function hotelOne() {
      getPropertyName.textContent = accomodationData.hotel.name[0];
      getPropertyAddress.textContent = accomodationData.hotel.address[0];
      getPropertyContact.textContent = accomodationData.hotel.contact[0];
      getPropertyEmail.textContent = accomodationData.hotel.email[0];
      getPropertyImage.src = accomodationData.hotel.images[0];
      getPropertyDescription.textContent = accomodationData.hotel.description[0];
      getPropertyPrices.textContent = accomodationData.hotel.pricePerNight;

      // fly to property location to give nice animation effect
      map.flyTo({
        center: [168.69992817080276, -45.022465260464],
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
      });

      // custom marker for the location
      var marker1 = new mapboxgl.Marker()
        .setLngLat([168.69992817080276, -45.022465260464])
        .addTo(map);

      // displays stay total
      document.querySelectorAll('.stayPrice').textContent = 'Your stay total is ' + (parseInt(getNights.innerHTML) * accomodationData.hotel.pricePerNight) + ' NZD.';

      // displays booking total with stay & meals
      document.querySelectorAll('.totalAmount').textContent = 'Your booking total is ' + (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.hotel.pricePerNight)) + ' NZD.';

      bookedPName.textContent = accomodationData.hotel.name[0];
      bookedPPrice.textContent = (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.hotel.pricePerNight));

      bookedNights.textContent = parseInt(getNights.innerHTML);
    }

    // function for changing data for hotel two
    function hotelTwo() {
      getPropertyName.textContent = accomodationData.hotel.name[1];
      getPropertyAddress.textContent = accomodationData.hotel.address[1];
      getPropertyContact.textContent = accomodationData.hotel.contact[1];
      getPropertyEmail.textContent = accomodationData.hotel.email[1];
      getPropertyImage.src = accomodationData.hotel.images[1];
      getPropertyDescription.textContent = accomodationData.hotel.description[1];
      getPropertyPrices.textContent = accomodationData.hotel.pricePerNight;

      map.flyTo({
        center: [168.63991532476695, -45.038576390231356],
        essential: true
      });

      var marker2 = new mapboxgl.Marker()
        .setLngLat([168.63991532476695, -45.038576390231356])
        .addTo(map);

      // displays stay total
      document.querySelectorAll('.stayPrice').textContent = 'Your stay total is ' + (parseInt(getNights.innerHTML) * accomodationData.hotel.pricePerNight) + ' NZD.';

      // displays booking total with stay & meals
      document.querySelectorAll('.totalAmount').textContent = 'Your booking total is ' + (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.hotel.pricePerNight)) + ' NZD.';

      bookedPName.textContent = accomodationData.hotel.name[1];
      bookedPPrice.textContent = (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.hotel.pricePerNight));

      bookedNights.textContent = parseInt(getNights.innerHTML);
    }

    // function for changing data for hotel three
    function hotelThree() {
      getPropertyName.textContent = accomodationData.hotel.name[2];
      getPropertyAddress.textContent = accomodationData.hotel.address[2];
      getPropertyContact.textContent = accomodationData.hotel.contact[2];
      getPropertyEmail.textContent = accomodationData.hotel.email[2];
      getPropertyImage.src = accomodationData.hotel.images[2];
      getPropertyDescription.textContent = accomodationData.hotel.description[2];
      getPropertyPrices.textContent = accomodationData.hotel.pricePerNight;

      map.flyTo({
        center: [168.67189454753048, -45.03405325037332],
        essential: true
      });

      var marker3 = new mapboxgl.Marker()
        .setLngLat([168.67189454753048, -45.03405325037332])
        .addTo(map);

      // displays stay total
      document.querySelectorAll('.stayPrice').textContent = 'Your stay total is ' + (parseInt(getNights.innerHTML) * accomodationData.hotel.pricePerNight) + ' NZD.';

      // displays booking total with stay & meals
      document.querySelectorAll('.totalAmount').textContent = 'Your booking total is ' + (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.hotel.pricePerNight)) + ' NZD.';

      bookedPName.textContent = accomodationData.hotel.name[2];
      bookedPPrice.textContent = (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.hotel.pricePerNight));

      bookedNights.textContent = parseInt(getNights.innerHTML);
    }

    // function for changing data for hostel one
    function hostelOne() {
      // getting specific data from data.js file and putting into specific place for specific property
      getPropertyName.textContent = accomodationData.hostel.name[0];
      getPropertyAddress.textContent = accomodationData.hostel.address[0];
      getPropertyContact.textContent = accomodationData.hostel.contact[0];
      getPropertyEmail.textContent = accomodationData.hostel.email[0];
      getPropertyImage.src = accomodationData.hostel.images[0];
      getPropertyDescription.textContent = accomodationData.hostel.description[0];
      getPropertyPrices.textContent = accomodationData.hostel.pricePerNight;

      // fly to property location to give nice animation effect
      map.flyTo({
        center: [168.65748921670738, -45.02506312406111],
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
      });

      // custom marker for the location
      var marker1 = new mapboxgl.Marker()
        .setLngLat([168.65748921670738, -45.02506312406111])
        .addTo(map);

      // displays stay total
      document.querySelectorAll('.stayPrice').textContent = 'Your stay total is ' + (parseInt(getNights.innerHTML) * accomodationData.hostel.pricePerNight) + ' NZD.';

      // displays booking total with stay & meals
      document.querySelectorAll('.totalAmount').textContent = 'Your booking total is ' + (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.hostel.pricePerNight)) + ' NZD.';

      bookedPName.textContent = accomodationData.hostel.name[0];
      bookedPPrice.textContent = (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.hostel.pricePerNight));

      bookedNights.textContent = parseInt(getNights.innerHTML);
    }

    // function for changing data for hostel two
    function hostelTwo() {
      getPropertyName.textContent = accomodationData.hostel.name[1];
      getPropertyAddress.textContent = accomodationData.hostel.address[1];
      getPropertyContact.textContent = accomodationData.hostel.contact[1];
      getPropertyEmail.textContent = accomodationData.hostel.email[1];
      getPropertyImage.src = accomodationData.hostel.images[1];
      getPropertyDescription.textContent = accomodationData.hostel.description[1];
      getPropertyPrices.textContent = accomodationData.hostel.pricePerNight;

      map.flyTo({
        center: [168.66566872648957, -45.03413562187639],
        essential: true
      });

      var marker2 = new mapboxgl.Marker()
        .setLngLat([168.66566872648957, -45.03413562187639])
        .addTo(map);

      // displays stay total
      document.querySelectorAll('.stayPrice').textContent = 'Your stay total is ' + (parseInt(getNights.innerHTML) * accomodationData.hostel.pricePerNight) + ' NZD.';

      // displays booking total with stay & meals
      document.querySelectorAll('.totalAmount').textContent = 'Your booking total is ' + (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.hostel.pricePerNight)) + ' NZD.';

      bookedPName.textContent = accomodationData.hostel.name[1];
      bookedPPrice.textContent = (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.hostel.pricePerNight));

      bookedNights.textContent = parseInt(getNights.innerHTML);
    }

    // function for changing data for hostel three
    function hostelThree() {
      getPropertyName.textContent = accomodationData.hostel.name[2];
      getPropertyAddress.textContent = accomodationData.hostel.address[2];
      getPropertyContact.textContent = accomodationData.hostel.contact[2];
      getPropertyEmail.textContent = accomodationData.hostel.email[2];
      getPropertyImage.src = accomodationData.hostel.images[2];
      getPropertyDescription.textContent = accomodationData.hostel.description[2];
      getPropertyPrices.textContent = accomodationData.hostel.pricePerNight;

      map.flyTo({
        center: [168.66318625916668, -45.02942314117222],
        essential: true
      });

      var marker3 = new mapboxgl.Marker()
        .setLngLat([168.66318625916668, -45.02942314117222])
        .addTo(map);

      // displays stay total
      document.querySelectorAll('.stayPrice').textContent = 'Your stay total is ' + (parseInt(getNights.innerHTML) * accomodationData.hostel.pricePerNight) + ' NZD.';

      // displays booking total with stay & meals
      document.querySelectorAll('.totalAmount').textContent = 'Your booking total is ' + (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.hostel.pricePerNight)) + ' NZD.';

      bookedPName.textContent = accomodationData.hostel.name[2];
      bookedPPrice.textContent = (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.hostel.pricePerNight));

      bookedNights.textContent = parseInt(getNights.innerHTML);
    }

    // function for chaging data for motel one
    function motelOne() {
      getPropertyName.textContent = accomodationData.motel.name[0];
      getPropertyAddress.textContent = accomodationData.motel.address[0];
      getPropertyContact.textContent = accomodationData.motel.contact[0];
      getPropertyEmail.textContent = accomodationData.motel.email[0];
      getPropertyImage.src = accomodationData.motel.images[0];
      getPropertyDescription.textContent = accomodationData.motel.description[0];
      getPropertyPrices.textContent = accomodationData.motel.pricePerNight;

      // fly to property location to give nice animation effect
      map.flyTo({
        center: [168.69992817080276, -45.022465260464],
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
      });

      // custom marker for the location
      var marker1 = new mapboxgl.Marker()
        .setLngLat([168.69992817080276, -45.022465260464])
        .addTo(map);

      // displays stay total
      document.querySelector('.stayPrice').textContent = 'Your stay total is ' + (parseInt(getNights.innerHTML) * accomodationData.motel.pricePerNight) + ' NZD.';

      // displays booking total with stay & meals
      document.querySelector('.totalAmount').textContent = 'Your booking total is ' + (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.motel.pricePerNight)) + ' NZD.';

      bookedPName.textContent = accomodationData.motel.name[0];
      bookedPPrice.textContent = (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.motel.pricePerNight));

      bookedNights.textContent = parseInt(getNights.innerHTML);
    }

    // function for changing data for motel two
    function motelTwo() {
      getPropertyName.textContent = accomodationData.motel.name[1];
      getPropertyAddress.textContent = accomodationData.motel.address[1];
      getPropertyContact.textContent = accomodationData.motel.contact[1];
      getPropertyEmail.textContent = accomodationData.motel.email[1];
      getPropertyImage.src = accomodationData.motel.images[1];
      getPropertyDescription.textContent = accomodationData.motel.description[1];
      getPropertyPrices.textContent = accomodationData.motel.pricePerNight;

      map.flyTo({
        center: [168.63991532476695, -45.038576390231356],
        essential: true
      });

      var marker2 = new mapboxgl.Marker()
        .setLngLat([168.63991532476695, -45.038576390231356])
        .addTo(map);

      // displays stay total
      document.querySelector('.stayPrice').textContent = 'Your stay total is ' + (parseInt(getNights.innerHTML) * accomodationData.motel.pricePerNight) + ' NZD.';

      // displays booking total with stay & meals
      document.querySelector('.totalAmount').textContent = 'Your booking total is ' + (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.motel.pricePerNight)) + ' NZD.';

      bookedPName.textContent = accomodationData.motel.name[1];
      bookedPPrice.textContent = (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.motel.pricePerNight));

      bookedNights.textContent = parseInt(getNights.innerHTML);
    }

    // function for changing data for motel three
    function motelThree() {
      getPropertyName.textContent = accomodationData.motel.name[2];
      getPropertyAddress.textContent = accomodationData.motel.address[2];
      getPropertyContact.textContent = accomodationData.motel.contact[2];
      getPropertyEmail.textContent = accomodationData.motel.email[2];
      getPropertyImage.src = accomodationData.motel.images[2];
      getPropertyDescription.textContent = accomodationData.motel.description[2];
      getPropertyPrices.textContent = accomodationData.motel.pricePerNight;

      map.flyTo({
        center: [168.67189454753048, -45.03405325037332],
        essential: true
      });

      var marker3 = new mapboxgl.Marker()
        .setLngLat([168.67189454753048, -45.03405325037332])
        .addTo(map);

      // displays stay total
      document.querySelector('.stayPrice').textContent = 'Your stay total is ' + (parseInt(getNights.innerHTML) * accomodationData.motel.pricePerNight) + ' NZD.';

      // displays booking total with stay & meals
      document.querySelector('.totalAmount').textContent = 'Your booking total is ' + (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.motel.pricePerNight)) + ' NZD.';

      bookedPName.textContent = accomodationData.motel.name[2];
      bookedPPrice.textContent = (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.motel.pricePerNight));

      bookedNights.textContent = parseInt(getNights.innerHTML);
    }

    // function for changing data for house one
    function houseOne() {
      getPropertyName.textContent = accomodationData.house.name[0];
      getPropertyAddress.textContent = accomodationData.house.address[0];
      getPropertyContact.textContent = accomodationData.house.contact[0];
      getPropertyEmail.textContent = accomodationData.house.email[0];
      getPropertyImage.src = accomodationData.house.images[0];
      getPropertyDescription.textContent = accomodationData.house.description[0];
      getPropertyPrices.textContent = accomodationData.house.pricePerNight;

      // fly to property location to give nice animation effect
      map.flyTo({
        center: [168.69992817080276, -45.022465260464],
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
      });

      // custom marker for the location
      var marker1 = new mapboxgl.Marker()
        .setLngLat([168.69992817080276, -45.022465260464])
        .addTo(map);

      // displays stay total
      document.querySelector('.stayPrice').textContent = 'Your stay total is ' + (parseInt(getNights.innerHTML) * accomodationData.house.pricePerNight) + ' NZD.';

      // displays booking total with stay & meals
      document.querySelector('.totalAmount').textContent = 'Your booking total is ' + (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.house.pricePerNight)) + ' NZD.';

      bookedPName.textContent = accomodationData.house.name[0];
      bookedPPrice.textContent = (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.house.pricePerNight));

      bookedNights.textContent = parseInt(getNights.innerHTML);
    }

    // function for changing data for house two
    function houseTwo() {
      getPropertyName.textContent = accomodationData.house.name[1];
      getPropertyAddress.textContent = accomodationData.house.address[1];
      getPropertyContact.textContent = accomodationData.house.contact[1];
      getPropertyEmail.textContent = accomodationData.house.email[1];
      getPropertyImage.src = accomodationData.house.images[1];
      getPropertyDescription.textContent = accomodationData.house.description[1];
      getPropertyPrices.textContent = accomodationData.house.pricePerNight;

      map.flyTo({
        center: [168.63991532476695, -45.038576390231356],
        essential: true
      });

      var marker2 = new mapboxgl.Marker()
        .setLngLat([168.63991532476695, -45.038576390231356])
        .addTo(map);

      // displays stay total
      document.querySelector('.stayPrice').textContent = 'Your stay total is ' + (parseInt(getNights.innerHTML) * accomodationData.house.pricePerNight) + ' NZD.';

      // displays booking total with stay & meals
      document.querySelector('.totalAmount').textContent = 'Your booking total is ' + (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.house.pricePerNight)) + ' NZD.';

      bookedPName.textContent = accomodationData.house.name[1];
      bookedPPrice.textContent = (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.house.pricePerNight));

      bookedNights.textContent = parseInt(getNights.innerHTML);
    }

    // function for changing data for house three
    function houseThree() {
      getPropertyName.textContent = accomodationData.house.name[2];
      getPropertyAddress.textContent = accomodationData.house.address[2];
      getPropertyContact.textContent = accomodationData.house.contact[2];
      getPropertyEmail.textContent = accomodationData.house.email[2];
      getPropertyImage.src = accomodationData.house.images[2];
      getPropertyDescription.textContent = accomodationData.house.description[2];
      getPropertyPrices.textContent = accomodationData.house.pricePerNight;

      map.flyTo({
        center: [168.67189454753048, -45.03405325037332],
        essential: true
      });

      var marker3 = new mapboxgl.Marker()
        .setLngLat([168.67189454753048, -45.03405325037332])
        .addTo(map);

      // displays stay total
      document.querySelector('.stayPrice').textContent = 'Your stay total is ' + (parseInt(getNights.innerHTML) * accomodationData.house.pricePerNight) + ' NZD.';

      // displays booking total with stay & meals
      document.querySelector('.totalAmount').textContent = 'Your booking total is ' + (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.house.pricePerNight)) + ' NZD.';

      bookedPName.textContent = accomodationData.house.name[2];
      bookedPPrice.textContent = (getGuests.value * (parseInt(getNights.innerHTML) * getMeals.value) + (parseInt(getNights.innerHTML) * accomodationData.house.pricePerNight));

      bookedNights.textContent = parseInt(getNights.innerHTML);
    }
  });
  // parsley custom js ENDS

  // hotel date picker starts
  var datepicker = new HotelDatepicker(document.getElementById('stayDates'), {
    minNights: 1, // sets minimum nights
    maxNights: 15, // sets maximum nights
    format: 'MMMM D, YYYY' // sets date format
  });
  // hotel date picker ENDS

  // mapbox custom js starts
  mapboxgl.accessToken = 'pk.eyJ1IjoibW9obmlzaC1sZXV2YSIsImEiOiJja3A0b2R4em4wMzRxMm9tbjhocjA0cjllIn0.K-DrpDcmWPmZCyPeWWB0TQ';

  var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v10', // style URL
    center: [168.6355712298078, -45.010287551196896], // starting position [lng, lat]
    zoom: 16 // starting zoom
  });
  // mapbox ENDS

  // banner function
  function banner() {
    document.querySelector(".banner-close").addEventListener("click", function() {
      this.closest(".banner").style.display = "none";
    });
  }
  // banner function ENDS

  // banner function called
  banner();

}());
