import { useSelector } from 'react-redux'
import { RootState } from '../reducers/index'
import { LayoutState } from '../reducers/layoutReducer'

const useLayout = (): [LayoutState] => {
  const layout = useSelector((state: RootState) => state.layout)
  return [layout]
}

export default useLayout
