import './index.css'

const HistoryItem = props => {
  const {eachItem, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

  const clickOnDelete = () => onDelete(id)

  return (
    <li className="historyItemStyleContainer">
      <div className="historyItemStyle">
        <p className="time">{timeAccessed}</p>
        <img className="domainLogo" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>

      <button
        onClick={clickOnDelete}
        type="button"
        className="buttonStyle"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          onClick={clickOnDelete}
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
