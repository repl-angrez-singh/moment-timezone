"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Kanton"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Kanton", { offset: true, expect: "Pacific/Tongatapu" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Kanton", { abbr: true, expect: "Pacific/Tongatapu" }),

	"1979" : helpers.makeTestYear("Pacific/Kanton", [
		["1979-10-01T11:59:59+00:00", "23:59:59", "-12", 720],
		["1979-10-01T12:00:00+00:00", "01:00:00", "-11", 660]
	])
};