import { test } from "$TEST_HELPER"

import { Mapping } from "$PROJECT/Mapping.src"

test(function quadkey_from_point() {
  const { quadkey, tile } = Mapping;
  test.is(quadkey(tile(30.32138, -97.73696, 8)), "02313012");
  test.is(quadkey(tile(30.42976, -97.71362, 9)), "023130121");
  test.is(quadkey(tile(30.40962, -97.68135, 10)), "0231301212");
  test.is(quadkey(tile(30.30898, -97.76599, 11)), "02313012031");
  test.is(quadkey(tile(30.30521, -97.67037, 12)), "023130121202");
  test.is(quadkey(tile(30.30521, -97.67037, 11)), "02313012120");
  test.is(quadkey(tile(30.30521, -97.67037, 10)), "0231301212");
  test.is(quadkey(tile(30.32744, -97.77477, 10)), "0231301203");
  test.is(quadkey(tile(30.21156, -97.79403, 10)), "0231301203");
  test.is(quadkey(tile(30.28073, -97.74572, 9)), "023130120");
  test.is(quadkey(tile(30.32138, -97.73696, 8)), "02313012");
})

test(function tile_from_quadkey() {
  const { Tile } = Mapping;

  let tile = null;

  tile = Tile.fromQuadkey("2");
  test.is(tile.x, 0);
  test.is(tile.y, 1);
  test.is(tile.z, 1);

  tile = Tile.fromQuadkey("13");
  test.is(tile.x, 3);
  test.is(tile.y, 1);
  test.is(tile.z, 2);

  tile = Tile.fromQuadkey("0231301");
  test.is(tile.x, 29);
  test.is(tile.y, 52);
  test.is(tile.z, 7);

  tile = Tile.fromQuadkey("02313012");
  test.is(tile.x, 58);
  test.is(tile.y, 105);
  test.is(tile.z, 8);

  tile = Tile.fromQuadkey("023130121");
  test.is(tile.x, 117);
  test.is(tile.y, 210);
  test.is(tile.z, 9);

  tile = Tile.fromQuadkey("0231301212");
  test.is(tile.x, 234);
  test.is(tile.y, 421);
  test.is(tile.z, 10);

  tile = Tile.fromQuadkey("0231301210");
  test.is(tile.x, 234);
  test.is(tile.y, 420);
  test.is(tile.z, 10);

  tile = Tile.fromQuadkey("0231301213");
  test.is(tile.x, 235);
  test.is(tile.y, 421);
  test.is(tile.z, 10);

  tile = Tile.fromQuadkey("0231301230");
  test.is(tile.x, 234);
  test.is(tile.y, 422);
  test.is(tile.z, 10);

  tile = Tile.fromQuadkey("0231301203");
  test.is(tile.x, 233);
  test.is(tile.y, 421);
  test.is(tile.z, 10);

  tile = Tile.fromQuadkey("02313012033");
  test.is(tile.x, 467);
  test.is(tile.y, 843);
  test.is(tile.z, 11);

  tile = Tile.fromQuadkey("023130120331");
  test.is(tile.x, 935);
  test.is(tile.y, 1686);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130120313");
  test.is(tile.x, 935);
  test.is(tile.y, 1685);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130121220");
  test.is(tile.x, 936);
  test.is(tile.y, 1686);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130120333");
  test.is(tile.x, 935);
  test.is(tile.y, 1687);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130120330");
  test.is(tile.x, 934);
  test.is(tile.y, 1686);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130121202");
  test.is(tile.x, 936);
  test.is(tile.y, 1685);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130121200");
  test.is(tile.x, 936);
  test.is(tile.y, 1684);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130121022");
  test.is(tile.x, 936);
  test.is(tile.y, 1683);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130121201");
  test.is(tile.x, 937);
  test.is(tile.y, 1684);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130120311");
  test.is(tile.x, 935);
  test.is(tile.y, 1684);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130121023");
  test.is(tile.x, 937);
  test.is(tile.y, 1683);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130121203");
  test.is(tile.x, 937);
  test.is(tile.y, 1685);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130120133");
  test.is(tile.x, 935);
  test.is(tile.y, 1683);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130120131");
  test.is(tile.x, 935);
  test.is(tile.y, 1682);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130120132");
  test.is(tile.x, 934);
  test.is(tile.y, 1683);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130121020");
  test.is(tile.x, 936);
  test.is(tile.y, 1682);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130120130");
  test.is(tile.x, 934);
  test.is(tile.y, 1682);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130120310");
  test.is(tile.x, 934);
  test.is(tile.y, 1684);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130121221");
  test.is(tile.x, 937);
  test.is(tile.y, 1686);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130121222");
  test.is(tile.x, 936);
  test.is(tile.y, 1687);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130121223");
  test.is(tile.x, 937);
  test.is(tile.y, 1687);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130123000");
  test.is(tile.x, 936);
  test.is(tile.y, 1688);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130123001");
  test.is(tile.x, 937);
  test.is(tile.y, 1688);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130122111");
  test.is(tile.x, 935);
  test.is(tile.y, 1688);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130120312");
  test.is(tile.x, 934);
  test.is(tile.y, 1685);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("023130120332");
  test.is(tile.x, 934);
  test.is(tile.y, 1687);
  test.is(tile.z, 12);

  tile = Tile.fromQuadkey("0231301211");
  test.is(tile.x, 235);
  test.is(tile.y, 420);
  test.is(tile.z, 10);

  tile = Tile.fromQuadkey("0231301231");
  test.is(tile.x, 235);
  test.is(tile.y, 422);
  test.is(tile.z, 10);

  tile = Tile.fromQuadkey("0231301201");
  test.is(tile.x, 233);
  test.is(tile.y, 420);
  test.is(tile.z, 10);

  tile = Tile.fromQuadkey("0231301023");
  test.is(tile.x, 233);
  test.is(tile.y, 419);
  test.is(tile.z, 10);

  tile = Tile.fromQuadkey("0231301200");
  test.is(tile.x, 232);
  test.is(tile.y, 420);
  test.is(tile.z, 10);

  tile = Tile.fromQuadkey("0231301032");
  test.is(tile.x, 234);
  test.is(tile.y, 419);
  test.is(tile.z, 10);

  tile = Tile.fromQuadkey("0231301022");
  test.is(tile.x, 232);
  test.is(tile.y, 419);
  test.is(tile.z, 10);

  tile = Tile.fromQuadkey("0231301202");
  test.is(tile.x, 232);
  test.is(tile.y, 421);
  test.is(tile.z, 10);

  tile = Tile.fromQuadkey("0231301221");
  test.is(tile.x, 233);
  test.is(tile.y, 422);
  test.is(tile.z, 10);

  tile = Tile.fromQuadkey("023130103");
  test.is(tile.x, 117);
  test.is(tile.y, 209);
  test.is(tile.z, 9);

  tile = Tile.fromQuadkey("023130130");
  test.is(tile.x, 118);
  test.is(tile.y, 210);
  test.is(tile.z, 9);

  tile = Tile.fromQuadkey("023130123");
  test.is(tile.x, 117);
  test.is(tile.y, 211);
  test.is(tile.z, 9);

  tile = Tile.fromQuadkey("023130120");
  test.is(tile.x, 116);
  test.is(tile.y, 210);
  test.is(tile.z, 9);

  tile = Tile.fromQuadkey("023130102");
  test.is(tile.x, 116);
  test.is(tile.y, 209);
  test.is(tile.z, 9);

  tile = Tile.fromQuadkey("023130122");
  test.is(tile.x, 116);
  test.is(tile.y, 211);
  test.is(tile.z, 9);

  tile = Tile.fromQuadkey("023130031");
  test.is(tile.x, 115);
  test.is(tile.y, 210);
  test.is(tile.z, 9);

  tile = Tile.fromQuadkey("023130013");
  test.is(tile.x, 115);
  test.is(tile.y, 209);
  test.is(tile.z, 9);

  tile = Tile.fromQuadkey("023130033");
  test.is(tile.x, 115);
  test.is(tile.y, 211);
  test.is(tile.z, 9);

  tile = Tile.fromQuadkey("023130112");
  test.is(tile.x, 118);
  test.is(tile.y, 209);
  test.is(tile.z, 9);

  tile = Tile.fromQuadkey("023130132");
  test.is(tile.x, 118);
  test.is(tile.y, 211);
  test.is(tile.z, 9);

  tile = Tile.fromQuadkey("02313010");
  test.is(tile.x, 58);
  test.is(tile.y, 104);
  test.is(tile.z, 8);

  tile = Tile.fromQuadkey("02313013");
  test.is(tile.x, 59);
  test.is(tile.y, 105);
  test.is(tile.z, 8);

  tile = Tile.fromQuadkey("02313030");
  test.is(tile.x, 58);
  test.is(tile.y, 106);
  test.is(tile.z, 8);

  tile = Tile.fromQuadkey("02313003");
  test.is(tile.x, 57);
  test.is(tile.y, 105);
  test.is(tile.z, 8);

  tile = Tile.fromQuadkey("02313011");
  test.is(tile.x, 59);
  test.is(tile.y, 104);
  test.is(tile.z, 8);

  tile = Tile.fromQuadkey("02313031");
  test.is(tile.x, 59);
  test.is(tile.y, 106);
  test.is(tile.z, 8);

  tile = Tile.fromQuadkey("02313001");
  test.is(tile.x, 57);
  test.is(tile.y, 104);
  test.is(tile.z, 8);

  tile = Tile.fromQuadkey("02313021");
  test.is(tile.x, 57);
  test.is(tile.y, 106);
  test.is(tile.z, 8);
})

test(function polylines() {
  const { decodePolyline } = Mapping;

  function $(pair) {
    return pair.map(([ x, y ]) => ([ x.toFixed(5), y.toFixed(5) ]));
  }

  test.is(String($(decodePolyline("wpqwDx~gsQ"))), "30.24156,-97.69469");
  test.is(String($(decodePolyline("wxdxDh|tsQ"))), "30.34012,-97.76085");
  test.is(String($(decodePolyline("gqexD|blsQ"))), "30.34404,-97.71583");
  test.is(String($(decodePolyline("{|lxDxocsQ"))), "30.38174,-97.67181");
  test.is(String($(decodePolyline("goswDnvnsQ"))), "30.25156,-97.72920");
  test.is(String($(decodePolyline("cpsxDfbdsQ"))), "30.41554,-97.67476");
})
