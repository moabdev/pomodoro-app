import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { secondsToMinutes } from "../utils/seconds-to-minutes";

interface TimerProps {
  mainTime: number;
  isWorking: boolean;
}

export const Timer: React.FC<TimerProps> = ({ mainTime, isWorking }) => {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="flex flex-col items-center py-6">
        <div className="text-7xl font-mono font-bold mb-4">
          {secondsToMinutes(mainTime)}
        </div>
        <Badge variant={isWorking ? "destructive" : "secondary"}>
          {isWorking ? "Working" : "Resting"}
        </Badge>
      </CardContent>
    </Card>
  );
};
