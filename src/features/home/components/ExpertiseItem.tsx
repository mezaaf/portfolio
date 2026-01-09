import { ArrowRightIcon } from "lucide-react";
type Props = {
  id: string;
  title: string;
  description: string;
};
const ExpertiseItem = ({ id, title, description }: Props) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between py-2 md:py-4 border-b">
      <div className="flex gap-2 md:gap-4">
        <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl">{id}.</h1>
        <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl">{title}</h1>
      </div>
      <div className="flex items-center gap-4 justify-center">
        <p className="max-w-sm">{description}</p>
        <span className="hidden md:flex items-center justify-center p-2 border rounded-full border-primary text-primary">
          <ArrowRightIcon className="-rotate-45" />
        </span>
      </div>
    </div>
  );
};

export default ExpertiseItem;
