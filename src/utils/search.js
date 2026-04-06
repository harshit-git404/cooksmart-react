export function normalizeSearchText(value) {
  return value.trim().toLowerCase()
}

export function includesNormalizedMatch(value, query) {
  const normalizedValue = normalizeSearchText(value)
  const normalizedQuery = normalizeSearchText(query)

  if (!normalizedQuery) {
    return true
  }

  return normalizedValue.includes(normalizedQuery)
}

export function rankSuggestions(options, query, excludedValues = []) {
  const normalizedQuery = normalizeSearchText(query)
  const excludedSet = new Set(excludedValues.map(normalizeSearchText))

  return options
    .filter((option) => {
      const normalizedOption = normalizeSearchText(option)

      return (
        normalizedQuery
        && !excludedSet.has(normalizedOption)
        && normalizedOption.includes(normalizedQuery)
      )
    })
    .sort((left, right) => {
      const normalizedLeft = normalizeSearchText(left)
      const normalizedRight = normalizeSearchText(right)
      const leftStartsWith = normalizedLeft.startsWith(normalizedQuery)
      const rightStartsWith = normalizedRight.startsWith(normalizedQuery)

      if (leftStartsWith !== rightStartsWith) {
        return leftStartsWith ? -1 : 1
      }

      const leftIndex = normalizedLeft.indexOf(normalizedQuery)
      const rightIndex = normalizedRight.indexOf(normalizedQuery)

      if (leftIndex !== rightIndex) {
        return leftIndex - rightIndex
      }

      if (normalizedLeft.length !== normalizedRight.length) {
        return normalizedLeft.length - normalizedRight.length
      }

      return normalizedLeft.localeCompare(normalizedRight)
    })
}
