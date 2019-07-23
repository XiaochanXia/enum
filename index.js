/**
 * A function to create an object of enum
 * @example <caption>Example usage of Enum By function call.</caption>
 * Enum({
 *   'A': 1,
 *   'B': 2,
 *   'C': 3,
 * });
 * @example <caption>Example usage of Enum By new operator.</caption>
 * new Enum({
 *   'A': 1,
 *   'B': 2,
 *   'C': 3,
 * });
 * @param {Array|Object} opts
 * @returns { Object } Returns the objects like the following:
 * @example {
 *   key1: value1, 
 *   key2, value2,
 *   getPropsByValue(value){ },
 *   getPropsByKey(key){ },
 * }
 */
function Enum(opts) {
  var props = {};
  Object.defineProperty(props, "properties", {
    value: {},
    writable: true,
    configurable: false,
    enumerable: true,
  });

  // TODO: provide the following API:
  /**
   * @example
   * Enum.A.value // 1
   * Enum.A.name // GetA
   * Enum.1.name // GetA
   * @param {} param 
   */
  /**
   * The actual Enum class
   * @constructor
   * @inner
   */
  function InnerEnum(param) {
    var instance = new InnerEnum.fn.init(param, props);
    return Object.freeze(instance);
  }

  InnerEnum.fn = InnerEnum.prototype = {
    getPropsByValue: function getPropsByValue(value) {
      return props.properties[value] || {};
    },
    getPropsByKey: function getPropsByKey(key) {
      return props.properties[key] || {};
    },
  };

  var init = InnerEnum.fn.init = function init(param, props) {
    if (Object.prototype.toString.call(param) === '[object Array]') {
      for (var i = 0; i < param.length; i += 1) {
        var opt = param[i];
        this[opt.key] = opt.value;
        props.properties[opt.value] = opt;
        props.properties[opt.key] = opt;
      }
    } else if (param !== null && typeof param === 'object') {
      // Object
      var keys = [];
      for (var prop in param) {
        if (param.hasOwnProperty(prop)) {
          keys.push(prop);
        }
      }

      for (var j = 0; j < keys.length; j += 1) {
        var key = keys[j];
        this[key] = param[key];
        if (param[key] === null || param[key] === undefined) {
          break;
        }

        if (typeof param[key] === 'object') {
          // such as those { A: { key: 'A', value: 0, code: '1' } }
          props.properties[param[key].value] = param[key];
          props.properties[key] = param[key];
        } else {
          props.properties[param[key]] = {
            key,
            value: param[key],
            name: key,
          };
          props.properties[key] = {
            key,
            value: param[key],
            name: key,
          }
        }
      }
    }
  }

  init.prototype = InnerEnum.fn;

  if (!opts || typeof opts !== 'object') {
    return {};
  }

  return new InnerEnum(opts);
}

module.exports = Enum;
