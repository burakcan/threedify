# http://github.com/neoberg/threedify

class Threedify
  constructor : (options = {}) ->
    @target   = options.target or document.body
    @amount   = options.amount or 10
    @parent   = @target.parentElement

    @target.classList.add 'threedify-target'
    @parent.classList.add 'threedify-parent'

    @iterate()

  iterate : (target = @target, level = 0) ->
    if target instanceof HTMLElement

      target.setAttribute 'data-threedify', level
      @style target

      @iterate child, level+1 for key, child of target.childNodes

  style : (target) ->
    index = target.getAttribute 'data-threedify'
    zAxis = (index) * @amount

    target.setAttribute 'style', "-webkit-transform: translateZ(#{zAxis}px)"

window.addEventListener "load", -> new Threedify amount: 25
