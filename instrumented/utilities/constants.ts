function cov_2h2z4817ce() {
  var path = "/Users/mattwalter/turing/mod4/Apres-Ski-FE/src/utilities/constants.ts";
  var hash = "e07e34c06310f9468112e2f03f98a9b9b22e3868";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mattwalter/turing/mod4/Apres-Ski-FE/src/utilities/constants.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 16
        },
        end: {
          line: 1,
          column: 59
        }
      },
      "1": {
        start: {
          line: 3,
          column: 26
        },
        end: {
          line: 7,
          column: 1
        }
      },
      "2": {
        start: {
          line: 9,
          column: 26
        },
        end: {
          line: 13,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e07e34c06310f9468112e2f03f98a9b9b22e3868"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2h2z4817ce = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2h2z4817ce();
const API_URL = (cov_2h2z4817ce().s[0]++, 'https://arcane-inlet-03546.herokuapp.com/');
export const API_ROUTES = (cov_2h2z4817ce().s[1]++, {
  GET_RESTAURANTS: `${API_URL}api/v1/restaurant/`,
  GET_USERS: `${API_URL}api/v1/user/`,
  GET_LIFTS: `${API_URL}api/v1/lift/`
});
export const APP_ROUTES = (cov_2h2z4817ce().s[2]++, {
  LANDING: '/',
  DEMO: '/demo',
  DASH: '/dashboard'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBUElfVVJMIiwiQVBJX1JPVVRFUyIsIkdFVF9SRVNUQVVSQU5UUyIsIkdFVF9VU0VSUyIsIkdFVF9MSUZUUyIsIkFQUF9ST1VURVMiLCJMQU5ESU5HIiwiREVNTyIsIkRBU0giXSwic291cmNlcyI6WyJjb25zdGFudHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBJX1VSTCA9ICdodHRwczovL2FyY2FuZS1pbmxldC0wMzU0Ni5oZXJva3VhcHAuY29tLydcblxuZXhwb3J0IGNvbnN0IEFQSV9ST1VURVMgPSB7XG4gIEdFVF9SRVNUQVVSQU5UUzogYCR7QVBJX1VSTH1hcGkvdjEvcmVzdGF1cmFudC9gLFxuICBHRVRfVVNFUlM6IGAke0FQSV9VUkx9YXBpL3YxL3VzZXIvYCxcbiAgR0VUX0xJRlRTOiBgJHtBUElfVVJMfWFwaS92MS9saWZ0L2Bcbn1cblxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVMgPSB7XG4gIExBTkRJTkc6ICcvJyxcbiAgREVNTzogJy9kZW1vJyxcbiAgREFTSDogJy9kYXNoYm9hcmQnXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWixNQUFNQSxPQUFPLDZCQUFHLDJDQUEyQztBQUUzRCxPQUFPLE1BQU1DLFVBQVUsNkJBQUc7RUFDeEJDLGVBQWUsRUFBRyxHQUFFRixPQUFRLG9CQUFtQjtFQUMvQ0csU0FBUyxFQUFHLEdBQUVILE9BQVEsY0FBYTtFQUNuQ0ksU0FBUyxFQUFHLEdBQUVKLE9BQVE7QUFDeEIsQ0FBQztBQUVELE9BQU8sTUFBTUssVUFBVSw2QkFBRztFQUN4QkMsT0FBTyxFQUFFLEdBQUc7RUFDWkMsSUFBSSxFQUFFLE9BQU87RUFDYkMsSUFBSSxFQUFFO0FBQ1IsQ0FBQyJ9