import Activity from "../Activity/Activity";
import Input from "../Input/Input";
import "./Trellie.css";

const Trellie = (props) => {

    let listItemsToBeRendered = props.trellie.activities.map(activity => {
        return (
            <Activity key={activity.id} activity={activity} />
        );
    })

    return (
        <section className="trellie">
            <header className="trellie__header">
                <h2 className="trellie__heading">
                    {props.trellie.title || "Placeholder"}
                </h2>
                <div className="trellie__headerWrapper">
                    <div className="trellie__number">
                        {props.trellie.activities.length || "?"}
                    </div>
                    <button className="trellie__edit">...</button>
                </div>
            </header>
            <ul className="trellie__activities">
                {listItemsToBeRendered}

            </ul>
            <Input id={props.id}/>
        </section>
    );
}

export default Trellie;