interface FooterProps {
  className: string;
}

export default function Footer(props: FooterProps) {
  return (
    <p className={`text-center ${props.className}`}>
      Copyright &copy; 2022 Snake Oil Software
    </p>
  );
}
