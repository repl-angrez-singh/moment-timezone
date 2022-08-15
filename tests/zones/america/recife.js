"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Recife"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Recife", { offset: true, expect: "America/Sao_Paulo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Recife", { abbr: true, expect: "America/Sao_Paulo" }),

	"1931" : helpers.makeTestYear("America/Recife", [
		["1931-10-03T13:59:59+00:00", "10:59:59", "-03", 180],
		["1931-10-03T14:00:00+00:00", "12:00:00", "-02", 120]
	]),

	"1932" : helpers.makeTestYear("America/Recife", [
		["1932-04-01T01:59:59+00:00", "23:59:59", "-02", 120],
		["1932-04-01T02:00:00+00:00", "23:00:00", "-03", 180],
		["1932-10-03T02:59:59+00:00", "23:59:59", "-03", 180],
		["1932-10-03T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1933" : helpers.makeTestYear("America/Recife", [
		["1933-04-01T01:59:59+00:00", "23:59:59", "-02", 120],
		["1933-04-01T02:00:00+00:00", "23:00:00", "-03", 180]
	]),

	"1949" : helpers.makeTestYear("America/Recife", [
		["1949-12-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1949-12-01T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1950" : helpers.makeTestYear("America/Recife", [
		["1950-04-16T02:59:59+00:00", "00:59:59", "-02", 120],
		["1950-04-16T03:00:00+00:00", "00:00:00", "-03", 180],
		["1950-12-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1950-12-01T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1951" : helpers.makeTestYear("America/Recife", [
		["1951-04-01T01:59:59+00:00", "23:59:59", "-02", 120],
		["1951-04-01T02:00:00+00:00", "23:00:00", "-03", 180],
		["1951-12-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1951-12-01T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1952" : helpers.makeTestYear("America/Recife", [
		["1952-04-01T01:59:59+00:00", "23:59:59", "-02", 120],
		["1952-04-01T02:00:00+00:00", "23:00:00", "-03", 180],
		["1952-12-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1952-12-01T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1953" : helpers.makeTestYear("America/Recife", [
		["1953-03-01T01:59:59+00:00", "23:59:59", "-02", 120],
		["1953-03-01T02:00:00+00:00", "23:00:00", "-03", 180]
	]),

	"1963" : helpers.makeTestYear("America/Recife", [
		["1963-12-09T02:59:59+00:00", "23:59:59", "-03", 180],
		["1963-12-09T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1964" : helpers.makeTestYear("America/Recife", [
		["1964-03-01T01:59:59+00:00", "23:59:59", "-02", 120],
		["1964-03-01T02:00:00+00:00", "23:00:00", "-03", 180]
	]),

	"1965" : helpers.makeTestYear("America/Recife", [
		["1965-01-31T02:59:59+00:00", "23:59:59", "-03", 180],
		["1965-01-31T03:00:00+00:00", "01:00:00", "-02", 120],
		["1965-03-31T01:59:59+00:00", "23:59:59", "-02", 120],
		["1965-03-31T02:00:00+00:00", "23:00:00", "-03", 180],
		["1965-12-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1965-12-01T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1966" : helpers.makeTestYear("America/Recife", [
		["1966-03-01T01:59:59+00:00", "23:59:59", "-02", 120],
		["1966-03-01T02:00:00+00:00", "23:00:00", "-03", 180],
		["1966-11-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1966-11-01T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1967" : helpers.makeTestYear("America/Recife", [
		["1967-03-01T01:59:59+00:00", "23:59:59", "-02", 120],
		["1967-03-01T02:00:00+00:00", "23:00:00", "-03", 180],
		["1967-11-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1967-11-01T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1968" : helpers.makeTestYear("America/Recife", [
		["1968-03-01T01:59:59+00:00", "23:59:59", "-02", 120],
		["1968-03-01T02:00:00+00:00", "23:00:00", "-03", 180]
	]),

	"1985" : helpers.makeTestYear("America/Recife", [
		["1985-11-02T02:59:59+00:00", "23:59:59", "-03", 180],
		["1985-11-02T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1986" : helpers.makeTestYear("America/Recife", [
		["1986-03-15T01:59:59+00:00", "23:59:59", "-02", 120],
		["1986-03-15T02:00:00+00:00", "23:00:00", "-03", 180],
		["1986-10-25T02:59:59+00:00", "23:59:59", "-03", 180],
		["1986-10-25T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1987" : helpers.makeTestYear("America/Recife", [
		["1987-02-14T01:59:59+00:00", "23:59:59", "-02", 120],
		["1987-02-14T02:00:00+00:00", "23:00:00", "-03", 180],
		["1987-10-25T02:59:59+00:00", "23:59:59", "-03", 180],
		["1987-10-25T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1988" : helpers.makeTestYear("America/Recife", [
		["1988-02-07T01:59:59+00:00", "23:59:59", "-02", 120],
		["1988-02-07T02:00:00+00:00", "23:00:00", "-03", 180],
		["1988-10-16T02:59:59+00:00", "23:59:59", "-03", 180],
		["1988-10-16T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1989" : helpers.makeTestYear("America/Recife", [
		["1989-01-29T01:59:59+00:00", "23:59:59", "-02", 120],
		["1989-01-29T02:00:00+00:00", "23:00:00", "-03", 180],
		["1989-10-15T02:59:59+00:00", "23:59:59", "-03", 180],
		["1989-10-15T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1990" : helpers.makeTestYear("America/Recife", [
		["1990-02-11T01:59:59+00:00", "23:59:59", "-02", 120],
		["1990-02-11T02:00:00+00:00", "23:00:00", "-03", 180]
	]),

	"1999" : helpers.makeTestYear("America/Recife", [
		["1999-10-03T02:59:59+00:00", "23:59:59", "-03", 180],
		["1999-10-03T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"2000" : helpers.makeTestYear("America/Recife", [
		["2000-02-27T01:59:59+00:00", "23:59:59", "-02", 120],
		["2000-02-27T02:00:00+00:00", "23:00:00", "-03", 180],
		["2000-10-08T02:59:59+00:00", "23:59:59", "-03", 180],
		["2000-10-08T03:00:00+00:00", "01:00:00", "-02", 120],
		["2000-10-15T01:59:59+00:00", "23:59:59", "-02", 120],
		["2000-10-15T02:00:00+00:00", "23:00:00", "-03", 180]
	]),

	"2001" : helpers.makeTestYear("America/Recife", [
		["2001-10-14T02:59:59+00:00", "23:59:59", "-03", 180],
		["2001-10-14T03:00:00+00:00", "01:00:00", "-02", 120]
	])
};