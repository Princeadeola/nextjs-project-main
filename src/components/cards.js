import React from 'react';

import CardItem from './carditem';
import beet from "../asset/beet.png"
import cocoa from "../asset/cocoa.png"
import coffee from "../asset/coffee.png"
import maca from "../asset/maca.png"
import vanilla from "../asset/vanilla.png" 
import salt from "../asset/salt.png"

function Cards() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-1">
      <CardItem
        color="bg-[rgb(203,120,68)]"
        src={beet}
        title="Stamina"
        text='in a beet'
      />
      <CardItem
      color="bg-[rgb(255,225,189)]"
        src={coffee}
        title="Manage weight"
        text='with almond milk'
      />
      <CardItem
      color="bg-[rgb(248,171,179)]"
        src={cocoa}
        title="Antioxident"
        text='in a cocoa'
      />
      <CardItem
      color="bg-[rgb(164,121,105)]"
        src={vanilla}
        title="Metabolise"
        text='in vanilla podds'
      />
      <CardItem
      color="bg-[rgb(219,126,95)]"
        src={maca}
        title="Boost energy"
        text='with maca'
      />
      <CardItem
      color="bg-[rgb(241,213,202)]"
        src={salt}
        title="Alkalise"
        text='with sea salt'
      />
    </div>
  );
}

export default Cards;
