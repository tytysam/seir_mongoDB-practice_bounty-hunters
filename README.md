Revised for MongoDB Atlas by: Ira Herman

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

## Intergalactic Bounty Hunter Database Mongo Lab

You've been going to meetup events and networking. You've been telling everyone you're so excited to get a dev job that you'll take _any job_.

You run into a shadowy stranger, who asks you three times 'Really? Any job?' and you continue to agree enthusiastically. Things go dark, and you wake up in a strange place.

The shadowy stranger greets you and says 'Welcome to your new job! You are now our dev who will be building an intergalactic bounty hunter database for us!'

You look around, notice some high end coffee and tea machines, an air hockey table, nap rooms and floor to ceiling windows with a view of outer space. The shadowy stranger takes you to your desk which has a fancy sit-to stand adjustable hight desk with a swing bar, two big monitors, and Herman Miller chair. You say to yourself 'Not bad! Not bad at all!'

## Set up

Open up your [MongoDB Atlas console](https://www.mongodb.com/cloud/atlas).

```
Create a database (sub-database technically) called hunters
```

Let's create a collection for all the beings that have bounties.

```js
Create a collection called: bounties
```


## Create/Insert

Let's add our first bounty.

Hmmm, it looks like they've given us a list of JS Objects they want created in the database. In the future (when we are using Mongoose in Node/Express) we'll be able to add those directly in - but for now we'll need to convert those to JSON in order to add them in MongoDB Atlas.

```js
  {
    name: 'Han Solo',
    wantedFor : 'Owing money',
    client : 'Jabba the Hut',
    reward : 1000000,
    ship: 'Millennium Falcon',
    hunters :['Bobba Fett', 'Dengar', 'IG-88', 'Zuckuss', 'Greedo', 'Bossk', '4-LOM'],
    captured: false
  }
```

I've gone ahead and converted this first one to JSON for you:

```js
{
  "name": "Han Solo",
  "wantedFor" : "Owing money",
  "client" : "Jabba the Hut",
  "reward" : 1000000,
  "ship": "Millennium Falcon",
  "hunters" : ["Bobba Fett", "Dengar", "IG-88", "Zuckuss", "Greedo", "Bossk", "4-LOM"],
  "captured": false
}
```

Go ahead and add Han Solo to the database.

That should have worked in Atlas. The rest are up to you to convert to JSON!

Using the above template, make another bounty

Now insert a few more bounties. Remember to convert these to JSON:

```js
[
  {
    name: 'Rocket',
    wantedFor : 'Stealing Batteries',
    client : 'Ayesha High Priestess of the Sovereign',
    reward : 1000000000,
    ship: 'The Milano',
    hunters :['Nebula', 'Ravagers'],
    captured: false
  },
  {
    name: 'Sara Lance',
    wantedFor : 'Screwing up the timeline, causing anachronisms',
    client : 'Time Bureau',
    reward : 50000,
    ship: 'Waverider',
    hunters :['Chronos'],
    captured: false
  },
  {
    name: 'Malcolm Reynolds',
    wantedFor : 'Aiming to misbehave',
    client : 'The Alliance',
    reward : 40000,
    ship: 'Serenity',
    hunters :['Jubal Early'],
    captured: false
  },
  {
    name: 'Starbuck',
    wantedFor : "Disobeying Captain's orders",
    client : 'Captain Adama',
    ship: 'Demetrius',
    reward : 1000,
    hunters :['Apollo'],
    captured: true
  }
]
```

## Read/Query

- Do a query to see all the bounties
- Do a query to find the bounty whose client is `Time Bureau`
- Do a query to find the bounties who have been `captured`
- Do a query specific to the bounty you inserted

## Remove

- Starbuck and the Captain have come to an understanding. Remove her record
- find and remove the duplicate record - be sure to JUST remove the one copy

## Update
Update `Sara Lance`'s name to be her superhero alias 'White Canary'

Update Rocket's ship to be `The Milano 2`

### Intermediate Mongo
Load up the [Query Operators quick reference](https://docs.mongodb.com/manual/reference/operator/query/) from the MongoDB docs.

- Find the bounties that are greater than `100000`
- Find the bounties that are less than `1000`
- Find the bounties that are less than or equal to `1000`

- Find the bounty with the hunter `Nebula`
- Find the bounty with the ship `Waverider` OR `Serenity`
- Find the bounty who is not captured AND has whose client is `Ayesha High Priestess of the Sovereign`
- Add `Bobba Fett` as a hunter for `Malcolm Reynolds`
- Add `Bobba Fett` as a hunter for the one that has the ship `Waverider`
- Find and remove `Dengar` the bounty hunter
- Try giving a new field of `lastSeen` to Han Solo, with the property `yesterday`

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)* <br>
Created by: Karolin Rafalski <br>
Revised for MongoDB Atlas by: Ira Herman <br>
