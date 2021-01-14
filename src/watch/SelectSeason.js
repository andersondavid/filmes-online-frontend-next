const SelectSeason = ( props ) => {
  const { seasonCurrent, seasonsHandled, setSeasonCurrent } = props

  const handleChangeSeason = event => {
    let seasonSelected = seasonsHandled.find(obj => {
      return obj.season === event.target.value
    })
    setSeasonCurrent(seasonSelected)
  }

  let selectElement = seasonsHandled.map((item, index) => (
    <option value={item.season} key={index.toString()}>
      {item.season}
    </option>
  ))

  return (
    <select
      onChange={handleChangeSeason}
      value={seasonCurrent.season}
      className='custom-select'
    >
      {selectElement}
    </select>
  )
}

export default SelectSeason;