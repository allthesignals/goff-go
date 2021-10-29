import { dasherize } from '@ember/string';

function randomNumber(max) {
  return Math.floor(Math.random() * max)
}

const SPONSORS = [
  {
    "tier": "diamond",
    "name": "Inasmuch Foundation",
    "logo": "/images/logos/Inasmuch.png",
    "activity": {
      "description": "2020's Viva Las Sisu Treasure Hunt is proudly presented by the <a target='_blank' href='https://inasmuchfoundation.org/'>Inasmuch Foundation.</a><br><br>Take a silly selfie and upload it to get the hang of things."
    }
  },
  {
    "tier": "gold",
    "name": "Haskell",
    "logo": "/images/logos/haskell.png",
    "activity": {
      "description": "Stop into <a target='_blank' href='https://elementalcoffee.com/'>Elemental Coffee</a> and show your Treasure Map to get a free mini cookie.<br><br>Upload a selfie enjoying your cookie!"
    }
  },
  {
    "tier": "gold",
    "name": "Spaces Realty",
    "logo": "/images/logos/spaces realty.png",
    "activity": {
      "description": "Explore <a target='_blank' href='https://oklahomacontemporary.org/exhibitions/current/jen-lewin-aqueous'>Aqueous</a> at Campbell Art Park.<br><br>Upload a selfie from there. Post the selfie to your story with the hashtag #SisuTreasureHunt!"
    }
  },
  {
    "tier": "gold",
    "name": "The Atkinson Team",
    "logo": "/images/logos/atkinson group.png",
    "activity": {
      "description": "Perform a Random Act of Kindness.<br><br>Write a quick note about what you did, take a screenshot, and upload.<br><br><a target='_blank' href='https://support.apple.com/en-us/HT200289#:~:text=Press%20the%20Side%20Button%20and,swipe%20left%20to%20dismiss%20it.'>iPhone screenshot instructions</a><br><a target='_blank' href='https://support.google.com/android/answer/9075928?hl=en'>Android screenshot instructions</a>"
    }
  },
  {
    "tier": "gold",
    "name": "Oklahoma Fidelity",
    "logo": "/images/logos/Oklahoma Fidelity Bank.png",
    "activity": {
      "description": "Take a selfie outside of local favorite, <a target='_blank' href='https://www.tripadvisor.com/Restaurant_Review-g51560-d807210-Reviews-George_s_Happy_Hog_Bar_B_Q-Oklahoma_City_Oklahoma.html'>Georges Happy Hog Bar-B-Q</a>. If you're craving BBQ, go between 11-7pm on Friday or Saturday."
    }
  },
  {
    "tier": "silver",
    "name": "Center for Economic Development Law",
    "logo": "/images/logos/center for econ dev law.png",
    "activity": {
      "description": "Confirm that you are <a target='_blank' href='https://www.vote.org/am-i-registered-to-vote/?gclid=EAIaIQobChMI3bHQmcyW7AIVgeKzCh0zjQvJEAAYASAAEgJh8_D_BwE'>registered to Vote</a> (or help a friend!).<br><br>Upload a screenshot of the confirmation<br><br><a target='_blank' href='https://support.apple.com/en-us/HT200289#:~:text=Press%20the%20Side%20Button%20and,swipe%20left%20to%20dismiss%20it.'>iPhone screenshot instructions</a><br><a target='_blank' href='https://support.google.com/android/answer/9075928?hl=en'>Android screenshot instructions</a>"
    }
  },
  {
    "tier": "silver",
    "name": "Heartland Historical Properties",
    "logo": "/images/logos/hhp.png",
    "activity": {
      "description": "Head to the facebook page for <a target='_blank' href='https://www.facebook.com/AbbyMarshallRealtor/'>@AbbyMarshallRealtor</a> and comment on her Viva Las Sisu! post. Submit a screenshot.<br><br><a target='_blank' href='https://support.apple.com/en-us/HT200289#:~:text=Press%20the%20Side%20Button%20and,swipe%20left%20to%20dismiss%20it.'>iPhone screenshot instructions</a><br><a target='_blank' href='https://support.google.com/android/answer/9075928?hl=en'>Android screenshot instructions</a>"
    }
  },
  {
    "tier": "silver",
    "name": "Peace of Mind Pediatrics",
    "logo": "/images/logos/Peace of Mind Pedriatics.png",
    "activity": {
      "description": "<a target='_blank' href='http://peaceofmindpediatrics.com/'>Peace of Mind Pediatrics</a> encourages you to enjoy a walk around <a target='_blank' href='https://scissortailpark.org/'>Scissortail Park</a>.<br><br>Snap & upload a photo of your favorite part!"
    }
  },
  {
    "tier": "silver",
    "name": "Omega Investments",
    "logo": "/images/logos/Omega Investments.png",
    "activity": {
      "description": "<a target='_blank' href='http://www.omegabnb.com/'>Omegabnb</a> wants you to check out the murals painted for <a target='_blank' href='http://www.withloveokc.org/'>With Love</a>. <br><br>There will be DJ's and food trucks Saturday from 4-7pm.<br><br>Submit a selfie in front of your fave! Put it on your story with the hashtag #SisuTreasureHunt!"
    }
  },
  {
    "tier": "silver",
    "name": "Freedom Oklahoma",
    "logo": "/images/logos/FO+Logo+Color+Transparent.png",
    "activity": {
      "description": "<a target='_blank' href='https://www.freedomoklahoma.org'>Freedom Oklahoma</a> invites you to explore an exhibition showcasing local artists' interpretation of the theme UNIFIED at <a target='_blank' href='https://dnagalleries.com'>DNA Galleries</a> in the Plaza. Submit a photo of the piece that impacts you the most."
    }
  },
  {
    "tier": "silver",
    "name": "James Cooper",
    "logo": "/images/logos/James Cooper.png",
    "activity": {
      "description": "Write a letter or email to an elected official encouraging them to fund homeless services.<br><br>Upload a photo of your letter or screenshot of your email.<br><br><a target='_blank' href='https://support.apple.com/en-us/HT200289#:~:text=Press%20the%20Side%20Button%20and,swipe%20left%20to%20dismiss%20it.'>iPhone screenshot instructions</a><br><a target='_blank' href='https://support.google.com/android/answer/9075928?hl=en'>Android screenshot instructions</a>"
    }
  },
  {
    "tier": "silver",
    "name": "Brandon - TOR",
    "logo": "/images/logos/The Other Room.png",
    "activity": {
      "description": "Upload a selfie with the unicorn outside of <a target='_blank' href='http://www.picassosonpaseo.com/about-other-room'>The Other Room</a> in the Paseo (Appetizers are half-priced, all day, every day, and hand-tossed pizzas for only $6).<br><br>Post your selfie to your story with the hashtag #SisuTreasureHunt!<br><br>This venue is 21+."
    }
  },
  {
    "tier": "silver",
    "name": "First American Title",
    "logo": "/images/logos/First American.png",
    "activity": {
      "description": "Snap & upload a selfie from the <a target='_blank' href='https://firstam.com'>First American Title</a> at 5609 N Classen. Look for a special bonus game in the front window! "
    }
  },
  {
    "tier": "bronze",
    "name": "Sasquatch",
    "logo": "/images/logos/sasquatch.png",
    "activity": {
      "description": "Visit the <a target='_blank' href='https://www.facebook.com/sasquatchOKC/'>Sasquatch Shaved Ice</a> stand in Plaza for a free snow cone!<br><br>Upload a selfie showing what color your tongue turned!"
    }
  },
  {
    "tier": "bronze",
    "name": "Factory Obscura",
    "logo": "/images/logos/Factory Obscura.png",
    "activity": {
      "description": "Upload a selfie from outside <a target='_blank' href='https://www.factoryobscura.com/mixtape'>Factory Obscura Mix Tape</a>.<br><br>Post your selfie to your story with the hashtag #SisuTreasureHunt & take advantage of BOGO tickets with the code FOLOVESSISU"
    }
  },
  {
    "tier": "bronze",
    "name": "Curbside",
    "logo": "/images/logos/curbside.png",
    "activity": {
      "description": "Buy a <a target='_blank' href='https://www.thecurbsidechronicle.org/'>Curbside Chronicle</a> & submit a photo of your favorite article."
    }
  },
  {
    "tier": "bronze",
    "name": "Holey Rollers",
    "logo": "/images/logos/holey-rollers.png",
    "activity": {
      "description": "Stop by <a target='_blank' href='http://www.paseoplunge.com/'>Paseo Plunge</a> to write an encouraging note to a homeless youth or Sisu staff member. <br><br>Upload a photo of your letter & show your map at <a target='_blank' href='http://www.holeyrollersdonuts.com/'>Holey Rollers</a> to get a free drip coffee or $2 off any drink when you buy a donut!"
    }
  },
  {
    "tier": "bronze",
    "name": "1984 Studios",
    "logo": "/images/logos/1984+Studios+Logo+2020.png",
    "activity": {
      "description": "Upload a selfie outside of our broadcast partner, <a target='_blank' href='https://www.1984studios.com/'>1984 Studios</a>, in Historic Capitol Hill! Post it to your story with the hashtage #SisuTreasureHunt<br><br>Don't forget to tune into our Facebook Live, Sunday, Oct. 4 at 7 pm where we'll divvy up the spoils!."
    }
  },
  {
    "tier": "bronze",
    "name": "Meridian Market",
    "logo": "/images/logos/meridian market.png",
    "activity": {
      "description": "Take & upload a selfie dropping off a new or gently used coat, jacket, or winter necessity at <a target='_blank' href='https://www.meridianmarketokc.com/'>Meridian Market</a>! <br><br>Show your treasure map to recieve a FREE craft coffee or specialty mocktail lemonade."
    }
  },
  {
    "tier": "bronze",
    "name": "Core4",
    "logo": "/images/logos/Core4 Brewing Company.png",
    "activity": {
      "description": "Stop by <a target='_blank' href='https://www.facebook.com/Core4Brewing'>Core4 Brewery</a> on Film Row & upload a selfie enjoying the patio weather. Show your Treasure Map and get $2 off a beer flight."
    }
  },
  {
    "tier": "bronze",
    "name": "Ideal Homes",
    "logo": "/images/logos/ideal homes.png",
    "activity": {
      "description": "Upload a selfie from the service window at our favorite vegan supporters, <a target='_blank' href='https://www.theloadedbowlokc.com/#home-section'>The Loaded Bowl</a>. Show your Map to get a free side of Mac & Cheese with your purchase of a bowl. "
    }
  },
  {
    "tier": "bronze",
    "name": "Revolucion",
    "logo": "/images/logos/revolucion.png",
    "activity": {
      "description": "Take & upload a patio selfie at <a target='_blank' href='https://www.revolucionokc.com/'>Revolución</a> for their grand re-opening! Share your selfie on your story with the hashtag #SisuTreasureHunt and show your Treasure Map to snag a free taco!"
    }
  },
  {
    "tier": "bronze",
    "name": "Red Rooster",
    "logo": "/images/logos/red rooster.png",
    "activity": {
      "description": "Eat local! Take & upload a patio selfie from <a target='_blank' href='https://www.okcredrooster.com/'>Red Rooster</a> during brunch, happy hour, or any time in between. Get 15% off all food with the purchase of a cocktail or wine."
    }
  },
  {
    "tier": "bronze",
    "name": "Dig It",
    "logo": "/images/logos/dig it.png",
    "activity": {
      "description": "Take & upload a selfie in your favorite sunnies at <a target='_blank' href='https://digitokc.com/'>Dig It!</a> in the Plaza! Post it to your story with the hashtag #SisuTreasureHunt!"
    }
  },
  {
    "tier": "bronze",
    "name": "Castle row",
    "logo": "/images/logos/CASTLEROW_BLANK_W.png",
    "activity": {
      "description": "Take & upload a selfie from <a target='_blank' href='https://www.castlerowstudios.com/'>Castle Row Studios</a>. Go between 2-5pm on Saturday or Sunday to check out their mural of music icons."
    }
  },
].map(sponsor => ({
  ...sponsor,
  slug: dasherize(sponsor.name),
}));

let sponsors = [];

export function getSponsor(tier) {
  if (sponsors.length === 0) {
    sponsors = SPONSORS.slice(0);
  }

  const tierIndices = sponsors.map((e, i) => e.tier === tier ? i : '').filter(String);
  const randomIndex = tierIndices[randomNumber(tierIndices.length)];

  return sponsors.splice(randomIndex, 1)[0];
}

export default SPONSORS;
