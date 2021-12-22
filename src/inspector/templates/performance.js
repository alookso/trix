// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
if (!window.JST) {
  window.JST = {}
}

window.JST["trix/inspector/templates/performance"] = function() {
  const metrics = () => {
    this.data.map((name) => {
      const data = this.data[name]
      return dataMetrics(name, data, this.round)
    })
  }

  return metrics.join("\n")
}

const dataMetrics = function(name, data, round) {
  let item = `<strong>${name}</strong> (${data.calls})<br>`

  if (data.calls > 0) {
    item += `\
<div class="metrics">
  Mean: ${round(data.mean)}ms<br>
  Max: ${round(data.max)}ms<br>
  Last: ${round(data.last)}ms
</div>\
`

    return item
  }
}
