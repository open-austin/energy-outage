import { test, read } from "$TEST_HELPER";

import { AustinEnergyScraper } from "$PROJECT/AustinEnergyScraper.src";
import { HARMockServer } from "$PROJECT/tests/HARMockServer.src";

const HAR_PATH = "$PROJECT/tests/basics/capture.har";

test(function can_read_all_necessary_resources_from_capture() {
  let mockSystem = new HARMockServer(HAR_PATH, read);

  return readTheseEntries(mockSystem, 200, [
    "https://kubra.io/stormcenter/api/v1/stormcenters/" +
      "dd9c446f-f6b8-43f9-8f80-83f5245c60a1/views/" +
      "76446308-a901-4fa3-849c-3dd569933a51/currentState?preview=false",

    "https://kubra.io/stormcenter/api/v1/stormcenters/" +
      "dd9c446f-f6b8-43f9-8f80-83f5245c60a1/views/" +
      "76446308-a901-4fa3-849c-3dd569933a51/configuration/" +
      "7c485a47-cdc9-42b6-80d2-74ccf186e5e7?preview=false",

    "https://kubra.io/data/46dd01ff-383f-41b6-9664-24c95a3896bb/public/" +
      "summary-1/data.json",

    "https://kubra.io/regions/ef18ead9-efdf-4939-adcf-b3df8bec637a/" +
      "9c80a417-0d03-4486-8df8-329d0dcd27d1/serviceareas.json",

    "https://kubra.io/cluster-data/103/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/0231301.json",

    "https://kubra.io/cluster-data/210/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/02313012.json",

    "https://kubra.io/cluster-data/021/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/023130120.json",

    "https://kubra.io/cluster-data/302/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/0231301203.json",

    "https://kubra.io/cluster-data/212/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/0231301212.json",

    "https://kubra.io/cluster-data/121/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/023130121.json"
  ]).then((status) => {
    test.ok(status > 0);
  }).then(() => readTheseEntries(mockSystem, 404, [
    "https://kubra.io/cluster-data/102/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/0231301201.json",

    "https://kubra.io/cluster-data/012/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/0231301210.json",

    "https://kubra.io/cluster-data/312/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/0231301213.json",

    "https://kubra.io/cluster-data/032/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/0231301230.json",

    "https://kubra.io/cluster-data/112/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/0231301211.json",

    "https://kubra.io/cluster-data/132/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/0231301231.json",

    "https://kubra.io/cluster-data/122/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/0231301221.json",

    "https://kubra.io/cluster-data/202/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/0231301202.json",

    "https://kubra.io/cluster-data/002/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/0231301200.json",

    "https://kubra.io/cluster-data/022/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/0231301220.json",

    "https://kubra.io/cluster-data/201/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/023130102.json",

    "https://kubra.io/cluster-data/221/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/023130122.json",

    "https://kubra.io/cluster-data/130/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/023130031.json",

    "https://kubra.io/cluster-data/301/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/023130103.json",

    "https://kubra.io/cluster-data/321/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/023130123.json",

    "https://kubra.io/cluster-data/310/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/023130013.json",

    "https://kubra.io/cluster-data/330/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/023130033.json",

    "https://kubra.io/cluster-data/010/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/02313010.json",

    "https://kubra.io/cluster-data/310/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/02313013.json",

    "https://kubra.io/cluster-data/030/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/02313030.json",

    "https://kubra.io/cluster-data/300/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/02313003.json",

    "https://kubra.io/cluster-data/110/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/02313011.json",

    "https://kubra.io/cluster-data/130/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/02313031.json",

    "https://kubra.io/cluster-data/100/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/02313001.json",

    "https://kubra.io/cluster-data/120/" +
      "20d293c6-08fd-41b3-b96b-d2f522c74990/" +
      "46dd01ff-383f-41b6-9664-24c95a3896bb/public/cluster-1/02313021.json"
  ]).then((status) => {
    test.ok(status > 0);
  }));

  async function readTheseEntries(system, expectedStatus, uriList) {
    for (let i = 0, n = uriList.length; i < n; ++i) {
      let res = await system.read(uriList[i]);
      if (res.status != expectedStatus) {
        return -1;
      }
    }

    return expectedStatus;
  }
})

test(async function main_recursive_scraping_action() {
  let scraper = new AustinEnergyScraper(new HARMockServer(HAR_PATH, read));
  await scraper.scrapeAndStore();
})
