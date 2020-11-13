// http://json-schema.org/learn/getting-started-step-by-step.html

const schema = {
  "type": "object",
  "properties": {
    "prop1": {
      "description": "A sample prop 1 string",
      "type": "string"
    },
    "prop2": {
      "description": "A sample prop 2 number",
      "type": "number"
    }
  },
  "required": [ "prop1", "prop2" ]
}

module.exports = schema
