import { test, read } from "$TEST_HELPER";

import { AustinEnergyScraper } from "$PROJECT/AustinEnergyScraper.src";
import { HARMockServer } from "$PROJECT/tests/HARMockServer.src";

const HAR_PATH = "$PROJECT/tests/basics/capture.har";

test(() => {
  let mockSystem = new HARMockServer(HAR_PATH, read);

  return mockSystem.read("derp/foo/bar").then((res) => {
    console.log(">>>>>res", res); // XXX
  });
})
