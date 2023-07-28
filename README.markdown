This is a re-implementation of the data harvester for the Austin Energy outage
map.  It exists as a result of the intention to get it to run on V8, which
will make it suitable to run as a Cloudflare Worker script.  (And,
conveniently, can be trivially tested in the browser, too.)

Although the original implementation in Python refers to it as a "scraper",
for accuracy's sake, we avoid referring to anything this way except for the
use of the original class names chosen at the time that the Python
implementation was written.


Basic crawling
==============

The re-implementation of crawling logic is complete.  You can run the tests:

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


The khar2json converter
=======================

Unlike the original implementation in Python, a standalone khar2json utility
is available that re-uses the heart of the crawling logic.  Similar to the
arrangement described above where the tests ingest a network capture in HAR
format, the khar2json utility can be built and run to convert a network
capture into the JSON output format of the original Python implementation.
This is useful for reproducibility, i.e., when given a capture that includes
the network responses that the crawler *would have* received if the current
state of the outage map matched the data at the time of the capture, it is
important to be able to verify the crawling logic handles those responses
consistently.

khar2json.app.htm can be built with `khar2json-util/Build.app.htm`; open
Build.app.htm, point it at the repo, and run the following command:

    build ./khar2json-util/main.src

(By default, this outputs a file `out.app.htm`.  You may also specify the
option `-o khar2json.app.htm` e.g. by adding it to the end of the command to
override this behavior.)

If you have NodeJS installed and prefer to work in the terminal, you can run
the build script as:

    nodejs ./khar2json-util/Build.app.htm $BUILDCOMMAND

... where `$BUILDCOMMAND` is the same command given above--without or without
the use of the optional `-o` as described.

Run khar2json by feeding it a network capture.  Instructions for putting a
suitable network capture together are outside the scope of this README, but
can be accomplished using `tools/kubrascraperlog2fetchsnippet.app.htm`.  An
explanation is provided in that file.  The network capture used for tests
(`tests/basics/capture.har`) can be used as input to khar2json.


Miscellanous
============

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
