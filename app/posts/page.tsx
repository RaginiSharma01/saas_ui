'use client'; 

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useRouter } from 'next/navigation';

interface IPost {
  id: number;
  title: string;
  userId: number;
  body: string;
}

export default function ClientPosts() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/posts');
        setPosts(res.data.posts); // FIXED
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  function handleClick(id: number) {
    router.push(`/posts/${id}`);
  }

  if (loading) return <p>Loading...</p>;
//delete post 
async function handleDelete(id:number) {
  try{
    await axios.delete(`https://dummyjson.com/posts/${id}`);

    setPosts((prev)=> prev.filter((post)=>post.id!==id));
  }catch(error){
    console.error(error);
  }
  
}
  return (
    <div className="bg-card-bg grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.id} className="w-full">
          <CardHeader>
            <CardTitle className="text-lg">{post.title}</CardTitle>
            <CardDescription>User ID: {post.userId}</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-gray-600">{post.body}</p>
          </CardContent>

          <CardFooter>
            <CardFooter className="flex gap-2">
  <Button
    onClick={() => handleClick(post.id)}
    variant="outline"
    size="sm"
    className="flex-1 bg-bg-primary"
  >
    Read More
  </Button>

  
  <Button
    onClick={() => handleDelete(post.id)}
    variant="outline"
    size="sm"
    className="flex-1 bg-bg-primary"
  >
    Delete
  </Button>
</CardFooter>

          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
