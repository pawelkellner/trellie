import "./Activity.css";
import Label from "../Label/Label";

const Activity = (props) => {
    return (
    <li className="activity">
      <Label trellieId={props.id} activityId={props.key} activity={props.activity}/>
      <p className="activity__description">
        {props.activity.description || "Placeholder description"}
      </p>
    </li>
  );
};

export default Activity;
