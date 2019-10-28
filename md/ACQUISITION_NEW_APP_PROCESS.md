===LECKR applies ProtoMouse===
  
1) Choose name & app name based on SEO, ASO, clarity, funniness, etc.



2) Get Domain NameCheap



3) Create FastMail

Unblock FastMail. Then write down process there... 

4) link to CloudFlare (custom dns)

dana.ns.cloudflare.com
paul.ns.cloudflare.com
 
4) Cloudflare DNS to Surge.sh and Fastmail

CNAME   dunbar.site	is an alias of na-west1.surge.sh		
CNAME   www	is an alias of na-west1.surge.sh		
CNAME   fm1._domainkey	is an alias of fm1.dunbar.site.dkim.fmhosted.com		
CNAME   fm2._domainkey	is an alias of fm2.dunbar.site.dkim.fmhosted.com		
CNAME   fm3._domainkey	is an alias of fm3.dunbar.site.dkim.fmhosted.com		
MX  dunbar.site	    mail handled by in1-smtp.messagingengine.com
MX  dunbar.site	    mail handled by in2-smtp.messagingengine.com
TXT dunbar.site	    v=spf1 include:spf.messagingengine.com ?all

Crypto ->
- SSL Flexible (why?)
- Always https ON


5) Copy default folder, fill in config.js & app.json, import it in config/navigation.

It's probably easier to copy the folder to an app folder once I use it. This also makes sure that the other apps are not included in the assets when building. 

6) Create MailChimp, create default mails


7) Create TypeForm for feedback
8) Create Google Analytics, Segment, etc.
9)  Create Ghost tag if applicable, add blogs
10) Interact the client again and fill in copy together using different strategies & target audiences
11) Build & deploy for web                                              (could be highly automated)
12) Validate by outreach to network and other channels
13) Measure traction, send back to client.
14) Receive payment

The client decides whether or not to continue. If so, a hackathon will be organized. The app can be produced in 1-4 hackathons, and one hackathon costs €5000,- (or as much as sounds feasible depending on features)

:::::LECKR applies ProductBird::::::
1) Create app core functionality within the LECKR Boilerplate
2) Create assets
3) Build/deploy for Android
4) build/deploy for iOS too (they need the functionality)
5) launch by outreach to network and other channels
6) Measure traction, send back to client

This whole process is my unfair advantage. Keep it secret. For outsiders, the hackathon is a fun activity, the productmouse takes a week, the productbird takes a whole month.

#later ProtoMouse:
- See if I can use something like NetlifyCMS to let my clients update things on the app/website/anything through a CMS.
- Automate ProtoMouse as much as possible
- Create website/app out of it that lets you manage your validation

#later ProductBird:
- https://www.google.com/search?q=obfuscate+javascript use this to make it possible for outsiders to use my packages without seeing the code. Then, the documentation can be printed and kept here, at home (on the wall, for example). This way, it's impossible for someone to steal my unfair advantage!
Something like this is perfect to make it available through npm: https://blog.jscrambler.com/publish-your-scrambled-code-through-npm/


For every app idea, I need these assets:
- [ ] Logo
- [ ] ±3 screenshots, sketch-designs, or pictures that show the value proposition
- [ ] FB Ad pic
- [ ] name(s), ±3 headlines, and ±3 subtitles, which are added to the picture in different ways
- [ ] Why (Love the problem)
- [ ] Background (blogs)
- [ ] How (Multiple USP's)

# MailChimp

How to set up mailchimp

## Setup

### Going to the right URL

To make sure people end up on yourwebsite.com/emailsuccess, please do this:

In MailChimp,

1. audience
2. Manage audience
3. signup forms
4. form builder
5. forms and response emails -> confirmation thank you page
6. send subs to another URL
7. fill in something like https://yourdomain.com/emailsuccess
8. hit save

## URL

Get an URL like this:

https://kjkljlkjlj.us16.list-manage.com/subscribe/post?u=211c8e286b504f8faf1b92bb2&amp;id=74a7bddfd2

NB: with post-json instead of post, you'll get JSON in return instead.

## Setup e-mail address

1. From NameCheap, nameservers to CloudFlare
2. From CloudFlare, mx records to FastMail
3. Get e-mail, verify it in MailChimp


# Test Web also on iPhone/Android!! Also older browsers. 
https://medium.com/@claire.ristow/how-to-test-your-localhost-on-an-iphone-54e7b11439b7 to test on iphone
by default, always test on iPhone too because somehow there are a lot different rules there! Especially maybe because it's an older iPhone. Therefore, also DON'T UPGRADE to a newer iOS, if possible.
