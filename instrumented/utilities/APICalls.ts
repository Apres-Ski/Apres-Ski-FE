function cov_ytmx9d20x() {
  var path = "/Users/mattwalter/turing/mod4/Apres-Ski-FE/src/utilities/APICalls.ts";
  var hash = "540a11dfa9fd6aed46cdc4e4a735a88fd4edd980";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mattwalter/turing/mod4/Apres-Ski-FE/src/utilities/APICalls.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 32
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 15,
          column: 3
        }
      },
      "2": {
        start: {
          line: 5,
          column: 21
        },
        end: {
          line: 10,
          column: 6
        }
      },
      "3": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 32
        }
      },
      "4": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 16
        }
      },
      "5": {
        start: {
          line: 18,
          column: 26
        },
        end: {
          line: 31,
          column: 1
        }
      },
      "6": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 30,
          column: 3
        }
      },
      "7": {
        start: {
          line: 20,
          column: 21
        },
        end: {
          line: 25,
          column: 6
        }
      },
      "8": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 32
        }
      },
      "9": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 16
        }
      },
      "10": {
        start: {
          line: 33,
          column: 26
        },
        end: {
          line: 46,
          column: 1
        }
      },
      "11": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 45,
          column: 3
        }
      },
      "12": {
        start: {
          line: 35,
          column: 21
        },
        end: {
          line: 40,
          column: 6
        }
      },
      "13": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 32
        }
      },
      "14": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 32
          },
          end: {
            line: 3,
            column: 33
          }
        },
        loc: {
          start: {
            line: 3,
            column: 44
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 18,
            column: 26
          },
          end: {
            line: 18,
            column: 27
          }
        },
        loc: {
          start: {
            line: 18,
            column: 38
          },
          end: {
            line: 31,
            column: 1
          }
        },
        line: 18
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 33,
            column: 26
          },
          end: {
            line: 33,
            column: 27
          }
        },
        loc: {
          start: {
            line: 33,
            column: 38
          },
          end: {
            line: 46,
            column: 1
          }
        },
        line: 33
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "540a11dfa9fd6aed46cdc4e4a735a88fd4edd980"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ytmx9d20x = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_ytmx9d20x();
import { API_ROUTES } from './constants';
cov_ytmx9d20x().s[0]++;
export const fetchRestaurants = async () => {
  cov_ytmx9d20x().f[0]++;
  cov_ytmx9d20x().s[1]++;
  try {
    const response = (cov_ytmx9d20x().s[2]++, await fetch(API_ROUTES.GET_RESTAURANTS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }));
    cov_ytmx9d20x().s[3]++;
    return await response.json();
  } catch (error) {
    cov_ytmx9d20x().s[4]++;
    return error;
  }
};
cov_ytmx9d20x().s[5]++;
export const fetchUsers = async () => {
  cov_ytmx9d20x().f[1]++;
  cov_ytmx9d20x().s[6]++;
  try {
    const response = (cov_ytmx9d20x().s[7]++, await fetch(API_ROUTES.GET_USERS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }));
    cov_ytmx9d20x().s[8]++;
    return await response.json();
  } catch (error) {
    cov_ytmx9d20x().s[9]++;
    return error;
  }
};
cov_ytmx9d20x().s[10]++;
export const fetchLifts = async () => {
  cov_ytmx9d20x().f[2]++;
  cov_ytmx9d20x().s[11]++;
  try {
    const response = (cov_ytmx9d20x().s[12]++, await fetch(API_ROUTES.GET_LIFTS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }));
    cov_ytmx9d20x().s[13]++;
    return await response.json();
  } catch (error) {
    cov_ytmx9d20x().s[14]++;
    return error;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBUElfUk9VVEVTIiwiZmV0Y2hSZXN0YXVyYW50cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJHRVRfUkVTVEFVUkFOVFMiLCJtZXRob2QiLCJoZWFkZXJzIiwianNvbiIsImVycm9yIiwiZmV0Y2hVc2VycyIsIkdFVF9VU0VSUyIsImZldGNoTGlmdHMiLCJHRVRfTElGVFMiXSwic291cmNlcyI6WyJBUElDYWxscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElfUk9VVEVTIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbmV4cG9ydCBjb25zdCBmZXRjaFJlc3RhdXJhbnRzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJX1JPVVRFUy5HRVRfUkVTVEFVUkFOVFMsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfUk9VVEVTLkdFVF9VU0VSUywge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hMaWZ0cyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9ST1VURVMuR0VUX0xJRlRTLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvclxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaLFNBQVNBLFVBQVUsUUFBUSxhQUFhO0FBQUE7QUFFeEMsT0FBTyxNQUFNQyxnQkFBZ0IsR0FBRyxZQUFZO0VBQUE7RUFBQTtFQUMxQyxJQUFJO0lBQ0YsTUFBTUMsUUFBUSw0QkFBRyxNQUFNQyxLQUFLLENBQUNILFVBQVUsQ0FBQ0ksZUFBZSxFQUFFO01BQ3ZEQyxNQUFNLEVBQUUsS0FBSztNQUNiQyxPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUU7TUFDbEI7SUFDRixDQUFDLENBQUM7SUFBQTtJQUVGLE9BQU8sTUFBTUosUUFBUSxDQUFDSyxJQUFJLEVBQUU7RUFDOUIsQ0FBQyxDQUFDLE9BQU9DLEtBQUssRUFBRTtJQUFBO0lBQ2QsT0FBT0EsS0FBSztFQUNkO0FBQ0YsQ0FBQztBQUFBO0FBRUQsT0FBTyxNQUFNQyxVQUFVLEdBQUcsWUFBWTtFQUFBO0VBQUE7RUFDcEMsSUFBSTtJQUNGLE1BQU1QLFFBQVEsNEJBQUcsTUFBTUMsS0FBSyxDQUFDSCxVQUFVLENBQUNVLFNBQVMsRUFBRTtNQUNqREwsTUFBTSxFQUFFLEtBQUs7TUFDYkMsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFO01BQ2xCO0lBQ0YsQ0FBQyxDQUFDO0lBQUE7SUFFRixPQUFPLE1BQU1KLFFBQVEsQ0FBQ0ssSUFBSSxFQUFFO0VBQzlCLENBQUMsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7SUFBQTtJQUNkLE9BQU9BLEtBQUs7RUFDZDtBQUNGLENBQUM7QUFBQTtBQUVELE9BQU8sTUFBTUcsVUFBVSxHQUFHLFlBQVk7RUFBQTtFQUFBO0VBQ3BDLElBQUk7SUFDRixNQUFNVCxRQUFRLDZCQUFHLE1BQU1DLEtBQUssQ0FBQ0gsVUFBVSxDQUFDWSxTQUFTLEVBQUU7TUFDakRQLE1BQU0sRUFBRSxLQUFLO01BQ2JDLE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBRTtNQUNsQjtJQUNGLENBQUMsQ0FBQztJQUFBO0lBRUYsT0FBTyxNQUFNSixRQUFRLENBQUNLLElBQUksRUFBRTtFQUM5QixDQUFDLENBQUMsT0FBT0MsS0FBSyxFQUFFO0lBQUE7SUFDZCxPQUFPQSxLQUFLO0VBQ2Q7QUFDRixDQUFDIn0=