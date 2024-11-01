

function Main() {
  return (
    <>

      <div className="w-[80%] h-[550px] mx-auto mt-32 flex flex-col justify-center items-center">
        <div className="flex gap-5">
          <img src="/images/Chat1.jpg" alt="Chat" className="w-[250px] h-[250px] rounded-xl " />
          <img src="/images/Chat2.jpg" alt="Chat" className="w-[250px] h-[250px] rounded-xl " />
          <img src="/images/Chat3.jpg" alt="Chat" className="w-[250px] h-[250px] rounded-xl " />
          <img src="/images/Chat4.jpg" alt="Chat" className="w-[250px] h-[250px] rounded-xl " />
        </div>

        <div className="flex flex-col justify-center items-center gap-5 mt-10 ">
          <h3 className="text-xl text-sky-500">
            Made for effortless interaction
          </h3>

          <h2 className="text-3xl font-bold">
            Streamlined discussions <br /> in one location
          </h2>

          <p className="text-lg text-gray-500">
            LoopTalk brings people together for dynamic <br /> conversations
            enhancing collaboration through <br /> intuitive features and
            real-time feedback.
          </p>

        </div>
      </div>
    </>
  );
}
export default Main;