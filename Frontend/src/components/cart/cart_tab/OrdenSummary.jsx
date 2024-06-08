export const OrdenSummary = () => {
  return (
    <div
      style={{
        boxShadow: "0px 16px 24px 0px #16223314,0px 4px 8px -4px #16223314",
      }}
      className="border-[1px] border-text-50 w-[387px] h-[470px] flex flex-col rounded-[16px] overflow-hidden"
    >
      <h3 className="text-h2 text-white text-center font-dm-sans bg-primary-500 py-[23px] px-[24px]">
        Orden Summary
      </h3>
      <section className="px-[28px] mt-[40px]">
        <div className="flex flex-col gap-[12px] border-b-[1px] border-b-text-200">
          <p className="text-body-2 text-text-300 font-inter flex justify-between">
            Total items: <span className="text-text-500">3</span>
          </p>
          <p className="text-body-2 text-text-300 font-inter flex justify-between">
            Order Total: <span className="text-text-500">$32.7</span>
          </p>
          <p className="text-body-2 text-text-300 font-inter flex justify-between mb-[16px]">
            Shipping Cost: <span className="text-green-600">$ 0</span>
          </p>
        </div>
        <h4 className="text-body-1 flex justify-between text-primary-500 font-inter mt-[16px]">
          Total cost: <span className="text-primary-500">$ 32.7</span>
        </h4>
        <div className="flex justify-center mt-[64px]">
          <button
            disabled
            className="w-[270px] h-[50px] rounded-[4px] text-body-1 font-inter disabled:text-text-200 disabled:bg-text-50 disabled:cursor-not-allowed cursor-pointer"
          >
            Procced to Checkout
          </button>
        </div>
      </section>
    </div>
  );
};
