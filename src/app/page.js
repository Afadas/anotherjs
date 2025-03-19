export default function Home() {
  return (
    <div className="wrapper px-[16px] db">
      <div className="db">
        <header className="db flex justify-between items-center -[16px]"> 
          <h1>Your Task</h1>
          <img className="w-[24px] h-[24px]" src="/hamburger.png"/>
        </header>
        <main className="flex flex-col gap-[16px]">
          <input type="text" placeholder="search" className="px-[16px] pl-[24px] border-grey-500 border-[1px] rounded-[100px] w-[100%]" />
          <img className="db rounded-[24px] w-[100%]" src="/img1.png" />
          <img className="db rounded-[24px] w-[100%]" src="/img2.png" />


        </main>
      </div>
    </div>
  );
}
