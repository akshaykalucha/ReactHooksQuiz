const Meta = ({ className, item }) => {
    return (
      <div className={className}>
        <div className="Meta__header">
          <div className="Meta__title">{item.nameRu}</div>
        </div>
        <img className="Meta__poster" src={item.posterUrl} alt={item.nameEn}/>
        <div className="Meta__year">{item.year}</div>
      </div>
    )
  }
  
  Meta.propTypes = {
    className: PropTypes.string,
    item: PropTypes.object,
  }
  
  Meta.defaultProps = {
    className: '',
    item: {},
  }