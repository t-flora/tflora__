---
title: "Rendering a falling block"
date: '2023-06-24'
description: ""
hidden: true
tags: ["projects", "frontend", "Multris series", "react"]
---
Let's mock up a single block falling on our board upon pressing a 'start' button. We'll need a shape, a rendering loop

## Managing board state
One of the concepts I want to drive home with this project is state management with hooks. Typically, I'd think about the structure of game components in an object-oriented style. Hooks make state management in React much cleaner, however, and as someone who started my React journey with function components, I hope to stay away from classes as much as I can.

I'll need a few custom hooks to manage the board state, game loop, and time intervals. Let's start with what is needed for the most basic rendering.
1. A shapes object: we need to store matrices specifying the shape of all the pieces that can be dropped. We can achieve that with a simple object in which each block type is mapped to an array of arrays. Each matrix needs to be large enough to contain all 4 orientations of the shape meaning, for instance, that the I piece has a 4x4 matrix while for the O piece a 2x2 matrix will suffice.
2. A reducer function: since every state in the game loop in a Tetris variant depends only on the previous state and the actions taken by the player at that moment, we can update the board with a `useReducer` hook. Reducer functions take only these two parameters: state and action.
3. A `useInterval` hook: we want a one-unit drop of the current falling block every specified period of time by default. We will need a `useInterval` hook to dispatch that drop according to a set tick speed at which we want pieces to drop.