// src/components/PomodoroTimer.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PlayCircle, PauseCircle, Coffee, Brain, Volume2, VolumeX } from 'lucide-react';
import { Timer } from './Timer';
import { useAudio } from '../hooks/useAudio';
import { secondsToTime } from '../utils/seconds-to-time';

interface PomodoroTimerProps {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export const PomodoroTimer: React.FC<PomodoroTimerProps> = ({
  pomodoroTime,
  shortRestTime,
  longRestTime,
  cycles,
}) => {
  const [mainTime, setMainTime] = useState(pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const [cyclesQtdManager, setCyclesQtdManager] = useState(
    new Array(cycles - 1).fill(true)
  );
  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);
  
  const { playStart, playFinish, toggleMute, muted } = useAudio();

  useEffect(() => {
    let interval: number | null = null;
    
    if (timeCounting) {
      interval = window.setInterval(() => {
        setMainTime((time) => time - 1);
        if (working) {
          setFullWorkingTime((time) => time + 1);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timeCounting, working]);

  const configureWork = useCallback(() => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(pomodoroTime);
    playStart();
  }, [pomodoroTime, playStart]);

  const configureRest = useCallback((long: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);
    setMainTime(long ? longRestTime : shortRestTime);
    playFinish();
  }, [longRestTime, shortRestTime, playFinish]);

  useEffect(() => {
    if (mainTime > 0) return;

    if (working && cyclesQtdManager.length > 0) {
      configureRest(false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      configureRest(true);
      setCyclesQtdManager(new Array(cycles - 1).fill(true));
      setCompletedCycles(completedCycles + 1);
    }

    if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
    if (resting) configureWork();
  }, [
    working,
    resting,
    mainTime,
    cyclesQtdManager,
    numberOfPomodoros,
    completedCycles,
    configureRest,
    configureWork,
    cycles,
  ]);

  return (
    <div className="w-full max-w-md space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Pomodoro Timer</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            className="h-8 w-8"
          >
            {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <Timer mainTime={mainTime} isWorking={working} />
          
          <div className="flex justify-center gap-3">
            <Button
              onClick={configureWork}
              variant="default"
              className="flex gap-2"
            >
              <Brain size={20} />
              Work
            </Button>
            <Button
              onClick={() => configureRest(false)}
              variant="secondary"
              className="flex gap-2"
            >
              <Coffee size={20} />
              Rest
            </Button>
            {(working || resting) && (
              <Button
                onClick={() => setTimeCounting(!timeCounting)}
                variant="outline"
                className="flex gap-2"
              >
                {timeCounting ? (
                  <PauseCircle size={20} />
                ) : (
                  <PlayCircle size={20} />
                )}
                {timeCounting ? "Pause" : "Play"}
              </Button>
            )}
          </div>

          <Separator />

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Completed Cycles:</span>
              <Badge variant="outline">{completedCycles}</Badge>
            </div>
            <div className="flex justify-between">
              <span>Working Time:</span>
              <Badge variant="outline">{secondsToTime(fullWorkingTime)}</Badge>
            </div>
            <div className="flex justify-between">
              <span>Completed Pomodoros:</span>
              <Badge variant="outline">{numberOfPomodoros}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};