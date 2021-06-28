var transportData = {
  motorbike: {
    name: 'Motorbike',
    maxCapacity: 1,
    pricePerDay: 109,
    minRequirement: 1,
    maxRequirement: 5,
    averagePerHundredKM: 3.7
  },
  carSmall: {
    name: 'Hachback',
    maxCapacity: 2,
    pricePerDay: 129,
    minRequirement: 1,
    maxRequirement: 10,
    averagePerHundredKM: 8.5
  },
  carLarge: {
    name: 'SUV',
    maxCapacity: 5,
    pricePerDay: 144,
    minRequirement: 3,
    maxRequirement: 10,
    averagePerHundredKM: 9.7
  },
  motorHome: {
    name: 'Caravan',
    maxCapacity: 6,
    pricePerDay: 200,
    minRequirement: 2,
    maxRequirement: 15,
    averagePerHundredKM: 17
  }
};

var accomodationData = {
  hotel: {
    name: ['Holiday Inn', 'Mercure Resort', 'Copthorne Resort'],
    maxCapacity: 2,
    pricePerNight: 157,
    minRequirement: 1,
    maxRequirement: 5,
    images: ['./img/property/hotels/holiday-inn.jpeg', './img/property/hotels/mercure-queenstown.jpeg', './img/property/hotels/copthorne-lakefront.jpeg'],
    contact: ['+64 3 442 6500', '+64 3 442 6600', '+64 3 450 0260'],
    email: ['info@holidayinnqueenstown.co.nz', 'h1994-gm@accor.com', 'copthorne.lakefront@millenniumhotels.com'],
    address: ['594 Frankton Road Queenstown 9348', '21 Sainsbury Road Queenstown 9348', 'Cnr Frankton Rd & Adelaide St, Private Bag Queenstown 9300'],
    description: ['Holiday Inn Queenstown Frankton Road, your home away from home, a modern contemporary hotel offering value and a wide range of facilities to provide a distinct experience built to make your travels better. It overlooks the Frankton Arm inlet of Lake Wakatipu, with easy access to The Remarkables.', 'Located on a unique vantage point overlooking Lake Wakatipu and the Remarkables Mountains with majestic, spectacular views. Featuring excellent leisure and recreational facilities, this 148-room hotel offers either lake or garden views from every room. Perfect for singles, couples or families, accommodation rooms are spacious and feature a mini-bar, Sky LCD TV, WIFI, coffee/tea-making facilities, iron and ironing board and in room safe.', 'Exploring panoramic views of the lake and nearby mountains, the Copthorne is the perfect venue for business, conference or leisure! The Copthorne Lakefront blends superior facilities and comfort with friendly service. The hotel has 240 rooms including 6 lakeview suites. Balconies and garden views are also a feature of many rooms. Enjoy a conference or meeting in our handy facilities or relax in Impressions Restaurant. The Copthorne Lakefront Hotel and Resort is a great place to stay all year round.']
  },
  hostel: {
    name: ['Reavers Lodge', 'Black Sheep Backpackers', 'Tahuna Pod Hostel'],
    maxCapacity: 1,
    pricePerNight: 30,
    minRequirement: 1,
    maxRequirement: 10,
    images: ['./img/property/hostels/reavers-lodge.jpeg', './img/property/hostels/black-sheep.jpeg', './img/property/hostels/tahuna-pod.jpeg'],
    contact: ['+64 3 441 1059', '+64 3 442 7289', '+64 3 442 7052'],
    email: ['reservations@reavers.co.nz', 'reservations@blacksheepbackpackers.co.nz', 'tahuna@sircedrics.co.nz'],
    address: ['56 Hamilton Road Queenstown 9300', '13 Frankton Road Queenstown 9300', '11 Henry Street Queenstown 9300'],
    description: ['Reavers Lodge offers modern accommodation within close proximity to town. We have a variety of room types, all of which are ensuited. Our self contained rooms offer twin/double bedding in the loft with a separate living area down stairs. Facilities at Reavers include spa pool, communal kitchen and common area, guest laundry and onsite parking. With a year round activities and entertainment schedule, staying at Reavers means you have onsite support for your ski or summer package.', 'We are just a two minute walk to the downtown area yet we are in one of the quietest, sunniest spots in town. We have 360 mountain views. Relax in one of our three garden/deck areas or in our spa pool. Head to the lake, just a few minutes away or the Queenstown gardens a minute away for a round of frisbee golf. Relax and enjoy your own private space in our dorms. All beds have curtains, their own light, usb port and power plugs. Fresh linens and modern decor in all our private rooms. Make your Queenstown experience memorable. Stay with The Black Sheep.', 'Sir Cedrics Tahuna Pod Hostel is located in the heart of Queenstown, New Zealand and offers premium high-end accommodation in a relaxed atmosphere. Our facilities are modern, clean and spacious. We have onsite parking and offer a variety of single, double and superior pods as well as private rooms. The backpacker accommodation also features a large balcony/BBQ area with stunning views overlooking Queenstown. Guests have access to shared bathroom facilities, located on every floor. The high-end New Zealand owned backpacker hostel merges Maori heritage and traditional values in its design and shares the culture with guests through art, music, movies, food and entertainment.']
  },
  motel: {
    name: ['Shades of Arrowtown', 'The Lofts', 'Arrowtown Motel'],
    maxCapacity: 4,
    pricePerNight: 90,
    minRequirement: 3,
    maxRequirement: 10,
    images: ['./img/property/motel/shades-of-arrowtown.jpeg', './img/property/motel/the-lofts.jpeg', './img/property/motel/arrowtown-motel.jpeg'],
    contact: ['+64 3 442 1613', '+64 3 409 2600', '+64 3 442 1833'],
    email: ['shadesofarrowtown@xtra.co.nz', 'thelofts.reservations@vrhotels.co.nz', 'info@arrowtownmotel.co.nz'],
    address: ['9 Merioneth Street Arrowtown 9302', '61 Shotover Street Queenstown 9300', '48 Adamson Drive Arrowtown 9302'],
    description: ['Shades of Arrowtown offers you a relaxing stay at a convenient central location only a minutes stroll from the boutique shopping area and famous historic sites, such as the Chinese miners cottages. Only 20 minutes drive from Queenstown, were conveniently located for skiing holidays and are close to an international-standard golf course, 4WD areas, mountain biking courses, world-renown fishing sites, and award-winning wineries.', 'If youre seeking a central location in Queenstown, look no further than The Lofts. Located in the heart of the township directly opposite the Queenstown Bay Centre and just metres from popular Steamer Wharf. After a day of activity, enjoy a relaxing sauna or soothing spa followed by a self catered meal in the privacy of your apartment. Or if youre still on a high from that pure mountain air, venture out to explore the towns wide choice of critically acclaimed restaurants, cafes and bars.', 'Only 20 minutes drive from bustling Queenstown and 15 minutes from the Queenstown International Airport, Arrowtown Motel Apartments is the perfect place to base yourself for visiting the stunning Otago district. The motel is situated in the sunny area of Arrowtown, about 1km from the village main street (walking distance - about 15 mins) and a block away from a local mini-supermarket.']
  },
  house: {
    name: ['Lago Infinito', 'Lakeview', 'The Residence'],
    maxCapacity: 4,
    pricePerNight: 240,
    minRequirement: 2,
    maxRequirement: 15,
    images: ['./img/property/house/lago-infinito.jpeg', './img/property/house/lakeview.jpeg', './img/property/house/the-residence.jpeg'],
    contact: ['+64 3 450 0489', '+64 3 450 0489', '+64 3 441 0450'],
    email: ['luxuryrentals@nzsir.com', 'luxuryrentals@nzsir.com', 'stay@eichardts.com'],
    address: ['3 Leeds Lane Queenstown 9348', '42B Man Street Queenstown 9300', 'Marine Parade Queenstown 9300'],
    description: ['Generous living spaces all benefit from superb views. Five double bedrooms ensure ample room for family and friends to stay and enjoy the quality of this magnificent home. The three master bedrooms have stunning lake views and have been superbly fitted out with luxury in mind and offer ensuite bathrooms. With a well-equipped kitchen, two separate living areas, it offers many spaces for a large group to relax and unwind while on holiday. The home offers a high quality entertainment and media set up with state-of-the-art AV equipment and high speed Wi-Fi.', 'This spacious home enjoys stunning lake and mountain views and will provide you with a truly luxurious stay. The open plan living and dining areas take in the views complimented with an impressive kitchen ideal for entertaining. This leads to the generous outdoor area set in a private courtyard which includes a luxurious spa pool, BBQ and outdoor dining facilities.Large bedrooms each with ensuites are beautifully furnished with the master bedroom sitting on the top level. This large room features a walk-in wardrobe, gas fire, a black marble ensuite bathroom and some of the best views Queenstown has to offer.', 'The Residence is located just a short walk from the hotel and is set over three levels with glorious views over Queenstown Bay over to Queenstown Gardens and the Remarkables. Three large bedrooms each with split king beds, The Residence is designed with space and luxurious comfort in mind and is ideal for small groups, colleagues, and families with configurations tailored to meet your needs. Decorated in the style of Eichardts, the property boasts a gorgeous European kitchen with Nespresso machine and everything you can imagine to create culinary delights, or if you wish to relax we can organise a chef to cook you a private dinner or function. The master bedroom on the top floor is complemented by a gas fire and floor to ceiling windows which open out onto a private balcony with superb views. Large balconies also extend from the lower floor. Entertainment in The Residence is state-of-the-art with two 3D LCD televisions and an LCD television in each bedroom.']
  }
};

var mealData = {
  noMeals: 0,
  breakfastOnly: 29,
  lunchOnly: 39,
  dinnerOnly: 39,
  allMeals: 99
};
