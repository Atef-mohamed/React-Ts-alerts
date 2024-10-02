import { ReactNode } from "react";
import "./index.scss";
import { X } from "lucide-react";
import { alertType } from "../../../types";

interface IProps {
  type: alertType;
  icon: ReactNode;
  alertTitle: string;
  description?: string;
  children?: ReactNode;
}
const Alert = ({
  type = "alert-danger",
  icon,
  alertTitle,
  description,
  children,
}: IProps) => {
  return (
    <>
      <div className={type}>
        <div className="alert-header">
          <div className="alert-title">
            <span>{icon}</span>
            <h4>{alertTitle}</h4>
          </div>

          <X className="close" size={20} />
        </div>
        {children ? children : <p>{description}</p>}
      </div>
    </>
  );
};

export default Alert;
