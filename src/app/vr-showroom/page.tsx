'use client';

import { useState, useRef, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Upload, Film, Play, ListVideo, Pause } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface VideoFile {
  name: string;
  subject: string;
  src: string;
}

export default function VRShowroomPage() {
  const [videos, setVideos] = useState<VideoFile[]>([]);
  const [currentVideo, setCurrentVideo] = useState<VideoFile | null>(null);
  const [subject, setSubject] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoPlayerRef = useRef<HTMLVideoElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newVideo: VideoFile = {
        name: file.name,
        subject: subject || 'Uncategorized',
        src: URL.createObjectURL(file),
      };
      setVideos((prevVideos) => [...prevVideos, newVideo]);
      if (!currentVideo) {
        handlePlayVideo(newVideo);
      }
      setSubject(''); // Reset subject input
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Reset file input
      }
    }
  };

  const handlePlayVideo = (video: VideoFile) => {
    setCurrentVideo(video);
    if (videoPlayerRef.current) {
      videoPlayerRef.current.src = video.src;
      videoPlayerRef.current.load();
      videoPlayerRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error("Autoplay was prevented: ", error);
        setIsPlaying(false);
      });
    }
  };

  const togglePlayPause = () => {
    if (videoPlayerRef.current) {
      if (isPlaying) {
        videoPlayerRef.current.pause();
      } else {
        videoPlayerRef.current.play();
      }
    }
  };


  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">VR Showroom</h1>
        <p className="text-muted-foreground">
          Upload and experience your own VR videos, organized by subject.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>VR Player</CardTitle>
              <CardDescription>
                {currentVideo
                  ? `Playing: ${currentVideo.name}`
                  : 'Your selected video will be displayed here.'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="group relative aspect-video w-full rounded-lg bg-muted flex items-center justify-center">
                <video
                  ref={videoPlayerRef}
                  src={currentVideo?.src}
                  controls
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  className="w-full h-full rounded-lg"
                />
                {currentVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={togglePlayPause}
                      className="h-20 w-20 rounded-full text-white/80 hover:bg-white/20 hover:text-white"
                    >
                      {isPlaying ? (
                        <Pause className="h-12 w-12" />
                      ) : (
                        <Play className="h-12 w-12" />
                      )}
                    </Button>
                  </div>
                )}
                {!currentVideo && (
                  <div className="text-center text-muted-foreground">
                    <Upload className="mx-auto h-12 w-12" />
                    <p>No video selected</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Upload Video</CardTitle>
              <CardDescription>Add a new video to your playlist.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="e.g., Science, History"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="video-upload">Video File</Label>
                <Input
                  id="video-upload"
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="cursor-pointer file:text-primary file:font-semibold"
                />
              </div>
            </CardContent>
            <CardFooter>
               <p className="text-xs text-muted-foreground">
                Your videos are loaded in the browser and not saved to a server.
              </p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'><ListVideo /> Playlist</CardTitle>
              <CardDescription>Your uploaded videos.</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px] w-full">
                {videos.length > 0 ? (
                  <ul className="space-y-2">
                    {videos.map((video, index) => (
                      <li key={index}>
                        <div className="flex items-center justify-between gap-4">
                          <div className='truncate'>
                            <p className="font-semibold truncate">{video.name}</p>
                            <p className="text-sm text-muted-foreground">{video.subject}</p>
                          </div>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => handlePlayVideo(video)}
                          >
                            <Play className="h-5 w-5" />
                          </Button>
                        </div>
                        {index < videos.length - 1 && <Separator className="my-2" />}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-full">
                    <Film className="h-10 w-10 mb-2" />
                    <p>No videos uploaded yet.</p>
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
