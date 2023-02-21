<h1>Open Austin Energy Outage Project</h1>

<h2>Background</h2>
<p>
In February 2023, the city of Austin experienced a winter storm that at its peak resulted in over 170,000 Austin Energy customers
without power. The utility offers a public <a href="https://outagemap.austinenergy.com/" target="_blank">interactive outage map</a> which shows
current outages but doesn't allow users to explore historic data. Access to information on past outages could enable residents to
do their own analysis of how the city responds to future crises, if certain areas are priortized over others, etc.
</p>
<h2>Base Code</h2>
<p>
In 2019 in response to similar energy crises, <a href="https://codeforkentuckiana.org/2019-12-18-power-utility-data/" target="_blank">
Code for Kentuckiana</a> released a dataset of outages in Kentucky based on a program that periodically scraps the map information and
stores it on Heroku. According to the author on Github, these scripts should be able to be replicated for other localities that use the
same company (Kubra) to produce their outage maps (which Austin Energy does).
</p>
<blockquote>
If this repo is cloned, lgeku_scraper.py can be replaced with another location-specific scraper, like the one in this PR.

instance_id and view_id come from the outage map's HTML:
https://kubra.io/stormcenter/views/66f63a73-3b4a-4b2a-a833-f01668ef4986
which is iframed in:
https://www.pepco.com/Outages/CheckOutageStatus/Pages/ViewOutageMap.aspx

owner and repo need to be set to the repo where the outage JSON should be written.

The only other thing to do is to add a GitHub token to the cloned repo's Actions so that it can write to the destination repo.

Create a personal access token using an account that has access to the destination repo: https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line

Add it to GitHub actions, giving it the name GH_TOKEN: https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets

The action should have been copied over and should be picked up and execute an Action every 15 minutes, scraping and saving the current outages.
</blockquote>

<h2>First Impressions</h2>
Initial exploration shows that one issue in revising the code for the Austin Power Outage map is that the MIN_ZOOM in kubra_scraper.py
is set to 7 for the entire state of Kentucky, which is too far out for Austin's map. How the code works is it creates a bounding box 
based on the boundaries of the energy map, then zooms in and splits them into "quadkeys", but at zoom 7 there was only one quadkey.
Changing to zoom 14 resulted in more quadkeys being generated, but still getting an error of the number_out variable not matching 
the expected_outages variable when the script is executed.
