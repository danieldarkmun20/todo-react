const ErrorMsg = ({ msg }) => {
  return (
    <div className="uppercase bg-red-800 text-white text-center p-3 font-bold rounded-md mb-3">
      <p>{msg}</p>
    </div>
  );
};

export default ErrorMsg;
