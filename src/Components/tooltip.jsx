import { Tooltip } from "@material-tailwind/react";

export default function TooltipCustomAnimation({ children, desc }) {
  return (
    <Tooltip
      isOpen={false}
      className="bg-[#464646] shadow border-[#464646] rounded-[12px] py-[16px]"
      // placement="bottom"

      content={
        <div className="text-white font-1">
        <div className="w-[200px] p-[14px]  flex flex-col items-start gap-x-[8px] relative  -mb-1">
          <div className="  text-[18px] flex-1 mb-[12px]">
            Total Area - 10ha
          </div>
          <div className="  text-[18px] flex-1 mb-[12px]">Stands - 1,450</div>
          <div className="  text-[18px] flex-1 mb-[12px]">Output - 70mt</div>
        </div>
      </div>
      }
      animate={{
        mount: { scale: 1, y: -50 },
        unmount: { scale: 0, y: 20 },
      }}
    >
      {children}
    </Tooltip>
  );
}
