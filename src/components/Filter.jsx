const Filter = ({ filters, handleRemoveFilter }) => {

    return (
        <div>
            <div className="history-container">
                {console.log(filters)}
                {
                    filters && filters.size > 0 ? (

                        Array.from(filters).map(([key, value], index) => (
                            <button key={index} onClick={handleRemoveFilter} type="banned item" className="banned-buttons">{key}</button>
                        ))

                    ) : (
                        <div></div>
                    )
                }
            </div>
        </div>
    );
};

export default Filter;

