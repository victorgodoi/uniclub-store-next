import Content from "src/components/Content";

const produtos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Loading = () => {
  return (
    <div className="w-[295px] gap-y-10 gap-x-[25px]">
      <div className="w-full h-[446px] bg-grey rounded-md animate-pulse" />
      <div className="flex justify-between mt-5">
        <div className="w-[150px] h-[20px] bg-grey rounded-md animate-pulse" />
        <div className="w-[50px] h-[20px] bg-grey rounded-md animate-pulse" />
      </div>
    </div>
  );
};

const Component = () => {
  return (
    <Content>
      <div className="flex flex-col">
        <div className="grid grid-cols-4 gap-y-10 gap-x-[25px]">
          {produtos?.map((produto) => {
            return (
              <div key={produto}>
                <Loading />
              </div>
            );
          })}
        </div>
      </div>
    </Content>
  );
};

export default Component;
