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

export default function ClientPosts() {
  const [posts, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

   function handleClick(id){
    router.push(`/posts/${id}`);
    
   }

  if (loading) return <p>Loading...</p>;

 return (
  <div className="bg-card-bg grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
    {posts.map((post: any) => (
      <Card key={post.id} className="w-full">
        <CardHeader>
          <CardTitle className="text-lg">{post.title}</CardTitle>
          <CardDescription>User ID: {post.userId}</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-gray-600">{post.body}</p>
        </CardContent>

        <CardFooter>
            
                <Button onClick={()=>handleClick(post.id)} variant="outline" size="sm" className="w-full bg-bg-primary">
                    Read More
                </Button>
            
          
        </CardFooter>
      </Card>
    ))}
  </div>
);
}