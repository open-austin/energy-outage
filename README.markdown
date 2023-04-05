This is a re-implementation of the Austin Energy outage map scraper, a result
of the intention to get it to run on V8, which will make it suitable to run
as a Cloudflare Worker script.  (And, conveniently, can be easily run in the
browser, too.)

The scraping logic is complete.  You can run the tests:

1. Open the test runner tests/harness.app.htm
2. Click the "Open..." button in the sidebar
3. Point it at the project source code (i.e. this directory)

(Alternatively, if you have NodeJS installed and don't want to have to spend
time clicking around and reloading the test harness, then you can run the
command `nodejs ./tests/harness.app.htm` from the command-line.  If you have
NodeJS installed but it's under the name `node` instead of `nodejs`, then use
that instead.)

Right now, one test should be failing: 

> Error: GitHub storage not implemented [from tests/basics/index.js]

This is expected; the code to sync data hasn't been written (although even if
it were, we wouldn't want running the tests to end up touching the data).

The tests use a mock data source found at `tests/basics/capture.har`.  Rather
than hitting the network for live data, the tests read historical data from
this network capture.

TODO:
- Start and finish a program wrapper around the scraping logic (i.e. enable it
  to actually fetch live outage map data from the network)
  - Implement storage...
    - to GitHub, as in the original Python implementation
    - to a blob storage provider like Backblaze B2
    - to the local disk
- Write a build tool that will package this up so it can be trivially shared
  as a single-file "notebook" that works in the browser so researchers who
  don't have NodeJS installed and/or aren't familiar with the command-line can
  still use this tool to initiate one-off scraping jobs by opening the
  notebook and clicking "Run".  It can/should prompt the operator to save the
  results (i.e. to their computer) upon completion.
