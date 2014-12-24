hmc-unquarantine
================

I always get "Claremont Colleges Quarantine Notification" emails telling me that it's filtered spam from my email inbox. This isn't a great experience for two reasons... First, almost all of the time, the email isn't spam, so I have to open the email and release it from the quarantine. Second, if the email was in fact spam, then this system has just replaced one spammy email (the original) with another (the notification). I'm sure Gmail's spam filter would have caught it anyway, too.

I wrote a quick script to solve this problem... Open [this script](https://script.google.com/d/1-mDqClXZiyts2aVMXvVTGZ07YpGGPMLesMbthbAhwVwqJeO0O6X89leF/edit?usp=sharing) and click `Resources > Current project's triggers` and set it to run every hour. Now Gmail will automatically open your quarantine notifications, click the Release link, and delete that notification. If the email was legit, then it'll show up in your inbox; if it was spam, then Gmail's spam filter will get rid of it for you.
