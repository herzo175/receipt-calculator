# Receipt Calculator

A simple React + Gatsby site for splitting receipts

## Overview

Users are able to add a recipt's items and members through the UI. Users can be
added and removed from the group, along with items and their prices. Adding an
item will cause it to be automatically split among the current group members.
Members can be turned on or off for that item to not be charged for it.

## Process

The main page and logic is handled by index.js. This also handles the state for
the members and items. Members and items are displayed in their respective
components, members.js and item.js. These classes notify index.js to change
state. In addition, new_item.js is a component responsible for providing fields
to add a new item and price to index.js.

## Next Steps

- Email integration
- Venmo integration
