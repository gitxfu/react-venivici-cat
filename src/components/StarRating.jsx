function StarRating({ items }) {
    const getStarts = rating => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          stars.push(
            <span key={i} className={i <= rating ? 'filled' : 'empty'}>
              {i <= rating ? '★' : '☆'}
            </span>
          );
        }
        return stars;
    }

    return (
      <div className="star-rating">
        <span> Energy level: </span> {getStarts(items[items.length - 1].breeds[0].energy_level)}  <br />
        <span> Intelligence: </span> {getStarts(items[items.length - 1].breeds[0].intelligence)}  <br />
        <span> Social needs: </span> {getStarts(items[items.length - 1].breeds[0].social_needs)}
      </div>
    );
  }
  
  export default StarRating;
  