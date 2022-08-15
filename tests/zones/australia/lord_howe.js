"use strict";

var helpers = require("../../helpers/helpers");

exports["Australia/Lord_Howe"] = {

	"guess:by:offset" : helpers.makeTestGuess("Australia/Lord_Howe", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Australia/Lord_Howe", { abbr: true }),

	"1981" : helpers.makeTestYear("Australia/Lord_Howe", [
		["1981-02-28T13:59:59+00:00", "23:59:59", "AEST", -600],
		["1981-02-28T14:00:00+00:00", "00:30:00", "+1030", -630],
		["1981-10-24T15:29:59+00:00", "01:59:59", "+1030", -630],
		["1981-10-24T15:30:00+00:00", "03:00:00", "+1130", -690]
	]),

	"1982" : helpers.makeTestYear("Australia/Lord_Howe", [
		["1982-03-06T14:29:59+00:00", "01:59:59", "+1130", -690],
		["1982-03-06T14:30:00+00:00", "01:00:00", "+1030", -630],
		["1982-10-30T15:29:59+00:00", "01:59:59", "+1030", -630],
		["1982-10-30T15:30:00+00:00", "03:00:00", "+1130", -690]
	]),

	"1983" : helpers.makeTestYear("Australia/Lord_Howe", [
		["1983-03-05T14:29:59+00:00", "01:59:59", "+1130", -690],
		["1983-03-05T14:30:00+00:00", "01:00:00", "+1030", -630],
		["1983-10-29T15:29:59+00:00", "01:59:59", "+1030", -630],
		["1983-10-29T15:30:00+00:00", "03:00:00", "+1130", -690]
	]),

	"1984" : helpers.makeTestYear("Australia/Lord_Howe", [
		["1984-03-03T14:29:59+00:00", "01:59:59", "+1130", -690],
		["1984-03-03T14:30:00+00:00", "01:00:00", "+1030", -630],
		["1984-10-27T15:29:59+00:00", "01:59:59", "+1030", -630],
		["1984-10-27T15:30:00+00:00", "03:00:00", "+1130", -690]
	]),

	"1985" : helpers.makeTestYear("Australia/Lord_Howe", [
		["1985-03-02T14:29:59+00:00", "01:59:59", "+1130", -690],
		["1985-03-02T14:30:00+00:00", "01:00:00", "+1030", -630],
		["1985-10-26T15:29:59+00:00", "01:59:59", "+1030", -630],
		["1985-10-26T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"1986" : helpers.makeTestYear("Australia/Lord_Howe", [
		["1986-03-15T14:59:59+00:00", "01:59:59", "+11", -660],
		["1986-03-15T15:00:00+00:00", "01:30:00", "+1030", -630],
		["1986-10-18T15:29:59+00:00", "01:59:59", "+1030", -630],
		["1986-10-18T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"1987" : helpers.makeTestYear("Australia/Lord_Howe", [
		["1987-03-14T14:59:59+00:00", "01:59:59", "+11", -660],
		["1987-03-14T15:00:00+00:00", "01:30:00", "+1030", -630],
		["1987-10-24T15:29:59+00:00", "01:59:59", "+1030", -630],
		["1987-10-24T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"1988" : helpers.makeTestYear("Australia/Lord_Howe", [
		["1988-03-19T14:59:59+00:00", "01:59:59", "+11", -660],
		["1988-03-19T15:00:00+00:00", "01:30:00", "+1030", -630],
		["1988-10-29T15:29:59+00:00", "01:59:59", "+1030", -630],
		["1988-10-29T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"1989" : helpers.makeTestYear("Australia/Lord_Howe", [
		["1989-03-18T14:59:59+00:00", "01:59:59", "+11", -660],
		["1989-03-18T15:00:00+00:00", "01:30:00", "+1030", -630],
		["1989-10-28T15:29:59+00:00", "01:59:59", "+1030", -630],
		["1989-10-28T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"1990" : helpers.makeTestYear("Australia/Lord_Howe", [
		["1990-03-03T14:59:59+00:00", "01:59:59", "+11", -660],
		["1990-03-03T15:00:00+00:00", "01:30:00", "+1030", -630],
		["1990-10-27T15:29:59+00:00", "01:59:59", "+1030", -630],
		["1990-10-27T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"1991" : helpers.makeTestYear("Australia/Lord_Howe", [
		["1991-03-02T14:59:59+00:00", "01:59:59", "+11", -660],
		["1991-03-02T15:00:00+00:00", "01:30:00", "+1030", -630],
		["1991-10-26T15:29:59+00:00", "01:59:59", "+1030", -630],
		["1991-10-26T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"1992" : helpers.makeTestYear("Australia/Lord_Howe", [
		["1992-02-29T14:59:59+00:00", "01:59:59", "+11", -660],
		["1992-02-29T15:00:00+00:00", "01:30:00", "+1030", -630],
		["1992-10-24T15:29:59+00:00", "01:59:59", "+1030", -630],
		["1992-10-24T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"1993" : helpers.makeTestYear("Australia/Lord_Howe", [
		["1993-03-06T14:59:59+00:00", "01:59:59", "+11", -660],
		["1993-03-06T15:00:00+00:00", "01:30:00", "+1030", -630],
		["1993-10-30T15:29:59+00:00", "01:59:59", "+1030", -630],
		["1993-10-30T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"1994" : helpers.makeTestYear("Australia/Lord_Howe", [
		["1994-03-05T14:59:59+00:00", "01:59:59", "+11", -660],
		["1994-03-05T15:00:00+00:00", "01:30:00", "+1030", -630],
		["1994-10-29T15:29:59+00:00", "01:59:59", "+1030", -630],
		["1994-10-29T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"1995" : helpers.makeTestYear("Australia/Lord_Howe", [
		["1995-03-04T14:59:59+00:00", "01:59:59", "+11", -660],
		["1995-03-04T15:00:00+00:00", "01:30:00", "+1030", -630],
		["1995-10-28T15:29:59+00:00", "01:59:59", "+1030", -630],
		["1995-10-28T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"1996" : helpers.makeTestYear("Australia/Lord_Howe", [
		["1996-03-30T14:59:59+00:00", "01:59:59", "+11", -660],
		["1996-03-30T15:00:00+00:00", "01:30:00", "+1030", -630],
		["1996-10-26T15:29:59+00:00", "01:59:59", "+1030", -630],
		["1996-10-26T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"1997" : helpers.makeTestYear("Australia/Lord_Howe", [
		["1997-03-29T14:59:59+00:00", "01:59:59", "+11", -660],
		["1997-03-29T15:00:00+00:00", "01:30:00", "+1030", -630],
		["1997-10-25T15:29:59+00:00", "01:59:59", "+1030", -630],
		["1997-10-25T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"1998" : helpers.makeTestYear("Australia/Lord_Howe", [
		["1998-03-28T14:59:59+00:00", "01:59:59", "+11", -660],
		["1998-03-28T15:00:00+00:00", "01:30:00", "+1030", -630],
		["1998-10-24T15:29:59+00:00", "01:59:59", "+1030", -630],
		["1998-10-24T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"1999" : helpers.makeTestYear("Australia/Lord_Howe", [
		["1999-03-27T14:59:59+00:00", "01:59:59", "+11", -660],
		["1999-03-27T15:00:00+00:00", "01:30:00", "+1030", -630],
		["1999-10-30T15:29:59+00:00", "01:59:59", "+1030", -630],
		["1999-10-30T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2000" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2000-03-25T14:59:59+00:00", "01:59:59", "+11", -660],
		["2000-03-25T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2000-08-26T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2000-08-26T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2001" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2001-03-24T14:59:59+00:00", "01:59:59", "+11", -660],
		["2001-03-24T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2001-10-27T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2001-10-27T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2002" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2002-03-30T14:59:59+00:00", "01:59:59", "+11", -660],
		["2002-03-30T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2002-10-26T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2002-10-26T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2003" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2003-03-29T14:59:59+00:00", "01:59:59", "+11", -660],
		["2003-03-29T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2003-10-25T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2003-10-25T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2004" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2004-03-27T14:59:59+00:00", "01:59:59", "+11", -660],
		["2004-03-27T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2004-10-30T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2004-10-30T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2005" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2005-03-26T14:59:59+00:00", "01:59:59", "+11", -660],
		["2005-03-26T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2005-10-29T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2005-10-29T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2006" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2006-04-01T14:59:59+00:00", "01:59:59", "+11", -660],
		["2006-04-01T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2006-10-28T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2006-10-28T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2007" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2007-03-24T14:59:59+00:00", "01:59:59", "+11", -660],
		["2007-03-24T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2007-10-27T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2007-10-27T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2008" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2008-04-05T14:59:59+00:00", "01:59:59", "+11", -660],
		["2008-04-05T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2008-10-04T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2008-10-04T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2009" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2009-04-04T14:59:59+00:00", "01:59:59", "+11", -660],
		["2009-04-04T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2009-10-03T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2009-10-03T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2010" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2010-04-03T14:59:59+00:00", "01:59:59", "+11", -660],
		["2010-04-03T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2010-10-02T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2010-10-02T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2011" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2011-04-02T14:59:59+00:00", "01:59:59", "+11", -660],
		["2011-04-02T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2011-10-01T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2011-10-01T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2012" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2012-03-31T14:59:59+00:00", "01:59:59", "+11", -660],
		["2012-03-31T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2012-10-06T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2012-10-06T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2013" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2013-04-06T14:59:59+00:00", "01:59:59", "+11", -660],
		["2013-04-06T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2013-10-05T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2013-10-05T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2014" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2014-04-05T14:59:59+00:00", "01:59:59", "+11", -660],
		["2014-04-05T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2014-10-04T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2014-10-04T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2015" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2015-04-04T14:59:59+00:00", "01:59:59", "+11", -660],
		["2015-04-04T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2015-10-03T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2015-10-03T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2016" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2016-04-02T14:59:59+00:00", "01:59:59", "+11", -660],
		["2016-04-02T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2016-10-01T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2016-10-01T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2017" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2017-04-01T14:59:59+00:00", "01:59:59", "+11", -660],
		["2017-04-01T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2017-09-30T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2017-09-30T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2018" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2018-03-31T14:59:59+00:00", "01:59:59", "+11", -660],
		["2018-03-31T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2018-10-06T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2018-10-06T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2019" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2019-04-06T14:59:59+00:00", "01:59:59", "+11", -660],
		["2019-04-06T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2019-10-05T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2019-10-05T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2020" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2020-04-04T14:59:59+00:00", "01:59:59", "+11", -660],
		["2020-04-04T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2020-10-03T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2020-10-03T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2021" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2021-04-03T14:59:59+00:00", "01:59:59", "+11", -660],
		["2021-04-03T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2021-10-02T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2021-10-02T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2022" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2022-04-02T14:59:59+00:00", "01:59:59", "+11", -660],
		["2022-04-02T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2022-10-01T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2022-10-01T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2023" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2023-04-01T14:59:59+00:00", "01:59:59", "+11", -660],
		["2023-04-01T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2023-09-30T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2023-09-30T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2024" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2024-04-06T14:59:59+00:00", "01:59:59", "+11", -660],
		["2024-04-06T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2024-10-05T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2024-10-05T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2025" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2025-04-05T14:59:59+00:00", "01:59:59", "+11", -660],
		["2025-04-05T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2025-10-04T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2025-10-04T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2026" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2026-04-04T14:59:59+00:00", "01:59:59", "+11", -660],
		["2026-04-04T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2026-10-03T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2026-10-03T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2027" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2027-04-03T14:59:59+00:00", "01:59:59", "+11", -660],
		["2027-04-03T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2027-10-02T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2027-10-02T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2028" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2028-04-01T14:59:59+00:00", "01:59:59", "+11", -660],
		["2028-04-01T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2028-09-30T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2028-09-30T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2029" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2029-03-31T14:59:59+00:00", "01:59:59", "+11", -660],
		["2029-03-31T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2029-10-06T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2029-10-06T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2030" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2030-04-06T14:59:59+00:00", "01:59:59", "+11", -660],
		["2030-04-06T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2030-10-05T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2030-10-05T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2031" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2031-04-05T14:59:59+00:00", "01:59:59", "+11", -660],
		["2031-04-05T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2031-10-04T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2031-10-04T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2032" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2032-04-03T14:59:59+00:00", "01:59:59", "+11", -660],
		["2032-04-03T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2032-10-02T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2032-10-02T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2033" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2033-04-02T14:59:59+00:00", "01:59:59", "+11", -660],
		["2033-04-02T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2033-10-01T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2033-10-01T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2034" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2034-04-01T14:59:59+00:00", "01:59:59", "+11", -660],
		["2034-04-01T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2034-09-30T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2034-09-30T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2035" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2035-03-31T14:59:59+00:00", "01:59:59", "+11", -660],
		["2035-03-31T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2035-10-06T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2035-10-06T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2036" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2036-04-05T14:59:59+00:00", "01:59:59", "+11", -660],
		["2036-04-05T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2036-10-04T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2036-10-04T15:30:00+00:00", "02:30:00", "+11", -660]
	]),

	"2037" : helpers.makeTestYear("Australia/Lord_Howe", [
		["2037-04-04T14:59:59+00:00", "01:59:59", "+11", -660],
		["2037-04-04T15:00:00+00:00", "01:30:00", "+1030", -630],
		["2037-10-03T15:29:59+00:00", "01:59:59", "+1030", -630],
		["2037-10-03T15:30:00+00:00", "02:30:00", "+11", -660]
	])
};