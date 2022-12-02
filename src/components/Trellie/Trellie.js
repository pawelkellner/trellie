import Activity from "../Activity/Activity";
import "./Trellie.css";

const Trellie = ({trellie}) =>{
    let listItemsToBeRendered = trellie.activities.map(activity => {
        return(
            <Activity key={activity.id} activity={activity}/>
        );
    })
    return(
        <section className="trellie">
            <header className="trellie__header">
                <h2 className="trellie__heading">
                    {trellie.title || "Placeholder"}
                </h2>
                <div className="trellie__headerWrapper">
                    <div className="trellie__number">
                        {trellie.count || "?"}
                    </div>
                    <button className="trellie__edit">...</button>
                </div>
            </header>
            <ul className="trellie__activities">
                {listItemsToBeRendered}
            </ul>
        </section>
    );
}

export default Trellie;