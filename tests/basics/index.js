import { test, read } from "$TEST_HELPER";

// XXX import { AustinEnergyScraper } from "$PROJECT/AustinEnergyScraper.src";
import { HARMockServer } from "$PROJECT/tests/HARMockServer.src";

const HAR_PATH = "$PROJECT/tests/basics/capture.har";

test(() => {
  let mockSystem = new HARMockServer(HAR_PATH, read);

  const url = ( // XXX
    "https://maps.googleapis.com/maps/api/mapsjs/gen_204?csp_test=true"
  );

  return mockSystem.read(url).then((res) => {
    if (res.status == 200) {
      return Promise.resolve();
    }
    return Promise.reject();
  });
})
