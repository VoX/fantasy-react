import * as React from 'react';

import { storiesOf } from '@storybook/react';

import ContestDisplay from './contest/ContestDisplay';
import { ContestProvider } from './contest/ContestProvider';
import { DisplayContestProvider } from './contest/DisplayContestProvider';
import { IDisplayContest } from './contest/IDisplayContest';
import { SportsProvider } from './sport/SportsProvider';

const prodUrl = "https://www.draftkings.com";
const prodProvider = new ContestProvider(prodUrl);
const sportsProvider = new SportsProvider(prodUrl);
const displayProvider = new DisplayContestProvider(prodProvider, sportsProvider);

function getContest() {
  const contest:IDisplayContest = {name : "hi", sport : "MLB", attributes : [""], fee : "$15", start : new Date(), entries : 2, id : 1337, maxEntries: 5, multiEntries: 1, prizes : "$1,500", style : "Classic"};
  return contest;
}

const reserveOnlyContest:IDisplayContest = getContest();
const upcomingContest:IDisplayContest = getContest();
const startedContest:IDisplayContest = getContest();

const stories = storiesOf('ContestDisplay', module)
.add('ReserveOnly', () => <ContestDisplay contest = {reserveOnlyContest}/>)
.add('Upcoming', () => <ContestDisplay contest = {upcomingContest}/>)
.add('Started', () => (<ContestDisplay contest = {startedContest}/>))

displayProvider.getDisplayContests("MLB").then((contests)=>{
  stories.add('ProdData', () => {
    return contests.map((c) => <ContestDisplay key={c.id} contest={startedContest}/>);
  });
});



