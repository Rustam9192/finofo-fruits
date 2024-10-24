import { ArrowPathIcon } from "@heroicons/react/24/outline";

interface LoaderProps {
  text?: string;
}

const Loading = ({ text }: LoaderProps) => {
  return (
    <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-white">
      <ArrowPathIcon className="h-20 w-20 animate-spin" />
      {text && (
        <p className="mt-3 text-sm font-semibold text-stone-600">{text}</p>
      )}
    </div>
  );
};

export default Loading;
