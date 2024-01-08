
const History = ({ items }) => {

    return (
        <div>
            <div className="history-container">
                {
                    items && items.length > 0 ? (

                        items.map((item, index) => (
                            <li key={index}>
                                <img className="cat-pic" src={item.url} alt="random image from Cat API" width="100" height="100" />
                                <p>A {item.breeds[0].name} cat from {item.breeds[0].origin}</p>
                            </li>
                        ))
                        
                    ) : (
                            <div></div>
                        )
                }
            </div>
        </div>
    );
};

export default History;

