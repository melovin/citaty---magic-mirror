/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "", "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				timezone: "Europe/Prague"
			}
		},
		{
			module: "compliments",
			position: "middle_center",
			config: {
				remoteFile: 'https://raw.githubusercontent.com/melovin/citaty/main/compliments.json'
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Prague",
				locationID: "3067696",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "070f7e1283abd6422b2a4207b050bce7"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Prague",
				locationID: "3067696",  //ID from https://openweathermap.org/city
				appid: "070f7e1283abd6422b2a4207b050bce7"
			}
		},
		{
			module: "calendar",
			header: "My calendar",
			position: "bottom_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						//url: "https://calendar.google.com/calendar/ical/ruslankazubareva%40gmail.com/private-0af0134671c3dc7cd86a6dc4064b0279/basic.ics"
					}
				]
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
