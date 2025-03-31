export interface LogoProps {
  url: string;
  label?: string;
  imgUrl?: string;
  onClick?: () => void;
}

export const Logo = ({ url, label, imgUrl }: LogoProps) => {
  if (!label) {
    return <span>No content for logo were set</span>;
  }
  return (
    <a href={url} className="cursor-pointer">
      {imgUrl ? <img src={imgUrl} alt="Logo Image" /> : label}
    </a>
  );
};
