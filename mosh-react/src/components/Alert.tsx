import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void
}

const Alert = (props: Props) => {
  const {children, onClose} = props

  return <div className="alert alert-primary alert-dismissable">
    {children}
    <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={onClose} aria-label="Close"></button>
  </div>;
};

export default Alert;
