"use client";

import { cn } from "@/lib/utils";

export const ProgressBar = ({
  steps,
  currentStep,
}: {
  steps: string[];
  currentStep: number;
}) => {
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between relative">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center z-10">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center",
                currentStep >= index
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-600"
              )}
            >
              {index + 1}
            </div>
            <span
              className={cn(
                "mt-2 text-sm",
                currentStep >= index ? "text-primary" : "text-gray-500"
              )}
            >
              {step}
            </span>
          </div>
        ))}
        <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 -z-10">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
