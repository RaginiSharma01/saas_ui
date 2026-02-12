'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function PostPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://dummyjson.com/posts/${id}`
        );
        setPost(res.data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!post) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-card-bg">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle className="text-2xl">
            {post.title}
          </CardTitle>
          <CardDescription>
            User ID: {post.userId}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-card-bg">
            {post.body}
          </p>
        </CardContent>

        <CardFooter>
          <Button
            variant="outline"
            size="sm"
            className="w-full bg-bg-primary"
            onClick={() => router.push("/posts")}
          >
            Go Back
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
