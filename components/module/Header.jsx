

function Header() {
  return (
    <>


    <div className="w-full h-[100px] flex justify-center items-center">
       <img src="/images/Logo8.png" alt="" className="w-[100px] h-[100px] " />
       <h3 className="text-2xl font-bold">LoopTalk</h3>
    </div>

   

    <div className="w-full h-[300px] flex ">
       <div className="w-[30%] h-[300px] mx-auto">
          <img src="/images/Pic2.png" alt="Pic" className="w-full h-full object-contain" />
       </div>

       <div className="w-[40%] h-[300px] flex flex-col justify-center items-center gap-5">
          <h2 className="text-3xl font-bold">Stay Connected Keep Talking <br /> Where Conversations Never End</h2>
          <p className="text-xl">Join LoopTalk to easily  connect with friends and <br /> keep the conversation going.</p>
           <div className="flex gap-8 mt-5">
              <button className="w-[150px] h-[50px] bg-cyan-500 text-white rounded-2xl">Download</button>
              <button className="w-[130px] h-[50px] bg-violet-500 text-white rounded-2xl">What Is It?</button>
           </div>
       </div>

       <div className="w-[30%] h-[300px] ">
          <img src="/images/Pic1.png" alt="Pic" className="w-full h-[300px] object-contain" />
       </div>

    </div>

    </>
    
  )
}

export default Header