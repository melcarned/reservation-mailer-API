# Simple NodeJS and Express API for emailing restaurant reservation details (v1 GMAIL ONLY).

A user enters their information in a form and requests a reservation for Corsia Veloce (restaurant).

1.  A "Reservation Summary" email will be sent to the customers with details of their requests.

2.  A "New Reservation Details" email will be sent to the restaurants email.

## Setup

Add an .env file with the email and password of the host Email (currently only works with GMAIL)

## Trigger reservatin emails

POST: "/api/newReservation"

with

{
to: CUSTOMER_EMAIL,
subject: SUBJECT,
text: TEXT_BODY,
html: HTML_BODY
}

## Deploying to Heroku

```
heroku create
git push heroku master
heroku open
```

Alternatively, you can deploy your own copy of the app using the web-based flow:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Other

Check out nodemailer for more details.
