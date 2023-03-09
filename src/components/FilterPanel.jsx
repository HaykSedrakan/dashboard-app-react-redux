import { useSelector, useDispatch } from 'react-redux'
import { Badge } from 'UI/Badge'
import { Card } from 'UI/Card'
import { Stack } from 'UI/Stack'
import { selectFilters } from 'store/filters/filterSelectors'
import { removeFilter, clearFilter } from 'store/filters/filterActions'

const FilterPanel = () => {
  const dispatch = useDispatch()
  const currentFilters = useSelector(selectFilters)

  console.log(currentFilters)

  if (!currentFilters.length) {
    return null
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((item) => (
            <Badge
              variant="clearable"
              key={item}
              onClear={() => dispatch(removeFilter(item))}
            >
              {item}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={() => dispatch(clearFilter)}>
          Clear
        </button>
      </div>
    </Card>
  )
}

export { FilterPanel }
