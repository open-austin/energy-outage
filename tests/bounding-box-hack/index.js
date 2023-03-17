import { test } from "$TEST_HELPER";

import { BoundingBoxTilingHack } from "$PROJECT/BoundingBoxTilingHack.src";

test(function bounding_box_tiling_hack_works_as_well_as_we_expect_it() {
  const { tiles } = new BoundingBoxTilingHack;
  
  let [ result ] = tiles(-98.00722, 30.09733, -97.48025, 30.50357, [ 7 ]);

  test.is(result.x, 29);
  test.is(result.y, 52);
  test.is(result.z, 7);

  var error;
  test.ok(!error);
  try {
    tiles(-100, 29, -95, 31, [ 7 ]);
  } catch (ex) {
    error = ex;
  }
  test.ok(error);
});
