---
title: "Making an n-trino-based game with Next.js"
date: '2023-06-20'
description: "What if tetriminos could be triminos, pentiminos, heximinos..."
hidden: false
tags: ["projects", "architecture", "Multris series"]
---
## Wait, has't this been done?
If I let myself visit [tetris.com](https://tetris.com/), I will do so conscious that at least half an hour will magically vanish.
But I really feel like building something to deepen my knowledge of fullstack development, especially of Node.js and of how Next.js uses its features. [Juraj Majerik's blog](https://jurajmajerik.com/) has inspired me to document the process of building a web-based game in a series of short articles that cover self-contained topics.

And, really, I just want to try to make a chaotic and fun game.

## 1. Frontend
As this is a Next.js project, I will be using React with TypeScript to build the frontend. Much inspiration is drawn from [Conner Ardman's React-based Tetris clone](https://github.com/ConnerArdman/tetris-react). This will be the first step implementing the game, making sure I can make things run in my local browser.

## 2. Leaderboard and personalization
I like it when games interact with their users by personalizing aspects of the experience. I'm particularly fond of statistics, so there will be a storage layer to persist data on user behavior and scores.
One of the features missing from [tetris.com](https://tetris.com/) is a global leaderboard. Users can't compare how they're doing to other players, or to other specific users, or to their past selves. I hope to change that in this as-yet-untitled version of [Multris](https://store.steampowered.com/app/1768350/Multris/).
The API layer should handle players following each other to keep up to date with their top scores.