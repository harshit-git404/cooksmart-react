import { useMemo, useRef, useState } from 'react'
import IngredientTag from './IngredientTag.jsx'
import allIngredients from '../utils/ingredients.js'
import { normalizeSearchText, rankSuggestions } from '../utils/search.js'

function IngredientInput({
  ingredients,
  onAddIngredient,
  onRemoveIngredient,
  onClearIngredients,
}) {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef(null)

  const lastSegment = inputValue.split(',').at(-1) ?? ''
  const activeQuery = normalizeSearchText(lastSegment)
  const suggestions = useMemo(
    () => rankSuggestions(allIngredients, activeQuery, ingredients).slice(0, 6),
    [activeQuery, ingredients]
  )

  const addIngredientValue = (value) => {
    const trimmedValue = normalizeSearchText(value)

    onAddIngredient(trimmedValue)
  }

  const commitIngredients = (value) => {
    const parts = value
      .split(',')
      .map((part) => normalizeSearchText(part))
      .filter(Boolean)

    if (parts.length === 0) {
      return false
    }

    parts.forEach(addIngredientValue)
    setInputValue('')
    requestAnimationFrame(() => {
      inputRef.current?.focus()
    })

    return true
  }

  const commitSuggestion = (suggestion) => {
    addIngredientValue(suggestion)
    setInputValue('')
    requestAnimationFrame(() => {
      inputRef.current?.focus()
    })
  }

  const handleChange = (event) => {
    const nextValue = event.target.value

    if (nextValue.includes(',')) {
      const segments = nextValue.split(',')
      const trailingValue = segments.pop() ?? ''
      const committedValue = segments.join(',')

      if (commitIngredients(committedValue)) {
        setInputValue(trailingValue)
        return
      }
    }

    setInputValue(nextValue)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault()

      if (event.key === 'Enter' && suggestions.length > 0 && activeQuery) {
        commitSuggestion(suggestions[0])
        return
      }

      commitIngredients(inputValue)
    }
  }

  const renderSuggestionLabel = (suggestion) => {
    if (!activeQuery) {
      return suggestion
    }

    const normalizedSuggestion = normalizeSearchText(suggestion)
    const matchIndex = normalizedSuggestion.indexOf(activeQuery)

    if (matchIndex === -1) {
      return suggestion
    }

    const start = suggestion.slice(0, matchIndex)
    const match = suggestion.slice(matchIndex, matchIndex + activeQuery.length)
    const end = suggestion.slice(matchIndex + activeQuery.length)

    return (
      <>
        {start}
        <span className="suggestion-match">{match}</span>
        {end}
      </>
    )
  }

  return (
    <div className="input-panel">
      <label htmlFor="ingredient-input" className="section-label">
        Add Ingredients
      </label>

      <div className="input-row">
        <div className="ingredient-input-wrap">
          <input
            id="ingredient-input"
            ref={inputRef}
            className="text-input"
            type="text"
            placeholder="Type ingredient and press Enter"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />

          {activeQuery && (
            <div className="ingredient-suggestions" role="listbox" aria-label="Ingredient suggestions">
              {suggestions.length > 0 ? (
                suggestions.map((ingredient) => (
                  <button
                    key={ingredient}
                    type="button"
                    className="ingredient-suggestion-item"
                    onClick={() => commitSuggestion(ingredient)}
                  >
                    {renderSuggestionLabel(ingredient)}
                  </button>
                ))
              ) : (
                <p className="ingredient-suggestion-empty">No ingredient found</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="tag-panel">
        <div className="tag-list">
          {ingredients.length === 0 && (
            <p className="empty-text">No ingredients added yet.</p>
          )}

          {ingredients.map((ingredient) => (
            <IngredientTag
              key={ingredient}
              ingredient={ingredient}
              onRemove={onRemoveIngredient}
            />
          ))}
        </div>

        {ingredients.length > 0 && (
          <button
            type="button"
            className="secondary-button"
            onClick={onClearIngredients}
          >
            Clear Ingredients
          </button>
        )}
      </div>
    </div>
  )
}

export default IngredientInput
