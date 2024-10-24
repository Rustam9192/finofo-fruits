interface ErrorBoxProps {
  message: string;
}

const ErrorBox = ({ message }: ErrorBoxProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="rounded-lg border border-red-600/20 bg-red-600/10 p-4 text-sm font-semibold text-red-600">
        {message ? message : "Something went wrong..."}
      </p>
    </div>
  );
};

export default ErrorBox;
