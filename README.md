# Spamalot

A dead simple JS app to send curated messages to staff to help with spam and phishing awareness.

It uses mailgun analytics to track clicks.

## Requirements

Node v10+
Mailgun account with registered domain.

## Setup

1. Clone into the git repository.
2. Run the following:
   npm i
3. Complete default.sample.json and rename it to default.json
4. Drop a list of emails into email_list.csv (no headers)
5. Run the program:
   node index.js

## Disclaimer

Use this at your own risk. No warranty is offered.
Any use is subject to the terms and agreements of the Mailgun (and other) service.
This should not, under any circumstances, be used for sending real spam.
