type Props = {
  children: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success';
  onClick: () => void;
};

export default function Button(props: Props) {
  const { children, onClick, color = "primary" } = props;

  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}
